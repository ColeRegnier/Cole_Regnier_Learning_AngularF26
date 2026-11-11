import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {Brewery} from './Shared/Models/brewery';
import {Country} from './Shared/Models/country';
import { count } from 'rxjs';
import { CountryList } from './Components/country-list/country-list';
import {GuardService} from './Services/guard-service';
import { LoadingService } from './Services/loading';

const name = "Cole";
const assignmentNum = "2";
@Component({
  imports: [RouterOutlet, CountryList, RouterLink, RouterLinkActive],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  // importing guard
  protected guard = inject(GuardService);

  private loadingService = inject(LoadingService);
  protected isLoading = this.loadingService.isLoading;

  protected countryList: Country[] = [
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
}
