import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Brewery} from './Shared/Models/brewery';
const name = "Cole";
const assignmentNum = "1";
@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Lab1Angular');
  breweryList : Brewery [] = [ ]

  protected readonly assignmentNum = assignmentNum;
  protected readonly name = name;
}
