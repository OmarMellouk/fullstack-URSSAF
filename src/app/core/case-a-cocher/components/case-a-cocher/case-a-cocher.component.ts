import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-case-a-cocher',
  templateUrl: './case-a-cocher.component.html'
})
export class CaseACocherComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      checkbox1: [true, null],
      checkbox2: [false, null],
      checkbox3: [{value: true, disabled: true}, null],
      checkbox4: [{value: false, disabled: true}, null],
    });
  }

}
