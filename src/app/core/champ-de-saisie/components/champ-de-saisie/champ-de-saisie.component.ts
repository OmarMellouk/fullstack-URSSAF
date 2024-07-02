import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-champ-de-saisie-sample',
  templateUrl: './champ-de-saisie.component.html'
})
export class ChampDeSaisieComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      texte: ['Texte saisi', null],
      texte2Inactif: [{value: 'Texte saisi inactif', disabled: true}, null],
      texte3Erreur: ['Texte saisi en erreur', Validators.minLength(50)],
      texte4Warning: ['Texte saisi en avertissement', Validators.minLength(50)]
    });

    // Force l'affichage des erreurs
    this.form.markAllAsTouched();
  }

}
