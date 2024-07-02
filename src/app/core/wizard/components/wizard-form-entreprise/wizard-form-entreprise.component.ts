import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-wizard-form-entreprise',
  templateUrl: './wizard-form-entreprise.component.html'
})
export class WizardFormEntrepriseComponent implements OnInit {

  @Input() formEntreprise: FormGroup;
  @Input() errorMessage;

  labelWidthEntreprise = 137;
  options: {value: string, text: string}[];

  ngOnInit(): void {
    this.options = [
      {value: 'Entreprise individuelle (EI)', text: 'Entreprise individuelle (EI)'},
      {value: 'Société à responsabilité limitée (SARL)', text: 'Société à responsabilité limitée (SARL)'},
      {value: 'Société par actions simplifiée (SAS)', text: 'Société par actions simplifiée (SAS)'},
      {value: 'Société anonyme (SA)', text: 'Société anonyme (SA)'}
    ];
  }

}
