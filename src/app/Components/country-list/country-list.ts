import { Component } from '@angular/core';
import { Country } from '../../Shared/Models/country';
import { CountryListItem } from '../country-list-item/country-list-item';
import {ContentEvent} from '../../Shared/Models/content-event';

@Component({
  imports: [CountryListItem],
  selector: 'app-country-list',
  styleUrl: './country-list.css',
  templateUrl: './country-list.html',
})
export class CountryList {



  protected onContentEvent($event: ContentEvent) {
    if ($event.action==='accept-independence'){
      console.log('Accept Independence');
    }else if ($event.action==='deny-independence'){
      console.log('Deny Independence');
    }
  }
}
