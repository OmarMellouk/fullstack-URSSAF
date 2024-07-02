import { PrismeAngularConfiguration, PrismeAngularInitModule, PrismeAngularModule } from '@acoss/prisme-angular-intranet';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppConfigService } from '@app/app-config/app-config.service';
import { loadAppConfig, loadPrismeConfigurationMethode1 } from '@app/app-config/custom-prisme-configuration.service.spec';
import { HabilitationPSSComponent } from './habilitation-pss.component';

describe('HabilitationPSSComponent', () => {
  let component: HabilitationPSSComponent;
  let fixture: ComponentFixture<HabilitationPSSComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HabilitationPSSComponent ],
      imports: [ FormsModule, ReactiveFormsModule, PrismeAngularInitModule.forRoot('azerty', false),  PrismeAngularModule ],
      providers: [
        { provide: PrismeAngularConfiguration, useFactory: loadPrismeConfigurationMethode1 },
        { provide: AppConfigService, useFactory: loadAppConfig }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilitationPSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
