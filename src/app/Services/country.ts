import { computed, effect, inject, Injectable, Service, signal } from '@angular/core';
import { ContentEvent } from '../Shared/Models/content-event';
import { Country } from '../Shared/Models/country';
import { COUNTRY_CONFIG } from '../Shared/country-config';
import { httpResource } from '@angular/common/http';
import { CountryAPI } from '../Shared/Models/country-api';

@Injectable({ providedIn: 'root' })
export class CountryService {
  private config = inject(COUNTRY_CONFIG);
  private countries = signal<Country[]>([]);
  private countryResource = httpResource<Country[]>(
    () => ({
      url: `${this.config.apiBaseUrl}/countries/v5`,
      params: {
        limit: 100,
        response_fields: 'names.common,population,classification.sovereign,borders',
        'api-key': this.config.apiKey,
      },
    }),
    {
      defaultValue: [],
      parse: (raw) =>
        (raw as CountryAPI).data.objects.map((c) => ({
          name: c.names.common,
          population: c.population,
          independent: c.classification.sovereign,
          // borders are 3 letters any way to fix???
          borders: c.borders,
        })),
    },
  );
  isLoading = this.countryResource.isLoading;
  error = this.countryResource.error;
  // effect
  constructor() {
    // effect for storing the country resource in the countries signal everytime its updated
    effect(() => {
      if (this.countryResource.hasValue()) {
        this.countries.set(this.countryResource.value());
      }
    });
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
    this.secondComputed().filter((country) => country.name == this.config.defaultCountry),
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
  // returns id with that name
  getByName(name: string) {
    return this.countries().find((c) => c.name === name);
  }
  updateCountry(oldName: string, country: Country) {
    this.countries.update((countries) => countries.map((c) => (c.name === oldName ? country : c)));
  }
}
