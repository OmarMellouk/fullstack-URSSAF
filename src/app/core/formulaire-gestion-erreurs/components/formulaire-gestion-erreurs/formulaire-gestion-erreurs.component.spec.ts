import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { TextFormatPipe } from '@app/fullstack-components/utils/text-format/text-format.service';
import { ValidatorsService } from '../../services/validators.service';
import { FormulaireGestionErreursComponent } from './formulaire-gestion-erreurs.component';

class mockValidatorsService {
  customRequiredValidator() {
    return function validate() {
      return null;
    }
  }
  customLengthValidator() {
    return function validate() {
      return null;
    }
  }
  customNumberOnlyValidator() {
    return function validate() {
      return null;
    }
  }
  customCharOnlyValidator() {
    return function validate() {
      return null;
    }
  }
  customBeforeDateValidator() {
    return function validate() {
      return null;
    }
  }
  allowOnlyNumber() {}
}

describe('FormulaireGestionErreursComponent', () => {
  let component: FormulaireGestionErreursComponent;
  let fixture: ComponentFixture<FormulaireGestionErreursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireGestionErreursComponent, TextFormatPipe],
      imports: [ReactiveFormsModule],
      providers: [
        {provide: ValidatorsService, useClass: mockValidatorsService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireGestionErreursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
