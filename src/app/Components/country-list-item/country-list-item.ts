import { Component, input, output } from '@angular/core';
import { Country} from '../../Shared/Models/country';
import {ContentEvent} from '../../Shared/Models/content-event';
import { RouterLink } from '@angular/router';
import { TitleCasePipe, UpperCasePipe } from '@angular/common';


@Component({
  imports: [RouterLink, TitleCasePipe, UpperCasePipe ],
  selector: 'app-country-list-item',
  styleUrl: './country-list-item.css',
  templateUrl: './country-list-item.html',
})
export class CountryListItem {
  // parent must pass country to this class
  country = input.required<Country>();
  ContentEvent = output<ContentEvent>();

  onClick() {
    console.log('=== onClick event ===');
    this.ContentEvent.emit({ name: this.country().name, action: 'select' });
  }
  accept(): void {
    // emitting accepted independence of parent country
    this.ContentEvent.emit({ name: this.country().name, action: 'accept-independence' });
  }
  deny(): void {
    // emitting denied independence of parent country
    this.ContentEvent.emit({ name: this.country().name, action: 'deny-independence' });
  }
}
