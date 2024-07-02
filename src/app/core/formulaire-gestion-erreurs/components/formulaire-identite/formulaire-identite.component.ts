import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulaire-identite',
  templateUrl: './formulaire-identite.component.html'
})
export class FormulaireIdentiteComponent {

  @Input() isEditing: boolean;
  @Input() form: FormGroup;

  labelWidthRadio: number = 136;
  labelWidth: number = 161;
  
  radioLabelList = [
    {label: 'Féminin', value: 'Féminin'},
    {label: 'Masculin', value: 'Masculin'}
  ];

  radioLabelList2 = [
    {label: 'Madame', value: 'Madame'},
    {label: 'Monsieur', value: 'Monsieur'}
  ];

}
