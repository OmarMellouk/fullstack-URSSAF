import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireGestionErreursContainerComponent } from './formulaire-gestion-erreurs-container.component';

describe('FormulaireGestionErreursContainerComponent', () => {
  let component: FormulaireGestionErreursContainerComponent;
  let fixture: ComponentFixture<FormulaireGestionErreursContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireGestionErreursContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireGestionErreursContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
