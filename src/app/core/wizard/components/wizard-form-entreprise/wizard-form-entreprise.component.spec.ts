import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { WizardFormEntrepriseComponent } from './wizard-form-entreprise.component';

describe('WizardFormEntrepriseComponent', () => {
  let component: WizardFormEntrepriseComponent;
  let fixture: ComponentFixture<WizardFormEntrepriseComponent>;
  let fb: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WizardFormEntrepriseComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardFormEntrepriseComponent);
    component = fixture.componentInstance;
    fb = TestBed.inject(FormBuilder);
    component.formEntreprise = fb.group({
      dateDebutActivite: [null, null],
      dateFinActivite: [null, null]
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
