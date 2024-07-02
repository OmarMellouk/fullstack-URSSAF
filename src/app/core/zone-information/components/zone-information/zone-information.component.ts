import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-zone-information-sample',
  templateUrl: './zone-information.component.html',
  styleUrls: ['./zone-information.component.scss']
})
export class ZoneInformationComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      denomiation: ['Sarl Martin', Validators.required],
      nomCommercial: ['Sarl Martin', null],
      formeJuridique: ['Sarl Martin', null],
      typeEntreprise: ['Sarl Martin', null],
      regimeFiscal: ['Sarl Martin', null],
      activitePrincipale: ['110 - Régime spécial BNC', null],
      optionEIRL: ['Sarl Martin', null]
    });
  }

}
