import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { FormulaireIdentiteComponent } from './formulaire-identite.component';

describe('FormulaireIdentiteComponent', () => {
  let component: FormulaireIdentiteComponent;
  let fixture: ComponentFixture<FormulaireIdentiteComponent>;
  let fb: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireIdentiteComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireIdentiteComponent);
    component = fixture.componentInstance;
    fb = TestBed.inject(FormBuilder);
    component.form = fb.group({
      sexe: [null, null],
      civilite: [null, null],
      nomPatronymique: [null, null],
      prenomsPatronymiques: [null, null],
      nomUsage: [null, null],
      prenomUsage: [null, null],
      pseudonyme: [null, null]
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
