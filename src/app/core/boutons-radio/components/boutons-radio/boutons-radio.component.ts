import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-boutons-radio',
  templateUrl: './boutons-radio.component.html'
})
export class BoutonsRadioComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      radio: [true, null],
      radioDisabled: [{value: true, disabled: true}, null],
    });
  }
}
