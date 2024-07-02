import { Component } from '@angular/core';
import { OngletTypeEnum } from '@app/fullstack-components/onglets/components/onglet/onglet.component';
import { OngletDeuxiemeNiveau } from '@app/fullstack-components/onglets/models/onglets.models';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil-container.component.html'
})
export class AccueilContainerComponent {
  active = 0;
  ongletTypeEnum: typeof OngletTypeEnum = OngletTypeEnum;

  onglets: OngletDeuxiemeNiveau[] = [
    {label: 'Présentation & documentation'},
    {label: 'Liens utiles'},
    {label: 'Mémo technique'},
    {label: 'Contact'}
  ];
}
