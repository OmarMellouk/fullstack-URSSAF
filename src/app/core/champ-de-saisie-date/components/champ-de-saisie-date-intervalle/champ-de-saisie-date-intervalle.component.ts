import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-champ-de-saisie-date-intervalle-sample',
  templateUrl: './champ-de-saisie-date-intervalle.component.html'
})
export class ChampDeSaisieDateIntervalleComponent implements OnInit {

  form: FormGroup;
  isToDateIsBiggerThanFromDate: boolean;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      fromDate: [{year: 2022, month: 1, day: 1}, null],
      toDate: [{year: 2022, month: 12, day: 31}, null],
    });
  }
}
