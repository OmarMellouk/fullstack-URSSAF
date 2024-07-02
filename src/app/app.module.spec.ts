import { TestBed } from '@angular/core/testing';
import { AppModule } from './app.module';
import { AppConfigService } from './app-config/app-config.service';
import { HttpClient } from '@angular/common/http';
import * as exportableFunctions from './app.module';


describe('AppModule', () => {

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [AppModule]
    });
  });

  it('initializes module', () => {
    const module = TestBed.inject(AppModule);
    expect(module).toBeTruthy();
  });

  it('initializes Rest api configurations', () => {
    const appConfigService = new AppConfigService(TestBed.inject(HttpClient));
    const settings = {
      'apiServer': {
        'baseUrl': '/fullstack_be'
      }
    };
    appConfigService.setSettings(settings);
    const apiV2RestConfiguration = exportableFunctions.initRestApiV2Configuration(appConfigService);
    expect(apiV2RestConfiguration.rootUrl).toBe('/fullstack_be/v2');
    const apiV3RestConfiguration = exportableFunctions.initRestApiV3Configuration(appConfigService);
    expect(apiV3RestConfiguration.rootUrl).toBe('/fullstack_be/v3');
  });

});
