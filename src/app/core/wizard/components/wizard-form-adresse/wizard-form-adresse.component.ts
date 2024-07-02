import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-wizard-form-adresse',
  templateUrl: './wizard-form-adresse.component.html'
})
export class WizardFormAdresseComponent {

  @Input() formAdresse: FormGroup;
  @Input() errorMessage;

  labelWidthMoyenDeContact = 99;

}
