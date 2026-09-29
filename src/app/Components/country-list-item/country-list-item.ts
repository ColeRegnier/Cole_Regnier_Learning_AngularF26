import { Component, input, output } from '@angular/core';
import { Country} from '../../Shared/Models/country';
import {ContentEvent} from '../../Shared/Models/content-event';


@Component({
  imports: [],
  selector: 'app-country-list-item',
  styleUrl: './country-list-item.css',
  templateUrl: './country-list-item.html',
})
export class CountryListItem {

  // parent must pass country to this class
  country = input.required<Country>();
  ContentEvent = output<ContentEvent>();
  accept():void{
    // emitting accepted independence of parent country
    this.ContentEvent.emit({ name: this.country().name, action: 'accept-independence' });

  }
  deny():void{
    // emitting denied independence of parent country
    this.ContentEvent.emit({ name: this.country().name, action: 'deny-independence' });
  }
}
