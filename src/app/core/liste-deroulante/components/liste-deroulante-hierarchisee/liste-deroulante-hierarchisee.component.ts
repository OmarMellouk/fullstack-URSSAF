import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-liste-deroulante-hierarchisee-sample',
  templateUrl: './liste-deroulante-hierarchisee.component.html'
})
export class ListeDeroulanteHierarchiseeComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // Formulaire
    this.form = this.fb.group({
      'Groupe 1': this.fb.group({
        'Option 1': [false, null],
        'Option 2': [false, null],
        'Option 3 avec un texte bien plus long': [false, null]
      }),
      'Groupe 2': this.fb.group({
        'Option 1': [false, null],
        'Option 2': [false, null],
        'Option 3 avec un texte bien plus long': [false, null]
      }),
      'Groupe 3': this.fb.group({
        'Option 1': [false, null],
        'Option 2': [false, null],
        'Option 3 avec un texte bien plus long': [false, null]
      })
    });
  }
}
