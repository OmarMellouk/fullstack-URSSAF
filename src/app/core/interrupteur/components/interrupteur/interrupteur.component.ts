import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-interrupteur',
  templateUrl: './interrupteur.component.html',
})
export class InterrupteurComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      switch1: [false, null],
      switch2: [true, null],
      switch3: [{value: false, disabled: true}, null],
      switch4: [{value: true, disabled: true}, null],
    });
  }
}
