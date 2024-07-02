import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-champ-de-saisie-multiligne-sample',
  templateUrl: './champ-de-saisie-multiligne.component.html'
})
export class ChampDeSaisieMultiligneComponent implements OnInit {

  form: FormGroup;
  lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat porta nisl et laoreet. ' +
    'Vivamus ornare lorem eu eleifend maximus. Proin quis dui mauris. Morbi suscipit risus tortor, sed tempus felis rhoncus sit amet.';
  maxLength = 120;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      texte: [this.lorem, null],
      texte2Inactif: [{value: this.lorem, disabled: true}, null],
      texte3Erreur: [this.lorem, Validators.minLength(500)],
      texte4Warning: [this.lorem, Validators.minLength(500)],
      texte5Compteur: [this.lorem.substring(0, 120), Validators.maxLength(this.maxLength)],
    });

    // Force l'affichage des erreurs
    this.form.markAllAsTouched();
  }

}
