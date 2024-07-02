import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireDecesComponent } from './formulaire-deces.component';

describe('FormulaireDecesComponent', () => {
  let component: FormulaireDecesComponent;
  let fixture: ComponentFixture<FormulaireDecesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireDecesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireDecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
