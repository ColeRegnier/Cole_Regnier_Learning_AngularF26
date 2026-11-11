import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { COUNTRY_CONFIG } from './Shared/country-config';
import { CountryList } from './Components/country-list/country-list';
import { CountryService } from './Services/country';
import { MockCountryService } from './Services/mock-country';
import {API_KEY} from './Shared/secretKey';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loadingInterceptor } from './Shared/loading-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([loadingInterceptor])),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    // when you need to use mockCountryService just un comment it when you no longer need it just re comment the useClass portion of code
    /*
    {
      provide: CountryService,
      useClass: MockCountryService,
    },
  */
    {
      provide: COUNTRY_CONFIG,
      useValue: {
        apiBaseUrl: 'https://api.restcountries.com',
        apiKey: API_KEY,
        defaultCountry: 'Canada',
      },
    },
  ],
};
