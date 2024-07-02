/* eslint-disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiV2RestConfiguration, ApiV2RestConfigurationInterface } from './api-v2rest-configuration';

import { EntrepriseV2Service } from './services/entreprise-v2.service';

/**
 * Provider for all ApiV2Rest services, plus ApiV2RestConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiV2RestConfiguration,
    EntrepriseV2Service
  ],
})
export class ApiV2RestModule {
  static forRoot(customParams: ApiV2RestConfigurationInterface): ModuleWithProviders<ApiV2RestModule> {
    return {
      ngModule: ApiV2RestModule,
      providers: [
        {
          provide: ApiV2RestConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
