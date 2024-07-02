import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { COMMUNES } from '@app/bouchons-html/champ-de-saisie/communes';

@Component({
  selector: 'app-champ-de-saisie-auto-completion-sample',
  templateUrl: './champ-de-saisie-auto-completion.component.html'
})
export class ChampDeSaisieAutoCompletionComponent implements OnInit {

  form: FormGroup;
  communes = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      commune: ['', null],
    });

    // Mise en forme des communes
    COMMUNES.forEach(element => {
      this.communes.push(element.code + ' - ' + element.commune);
    });
  }
}
