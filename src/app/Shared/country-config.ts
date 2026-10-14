import {InjectionToken} from '@angular/core';
export interface CountryConfig {
  apiBaseUrl: string;
  defaultCountry: string;
}
export const COUNTRY_CONFIG = new InjectionToken<CountryConfig>('country.config');
