import { CommunicationSPAModule } from '@acoss/communication-spa-angular';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OngletsComponent } from './onglets.component';
import { PrismeAngularConfiguration, PrismeAngularModule, PrismeAngularInitModule } from '@acoss/prisme-angular-intranet';
import { loadPrismeConfigurationMethode1, loadAppConfig } from '@app/app-config/custom-prisme-configuration.service.spec';
import { AppConfigService } from '@app/app-config/app-config.service';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';


describe('OngletsComponent', () => {
  let component: OngletsComponent;
  let fixture: ComponentFixture<OngletsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OngletsComponent ],
      imports: [
        FormsModule, ReactiveFormsModule,
        CommunicationSPAModule.forRoot('Simu Portail'),
        PrismeAngularInitModule.forRoot('azerty', false),
        PrismeAngularModule,
        NgbNavModule
      ],
      providers: [
        { provide: PrismeAngularConfiguration, useFactory: loadPrismeConfigurationMethode1 },
        { provide: AppConfigService, useFactory: loadAppConfig }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngletsComponent);
    component = fixture.componentInstance;

    spyOn(component, 'setNativeElement');
    spyOn(component, 'checkLimits');
    spyOn(component, 'checkCloseButton');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

