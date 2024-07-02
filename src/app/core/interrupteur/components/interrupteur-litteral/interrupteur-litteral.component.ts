import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-interrupteur-litteral-sample',
  templateUrl: './interrupteur-litteral.component.html'
})
export class InterrupteurLitteralComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      switch: ['', null],
    });
  }
}
