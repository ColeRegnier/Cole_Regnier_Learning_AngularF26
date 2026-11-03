import { Routes } from '@angular/router';
import { CountryList } from './Components/country-list/country-list';
import { CountryDetail } from './Components/country-detail/country-detail';
import { CountryForm } from './Components/country-form/country-form';
import { editGuardGuard } from './Services/guard/edit-guard-guard';
export const routes: Routes = [
  // countries route that displays country list
  {path:'countries', component:CountryList},
  // paramaterized route that displays the detail element and gets by :name
  {path:'countries/:name', component:CountryDetail},
  {path:'add', component:CountryForm},
  {path:'edit/:name', component: CountryForm, canActivate: [editGuardGuard]},

  {path:'**', redirectTo: 'countries', pathMatch: 'full'},
];
