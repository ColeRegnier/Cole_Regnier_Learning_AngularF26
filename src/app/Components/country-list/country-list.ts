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

  countryList: Country[] = [
    {
      name: 'Canada',
      population: 41417056,
      independent: true,
      borders: ['The United States of America', 'Denmark', 'France'],
    },
    {
      name: 'Germany',
      population: 83467117,
      independent: true,
      borders: [
        'Czech Republic',
        'Austria',
        'Denmark',
        'Poland',
        'Switzerland',
        'Belgium',
        'France',
        'Luxembourg',
        'Netherlands',
        'Sweden',
        'United Kingdom',
      ],
    },
    {
      name: 'Mexico',
      population: 134407258,
      independent: true,
      borders: ['The United States of America', 'Guatemala', 'Belize'],
    },
    {
      name: 'Libya',
      population: 7361263,
      independent: true,
      borders: ['Algeria', 'Chad', 'Egypt', 'Niger', 'Sudan', 'Tunisia'],
    },
    { name: 'South Korea', population: 51106229, independent: true, borders: ['North Korea'] },
    { name: 'French Polynesia', population: 2787861, independent: false },
  ];

  protected onContentEvent($event: ContentEvent) {
    if ($event.action==='accept-independence'){
      console.log('Accept Independence');
    }else if ($event.action==='deny-independence'){
      console.log('Deny Independence');
    }
  }
}
