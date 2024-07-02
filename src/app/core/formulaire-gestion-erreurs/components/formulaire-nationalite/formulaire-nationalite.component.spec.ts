import { DatePipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { FormulaireNationaliteComponent } from './formulaire-nationalite.component';

describe('FormulaireNationaliteComponent', () => {
  let component: FormulaireNationaliteComponent;
  let fixture: ComponentFixture<FormulaireNationaliteComponent>;
  let fb: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireNationaliteComponent ],
      providers: [DatePipe],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireNationaliteComponent);
    component = fixture.componentInstance;
    fb = TestBed.inject(FormBuilder);
    component.form = fb.group({
      nationalite: [null, null],
      numeroDeTitreDeSejour: [null, null],
      typeDeTitreDeSejour: [null, null]
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
