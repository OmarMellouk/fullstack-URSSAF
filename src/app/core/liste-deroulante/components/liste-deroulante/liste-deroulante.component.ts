import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-liste-deroulante-sample',
  templateUrl: './liste-deroulante.component.html'
})
export class ListeDeroulanteComponent implements OnInit {

  form: FormGroup;
  options: {value: string, text: string}[];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      listeDeroulante: ['', null],
      listeDeroulante2Inactif: [{value: '', disabled: true}, null],
      listeDeroulante3Erreur: ['', [Validators.required, Validators.minLength(50)]],
      listeDeroulante4Warning: ['', [Validators.required, Validators.minLength(50)]]
    });

    // Affiche directement les erreurs de formulaire
    this.form.markAllAsTouched();

    this.options = [
      {value: 'choix', text: 'Choix'},
      {value: 'alternative', text: 'Alternative'},
      {value: 'possibilité', text: 'Possibilité'},
      {value: 'option', text: 'Option avec un texte plus long que l\'input'}
    ];
  }

}
