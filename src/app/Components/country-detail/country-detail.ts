import { Component, computed, inject, input } from '@angular/core';
import { CountryService } from '../../Services/country';
import { Country } from '../../Shared/Models/country';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-country-detail',
  styleUrl: './country-detail.css',
  templateUrl: './country-detail.html',
})
export class CountryDetail {
  private countryService = inject(CountryService);
  // setting name to
  name = input.required<string>();
  country = computed(() => this.countryService.getByName(this.name()));
}
