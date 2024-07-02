import { Component } from '@angular/core';
import { OngletTypeEnum } from '@app/fullstack-components/onglets/components/onglet/onglet.component';
import { OngletPremierNiveau } from '@app/fullstack-components/onglets/models/onglets.models';

@Component({
  selector: 'app-onglets',
  templateUrl: './onglets.component.html'
})
export class OngletsComponent {

  ongletTypeEnum: typeof OngletTypeEnum = OngletTypeEnum;
  active = 1;

  onglets: OngletPremierNiveau[] = [
    { label: '2016' },
    { label: '2015' },
    { label: '2014' },
    { label: '2013' },
    { label: '2012' },
    { label: '2011' },
    { label: 'Autre exercice', iconBefore: 'assets/icones-showcase/g_search.svg' },
  ];
}
