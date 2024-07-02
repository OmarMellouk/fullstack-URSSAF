import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-wizard-form-etablissement',
  templateUrl: './wizard-form-etablissement.component.html'
})
export class WizardFormEtablissementComponent implements OnInit {

  @Input() formEtablissement: FormGroup;
  @Input() errorMessage;

  labelWidthEtablissement = 150;
  options: {value: string, text: string}[];

  ngOnInit(): void {
    this.options = [
      {value: 'Etablissement principal', text: 'Etablissement principal'},
      {value: 'Etablissement secondaire', text: 'Etablissement secondaire'},
      {value: 'Siège social', text: 'Siège social'},
      {value: 'Siège social et établissement principal', text: 'Siège social et établissement principal'}
    ];
  }

}
