import { DatePipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { FormulaireNaissanceComponent } from './formulaire-naissance.component';

describe('FormulaireNaissanceComponent', () => {
  let component: FormulaireNaissanceComponent;
  let fixture: ComponentFixture<FormulaireNaissanceComponent>;
  let fb: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireNaissanceComponent ],
      providers: [DatePipe],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireNaissanceComponent);
    component = fixture.componentInstance;
    fb = TestBed.inject(FormBuilder);
    component.form = fb.group({
      dateDeNaissance: [null, null],
      paysDeNaissance: [null, null],
      communeDeNaissance: [null, null],
      communeDeNaissanceEtranger: [null, null]
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
