/* eslint-disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration for ApiV2Rest services
 */
@Injectable({
  providedIn: 'root',
})
export class ApiV2RestConfiguration {
  rootUrl: string = '/fullstack_be/v2';
}

export interface ApiV2RestConfigurationInterface {
  rootUrl?: string;
}
