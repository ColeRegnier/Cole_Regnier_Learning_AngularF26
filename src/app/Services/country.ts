import { computed, effect, Service, signal } from '@angular/core';
import { ContentEvent } from '../Shared/Models/content-event';
import { Country } from '../Shared/Models/country';
@Service()
export class CountryService {
  private countries = signal<Country[]>([
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
    { name: 'South Korea',
      population: 51106229,
      independent: true,
      borders: ['North Korea']},

    { name: 'French Polynesia',
      population: 2787861,
      independent: false },
  ]);

  // effect
  constructor(){
    console.log('CountryService constructor');
    effect(() => { console.log('===Total number of countries ' + this.countries().length +'===');
    });
  }

  countryList = this.countries.asReadonly();
  // computed signal function uses filter on array. filter function returns all country objects to the contries Country[] array that are not undefined
  countryWithBorders = computed(()=>this.countries().filter(country => country.borders !== undefined));
  // spread makes a copy of the array so its safe to use sort on it. sorts the array by countries with the most borders first and least with last
  secondComputed =computed(()=>[...this.countryWithBorders()].sort((a,b) =>
  { if (a.borders && b.borders){
    if (a.borders.length < b.borders.length) return 1;
    else if (a.borders.length > b.borders.length) return -1;
    else return 0;
  }else {
    return 0;
  }
  }));
  addCountry(country: Country) {
    // spreads the array of country objects and update adds the country provided to this method as an argument
    // update doesnt mutate array it swaps it with an entirley new one.
    this.countries.update((list) => [...list, country]);
  }
  removeCountry(name:string) {
    this.countries.update((list) => list.filter(country => country.name !== name));
    console.log("Country removed: " + name);
  }
}
