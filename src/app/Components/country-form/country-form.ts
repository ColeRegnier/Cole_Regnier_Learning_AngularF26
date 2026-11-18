import {
  afterNextRender,
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  input,
  viewChild,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { CountryService } from '../../Services/country';
import { Country } from '../../Shared/Models/country';
//takes control value can return a null value
//
export function validateNotBlank(control:AbstractControl):ValidationErrors  | null{
  // control.value is the form value we need to check
  // if value is empty with spaces removed or undefined
  if (control.value === undefined || typeof control.value === "string" && control.value.trim() === '') {
    // returning error obj
    return { blank: true };
  }
  // returning null
  return null;
}
// cross-field validator to check if the bordering countries include themself
export function validateBorderNotSelf(control: AbstractControl): ValidationErrors | null {
  // constants
  // name is value of name field trimmed and parsed to lowercase
  // need to include ?? incase null errors otherwise.
  const name= (control.get('name')?.value??'').trim().toLowerCase();
  // gets the string of all border, splits them on ',' then map runs trim on each item
  const borders = (control.get('borders')?.value ?? '')
    .split(',')
    .map((border: string) => border.trim().toLowerCase());
  // if border array includes name
  if (borders.includes(name) &&name) {
    // returning error obj
    return {borderNotSelf: true };
  }

  // returning null
  return null;
}

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-country-form',
  styleUrl: './country-form.css',
  templateUrl: './country-form.html',
})
export class CountryForm {
  private formbuilder = inject(FormBuilder);
  private countryService = inject(CountryService);
  private firstField = viewChild<ElementRef>('firstField');
  name = input<string>();
  // boolean t/f if this objs name isnt undefined
  protected isEditMode = computed(() => this.name() !== undefined);
  private validateNameNotDupe = (control: AbstractControl): ValidationErrors | null => {
    let newName = (control.value || '').trim().toLowerCase();
    let currentName = (this.name() || '').toLowerCase();
    let taken = this.countryService
      .countryList()
      .some(
        (country) =>
          country.name.toLowerCase() === newName && country.name.toLowerCase() !== currentName,
      );
    return taken ? { name: taken } : null;
  };
  // building a country object based off the service
  protected countryForm = this.formbuilder.nonNullable.group(
    {
      // shortest country name has 4 letters
      // ask matt why the form fields are arrays
      name: [
        '',
        [Validators.required, Validators.minLength(4), validateNotBlank, this.validateNameNotDupe],
      ],
      // smallest population is the vatican so min is 500
      population: [0, [Validators.required, Validators.min(500)]],
      //minimum population
      independent: [true],
      // borders need to be comma seperated
      borders: [''],
    },
    // validator for whole form field
    { validators: validateBorderNotSelf },
  );

  constructor() {
    // runs effect when name signal changes, so changing edit refills form
    effect(() => {
      const name = this.name();
      if (name === undefined) {
        return;
      }
      // cast to string
      const country = this.countryService.getByName(String(name));
      if (country) {
        // unlike matt we do have to fill the in the primary key or whatever its called. country name
        this.countryForm.patchValue({
          name: country.name,
          population: Number(country.population),
          independent: country.independent,
          borders: country.borders?.join(', ') ?? '',
        });
      }
    });
    //we yse afterNextRender to call focus() because constructor builds the logic of the component but the html template hasnt been made or rendered yet. In this case the the next render would be the first render. if it were on
    // onInit it would run before the html was created and couldnt access the html elements because of that.
    afterNextRender(()=>{ this.firstField()?.nativeElement.focus();});
  }

  protected onSubmit() {
    console.log('form submitted');
    if (this.countryForm.invalid) {
      return;
    }
    const formValue = this.countryForm.getRawValue();
    const country: Country = {
      name: formValue.name,
      population: formValue.population,
      independent: formValue.independent,
      // because borders is a string array and formValue is just a string we have to split it on ','
      borders: formValue.borders.split(',').map((border) => border.trim()),
    };
    if (this.isEditMode()) {
      console.log('country updated');
      this.countryService.updateCountry(this.name()!, country);
    } else {
      this.countryService.addCountry(country);
    }
  }
}
