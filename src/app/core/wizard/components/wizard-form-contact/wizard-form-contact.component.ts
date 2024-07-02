import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-wizard-form-contact',
  templateUrl: './wizard-form-contact.component.html'
})
export class WizardFormContactComponent {

  @Input() formMoyensDeContact: FormGroup;
  @Input() errorMessage;

  labelWidthMoyenDeContact = 123;
}
