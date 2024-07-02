/* eslint-disable */
/* eslint-disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration
 */
@Injectable({
  providedIn: 'root',
})
export class ApiV3RestConfiguration {
  rootUrl: string = '/fullstack_be/v3';
}

/**
 * Parameters for `ApiModule.forRoot()`
 */
export interface ApiV3RestConfigurationParams {
  rootUrl?: string;
}
