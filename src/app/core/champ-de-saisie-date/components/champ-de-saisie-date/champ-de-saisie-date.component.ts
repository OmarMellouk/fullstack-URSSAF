
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-champ-de-saisie-date',
  templateUrl: './champ-de-saisie-date.component.html'
})
export class ChampDeSaisieDateComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      currentDate: [{value: null, disabled: false}, null]
    });
  }
}
