import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppConfigService } from '@app/app-config/app-config.service';
import { AppConfigMock } from '@app/app-config/custom-prisme-configuration.service.spec';
import { LienComponent } from './lien.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('LienComponent', () => {
  let component: LienComponent;
  let fixture: ComponentFixture<LienComponent>;

  const appConfigServiceFactory = (httpClient: HttpClient) =>
  new AppConfigService(httpClient).setSettings(AppConfigMock);

  const appConfigServiceProvider = {
    provide: AppConfigService,
    useFactory: appConfigServiceFactory,
    deps: [HttpClient]
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LienComponent],
      imports: [HttpClientModule],
      providers: [appConfigServiceProvider]
      });
 }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

});

