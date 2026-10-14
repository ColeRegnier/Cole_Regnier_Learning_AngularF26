import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { COUNTRY_CONFIG } from './Shared/country-config';
import { CountryList } from './Components/country-list/country-list';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),


    {
      provide: COUNTRY_CONFIG,
      useValue: { apiBaseUrl: 'https://placeholder.example.com/api', defaultCountry: 'Canada' }
    }


  ]
};
