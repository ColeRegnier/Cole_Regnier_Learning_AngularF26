import { Component, inject } from '@angular/core';
import { Country } from '../../Shared/Models/country';
import { CountryListItem } from '../country-list-item/country-list-item';
import {ContentEvent} from '../../Shared/Models/content-event';
import { CountryService} from '../../Services/country';
@Component({
  imports: [CountryListItem],
  selector: 'app-country-list',
  styleUrl: './country-list.css',
  templateUrl: './country-list.html',
})
export class CountryList {
  private countryService= inject(CountryService);
  protected countryList = this.countryService.countryList;
  protected countriesSorted = this.countryService.secondComputed;

  protected onContentEvent($event: ContentEvent) {
    console.log('=== $event: ' + $event +' ===');
    if ($event.action==='accept-independence'){
      console.log('Accept Independence');
    }else if ($event.action==='deny-independence'){
      console.log('Deny Independence');
    } else if ($event.action==='select'){
        console.log('Selected:',$event.name);
        this.countryService.removeCountry($event.name)
    }
  }
}
