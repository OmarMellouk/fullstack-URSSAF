import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { WizardFormEtablissementComponent } from './wizard-form-etablissement.component';

describe('WizardFormEtablissementComponent', () => {
  let component: WizardFormEtablissementComponent;
  let fixture: ComponentFixture<WizardFormEtablissementComponent>;
  let fb: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WizardFormEtablissementComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardFormEtablissementComponent);
    component = fixture.componentInstance;
    fb = TestBed.inject(FormBuilder);
    component.formEtablissement = fb.group({
      dateDeCreation: [null, null]
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
