import { Component } from '@angular/core';
import { OngletTypeEnum } from '@app/fullstack-components/onglets/components/onglet/onglet.component';
import { OngletPremierNiveau } from '@app/fullstack-components/onglets/models/onglets.models';

@Component({
  selector: 'app-badges-onglet-premier-niveau',
  templateUrl: './badges-onglet-premier-niveau.component.html'
})
export class BadgesOngletPremierNiveauComponent {

  ongletTypeEnum: typeof OngletTypeEnum = OngletTypeEnum;

  active = 0;

  onglets: OngletPremierNiveau[] = [
    {label: 'Label onglet 1'},
    {label: 'Label onglet 2', badgeValue: 30, badge: 'badge-error', infobulle: '30 éléments Onglet 2'},
    {label: 'Label onglet 3', iconAfter: 'assets/icones-showcase/m_warning_b.svg', infobulle: 'Infobulle informative qui reste affichée'}
  ];
}
