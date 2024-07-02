import { Component } from '@angular/core';
import { OngletTypeEnum } from '@app/fullstack-components/onglets/components/onglet/onglet.component';
import { OngletDeuxiemeNiveau } from '@app/fullstack-components/onglets/models/onglets.models';

@Component({
  selector: 'app-onglet-deuxieme-niveau',
  templateUrl: './onglet-deuxieme-niveau.component.html'
})
export class OngletDeuxiemeNiveauComponent {

  active = 0;
  ongletTypeEnum: typeof OngletTypeEnum = OngletTypeEnum;

  onglets: OngletDeuxiemeNiveau[] = [
    {label: 'Label onglet 1'},
    {label: 'Label onglet 2', iconAfter: 'assets/icones-showcase/m_warning_b.svg', infobulle: 'Infobulle informative qui reste affichée'},
    {label: 'Label onglet 3', badgeValue: 3, badge: 'badge-info', infobulle: '3 éléments Onglet 3'}
  ];
}
