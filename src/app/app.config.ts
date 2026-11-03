import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { COUNTRY_CONFIG } from './Shared/country-config';
import { CountryList } from './Components/country-list/country-list';
import { CountryService } from './Services/country';
import { MockCountryService } from './Services/mock-country';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes,withComponentInputBinding()),
    // when you need to use mockCountryService just un comment it when you no longer need it just re comment the useClass portion of code
    /*
    {
      provide: CountryService,
      useClass: MockCountryService,
    },
  */
    {
      provide: COUNTRY_CONFIG,
      useValue: { apiBaseUrl: 'https://placeholder.example.com/api', defaultCountry: 'Canada' },
    },
  ],
};
