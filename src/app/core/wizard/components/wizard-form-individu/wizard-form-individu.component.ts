import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-wizard-form-individu',
  templateUrl: './wizard-form-individu.component.html'
})
export class WizardFormIndividuComponent {

  @Input() formIndividu: FormGroup;
  @Input() errorMessage;

  labelWidthIndividu = 134;
  radioLabelList = [
    {label: 'Madame', value: 'Madame'},
    {label: 'Monsieur', value: 'Monsieur'}
  ];
}
