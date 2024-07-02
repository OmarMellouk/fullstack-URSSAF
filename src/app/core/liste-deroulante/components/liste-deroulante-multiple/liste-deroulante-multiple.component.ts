import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-liste-deroulante-multiple-sample',
  templateUrl: './liste-deroulante-multiple.component.html'
})
export class ListeDeroulanteMultipleComponent implements OnInit {

  formArray: FormArray;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // Formulaire
    this.formArray = this.fb.array([
      this.fb.group({
        'Option 1': [false, null],
        'Option 2': [false, null],
        'Option 3': [{value: false, disabled: true}, null],
        'Option 4 avec un texte bien plus long': [false, null]
      }),
      this.fb.group({
        'Option 1': [false, null],
        'Option 2': [false, null],
        'Option 3': [{value: false, disabled: true}, null],
        'Option 4 avec un texte bien plus long': [false, null]
      })
    ]);
  }
}
