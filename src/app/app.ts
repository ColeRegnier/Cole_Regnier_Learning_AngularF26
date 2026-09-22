import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Brewery} from './Shared/Models/brewery';
import {Country} from './Shared/Models/country';
import { count } from 'rxjs';

const name = "Cole";
const assignmentNum = "2";
@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',

})
export class App {
  protected readonly title = signal('Assignment 2');
  protected countryList: Country[] = [
    { name: 'Canada', population: 41417056, independent: true, borders: ['The United States of America','Denmark','France'] },
    { name: 'Germany', population: 83467117, independent: true, borders: ['Czech Republic','Austria','Denmark','Poland','Switzerland','Belgium','France','Luxembourg', 'Netherlands','Sweden','United Kingdom'], },
    { name: 'Mexico', population: 134407258, independent: true, borders: ['The United States of America','Guatemala','Belize'] },
    { name: 'Libya', population: 7361263, independent: true, borders: ['Algeria','Chad','Egypt','Niger','Sudan','Tunisia'] },
    { name: 'South Korea', population: 51106229, independent: true, borders: ['North Korea'] },
    { name: 'French Polynesia', population: 2787861, independent: false},
  ];

  protected readonly assignmentNum = assignmentNum;
  protected readonly name = name;
  protected readonly count = count;
}
