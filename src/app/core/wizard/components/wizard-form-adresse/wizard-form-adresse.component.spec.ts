import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { WizardFormAdresseComponent } from './wizard-form-adresse.component';

describe('WizardFormAdresseComponent', () => {
  let component: WizardFormAdresseComponent;
  let fixture: ComponentFixture<WizardFormAdresseComponent>;
  let fb: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WizardFormAdresseComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WizardFormAdresseComponent);
    component = fixture.componentInstance;
    fb = TestBed.inject(FormBuilder);
    component.formAdresse = fb.group({});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
