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
import { errorInterceptor } from './Shared/error-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    // for my app the loading order doesnt matter because they both pass the error along so both of them will be able to read it no matter the order.
    // the interceptors also dont change the request either so they dont share dependencies.
    provideHttpClient(withInterceptors([loadingInterceptor,errorInterceptor])),
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
