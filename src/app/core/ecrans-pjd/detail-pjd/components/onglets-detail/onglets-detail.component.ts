import { Component } from '@angular/core';
import { OngletTypeEnum } from '@app/fullstack-components/onglets/components/onglet/onglet.component';
import { OngletPremierNiveau } from '@app/fullstack-components/onglets/models/onglets.models';

@Component({
  selector: 'app-onglets-detail',
  templateUrl: './onglets-detail.component.html'
})
export class OngletsDetailComponent {

  ongletTypeEnum: typeof OngletTypeEnum = OngletTypeEnum;
  active = 0;

  onglets: OngletPremierNiveau[] = [
    { label: 'Pièce justificative en cours' },
    { label: 'Historique des modifications' },
    { label: 'Récapitulatif de la PJD' },
  ];
}
