import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { WizardFormIndividuComponent } from './wizard-form-individu.component';

describe('WizardFormIndividuComponent', () => {
  let component: WizardFormIndividuComponent;
  let fixture: ComponentFixture<WizardFormIndividuComponent>;
  let fb: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WizardFormIndividuComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardFormIndividuComponent);
    component = fixture.componentInstance;
    fb = TestBed.inject(FormBuilder);
    component.formIndividu = fb.group({
      dateDeNaissance: [null, null]
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
