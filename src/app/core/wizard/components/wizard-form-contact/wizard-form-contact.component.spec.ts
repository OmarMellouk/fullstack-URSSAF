import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { WizardFormContactComponent } from './wizard-form-contact.component';

describe('WizardFormContactComponent', () => {
  let component: WizardFormContactComponent;
  let fixture: ComponentFixture<WizardFormContactComponent>;
  let fb: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WizardFormContactComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardFormContactComponent);
    component = fixture.componentInstance;
    fb = TestBed.inject(FormBuilder);
    component.formMoyensDeContact = fb.group({});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
