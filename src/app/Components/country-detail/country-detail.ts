import { Component, computed, inject, input, signal } from '@angular/core';
import { CountryService } from '../../Services/country';
import { Country } from '../../Shared/Models/country';
import { RouterLink } from '@angular/router';
import { PopulationPipePipe } from '../../pipes/population-pipe-pipe';
import { IndependentPipePipe } from '../../pipes/independent-pipe-pipe';

@Component({
  imports: [RouterLink, PopulationPipePipe, IndependentPipePipe],
  selector: 'app-country-detail',
  styleUrl: './country-detail.css',
  templateUrl: './country-detail.html',
})
export class CountryDetail {
  private countryService = inject(CountryService);
  // setting name to
  name = input.required<string>();
  country = computed(() => this.countryService.getByName(this.name()));
  opened?:Date;
  ngOnInit() {
    this.opened = new Date();
    let id = this.countryService.getByName(this.name());
    console.log('[OnInit] opened: ' + this.name  + '\n Opened: ' + this.opened);
  }
  ngOnDestroy() {
    if (this.opened) {
      let time = (Date.now() - this.opened.getTime()) / 1000;
      console.log("[OnDestroy] closed : " + this.name + " after " + time + "seconds." );
    }
  }
}
