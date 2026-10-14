import { computed, effect, inject, Injectable, Service, signal } from '@angular/core';
import { Country } from '../Shared/Models/country';

@Injectable()
export class MockCountryService {

  private countries = signal<Country[]>([
    {
      name: 'Mock Greece',
      population: 41417056,
      independent: true,
      borders: ['The United States of America', 'Denmark', 'France'],
    },
    {
      name: 'Mock Albania',
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
      name: 'Mock Spain',
      population: 134407258,
      independent: true,
      borders: ['The United States of America', 'Guatemala', 'Belize'],
    },
    {
      name: 'Mock Russia',
      population: 7361263,
      independent: true,
      borders: ['Algeria', 'Chad', 'Egypt', 'Niger', 'Sudan', 'Tunisia'],
    },
  ]);
  constructor() {
    console.log('CountryService constructor');
    effect(() => {
      console.log('===Total number of countries ' + this.countries().length + '===');
    });
  }

  countryList = this.countries.asReadonly();
  // computed signal function uses filter on array. filter function returns all country objects to the contries Country[] array that are not undefined
  countryWithBorders = computed(() =>
    this.countries().filter((country) => country.borders !== undefined),
  );
  // spread makes a copy of the array so its safe to use sort on it. sorts the array by countries with the most borders first and least with last
  secondComputed = computed(() =>
    [...this.countryWithBorders()].sort((a, b) => {
      if (a.borders && b.borders) {
        if (a.borders.length < b.borders.length) return 1;
        else if (a.borders.length > b.borders.length) return -1;
        else return 0;
      } else {
        return 0;
      }
    }),
  );
  countryListConfig = computed(() =>
    this.secondComputed().filter((country) =>  this.secondComputed()),
  );
  addCountry(country: Country) {
    // spreads the array of country objects and update adds the country provided to this method as an argument
    // update doesnt mutate array it swaps it with an entirley new one.
    this.countries.update((list) => [...list, country]);
  }
  removeCountry(name: string) {
    this.countries.update((list) => list.filter((country) => country.name !== name));
    console.log('Country removed: ' + name);
  }
}
