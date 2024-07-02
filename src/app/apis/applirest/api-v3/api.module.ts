/* eslint-disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiV3RestConfiguration, ApiV3RestConfigurationParams } from './api-v-3-rest-configuration';

import { EntrepriseService } from './services/entreprise.service';
import { CommuneService } from './services/commune.service';
import { SuiviCreationEntrepriseErreursService } from './services/suivi-creation-entreprise-erreurs.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    EntrepriseService,
    CommuneService,
    SuiviCreationEntrepriseErreursService,
    ApiV3RestConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiV3RestConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiV3RestConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
