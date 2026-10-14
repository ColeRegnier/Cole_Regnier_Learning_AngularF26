import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { COUNTRY_CONFIG } from './Shared/country-config';

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
