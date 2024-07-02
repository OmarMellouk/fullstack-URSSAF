import { Component, OnInit } from '@angular/core';
import { Wizard } from '@app/fullstack-components/wizard/models/wizard.models';

@Component({
  selector: 'app-badges-wizard',
  templateUrl: './badges-wizard.component.html'
})
export class BadgesWizardComponent implements OnInit {

  wizard: Wizard[];
  active = 3;

  ngOnInit(): void {
    this.wizard = [
      {text: 'Identification de l\'individu', disableClick: true},
      {text: 'Individu', badge: 'badge-warning', badgeValue: 1},
      {text: 'Entreprise'},
      {text: 'Etablissement'},
      {text: 'Adresses et contacts'}
    ];
  }

  stepClicked(step: number): void {
    if (this.active > step) {
      this.active = step;
    }
  }
}
