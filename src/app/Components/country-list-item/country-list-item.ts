import { Component, input, output } from '@angular/core';
import { Country} from '../../Shared/Models/country';

@Component({
  imports: [],
  selector: 'app-country-list-item',
  styleUrl: './country-list-item.css',
  templateUrl: './country-list-item.html',
})
export class CountryListItem {
  // parent must pass country to this class
  country = input.required<Country>();

}
