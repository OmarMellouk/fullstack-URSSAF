import { Component } from '@angular/core';
import { OngletTypeEnum } from '@app/fullstack-components/onglets/components/onglet/onglet.component';
import { OngletDeuxiemeNiveau } from '@app/fullstack-components/onglets/models/onglets.models';

@Component({
  selector: 'app-badges-onglet-deuxieme-niveau',
  templateUrl: './badges-onglet-deuxieme-niveau.component.html'
})
export class BadgesOngletDeuxiemeNiveauComponent {
  active = 0;
  ongletTypeEnum: typeof OngletTypeEnum = OngletTypeEnum;

  onglets: OngletDeuxiemeNiveau[] = [
    {label: 'Label onglet 1'},
    {label: 'Label onglet 2', badgeValue: 300, badge: 'badge-info', infobulle: '300 éléments Onglet 2'},
    {label: 'Label onglet 3'}
  ];
}
