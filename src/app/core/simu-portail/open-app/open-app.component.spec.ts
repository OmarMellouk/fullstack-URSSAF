import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OpenAppComponent } from './open-app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { loadPrismeConfigurationMethode1 } from '@app/app-config/custom-prisme-configuration.service.spec';
import { PrismeAngularConfiguration } from '@acoss/prisme-angular-intranet';

describe('OpenAppComponent', () => {
  let component: OpenAppComponent;
  let fixture: ComponentFixture<OpenAppComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenAppComponent ],
      imports: [ FormsModule, ReactiveFormsModule ],
      providers: [
        { provide: PrismeAngularConfiguration, useFactory: loadPrismeConfigurationMethode1 }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

