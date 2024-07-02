import { PrismeAngularConfiguration, PrismeAngularInitModule, PrismeAngularModule } from '@acoss/prisme-angular-intranet';
import { DatePipe, registerLocaleData } from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpClient} from '@angular/common/http';
import localeFr from '@angular/common/locales/fr';
import {APP_INITIALIZER, forwardRef, LOCALE_ID, NgModule, Provider} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './not-found.component';
import { ApiModule } from './apis/applirest/api-v3/api.module';
import { ApiV2RestModule } from './apis/applirest/api-v2/api-v2rest.module';
import { AppConfigService } from './app-config/app-config.service';
import { CustomPrismeConfigurationService } from '@app/app-config/custom-prisme-configuration.service';
import {ApiInterceptor} from '@app/apis/interceptors/api-interceptor';
import { LayoutModule as MainLayoutModule } from './layout/layout.module';
import { BreadcrumbModule } from '@acoss/breadcrumb-angular-intranet';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AccueilModule } from './core/accueil/accueil.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ApiV3RestConfiguration } from './apis/applirest/api-v3/api-v-3-rest-configuration';
import { ApiV2RestConfiguration } from './apis/applirest/api-v2/api-v2rest-configuration';

registerLocaleData(localeFr);

export const API_INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useExisting: forwardRef(() => ApiInterceptor),
  multi: true
};

export function initRestApiV2Configuration(config: AppConfigService) {
  const restConfig = new ApiV2RestConfiguration();
  restConfig.rootUrl = config.apiBaseUrl().concat('/v2');
  return restConfig;
}

export function initRestApiV3Configuration(config: AppConfigService) {
  const restConfig = new ApiV3RestConfiguration();
  restConfig.rootUrl = config.apiBaseUrl().concat('/v3');
  return restConfig;
}


@NgModule({
  declarations: [
      AppComponent,
      PageNotFoundComponent,
  ],
  imports: [
      HttpClientModule,
      BrowserModule,
      FormsModule,
      AgGridModule,
      NgbModule,
      ApiModule,
      ApiV2RestModule,
      PrismeAngularModule,
      PrismeAngularInitModule.forRoot('fullstackSpaKey', false),
      AppRoutingModule,
      MainLayoutModule,
      BreadcrumbModule,
      AngularSvgIconModule,
      AccueilModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
         deps: [HttpClient],
        }
      })
  ],
  providers: [
    DatePipe,
    { provide: LOCALE_ID, useValue: 'fr' },
    {
     // ceci charge et remplit la conf avec les données trouvées dans notre fichier JSON au démmarage de l'application
      provide: APP_INITIALIZER, useFactory: (config: AppConfigService) => () => config.loadConfiguration(),
      deps: [AppConfigService], multi: true
    },
    {provide: PrismeAngularConfiguration, useClass: CustomPrismeConfigurationService, deps: [AppConfigService], multi: false},
    {provide: ApiV2RestConfiguration, useFactory: initRestApiV2Configuration, deps: [AppConfigService], multi: false},
    {provide: ApiV3RestConfiguration, useFactory: initRestApiV3Configuration, deps: [AppConfigService], multi: false},
    ApiInterceptor,
    API_INTERCEPTOR_PROVIDER
  ],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
