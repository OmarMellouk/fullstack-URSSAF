import { Component } from '@angular/core';
import { OngletTypeEnum } from '@app/fullstack-components/onglets/components/onglet/onglet.component';
import { NextActiveTab, OngletPremierNiveau } from '@app/fullstack-components/onglets/models/onglets.models';
import { OngletsService } from '@app/fullstack-components/onglets/services/onglets.service';

@Component({
  selector: 'app-onglet-premier-niveau-navigation',
  templateUrl: './onglet-premier-niveau-navigation.component.html',
  styleUrls: ['./onglet-premier-niveau-navigation.component.scss']
})
export class OngletPremierNiveauNavigationComponent {

  ongletTypeEnum: typeof OngletTypeEnum = OngletTypeEnum;

  active = 0;
  counter = 10;
  nextActive: NextActiveTab;
  tabAdded: boolean = false;

  onglets: OngletPremierNiveau[] = [
    {label: 'Label onglet 1'},
    {label: 'Label onglet 2', canClose: true},
    {label: 'Label onglet 3', canClose: true},
    {label: 'Label onglet 4', canClose: true},
    {label: 'Label onglet 5', canClose: true},
    {label: 'Label onglet 6', canClose: true},
    {label: 'Label onglet 7', canClose: true},
    {label: 'Label onglet 8', canClose: true},
    {label: 'Label onglet 9', canClose: true}
  ];

  constructor(private ongletsService: OngletsService) {}

  /**
   * Ajoute un nouvelle onglet
   */
  addTab(): void {
    const onglet: OngletPremierNiveau = {
      label: 'Label onglet ' + this.counter, canClose: true,
    };
    this.onglets.push(onglet);
    this.counter++;

    // Sélectionne le nouvel onglet
    this.active = this.onglets.length - 1;
    // Permet de scroller à l'élément ajouté
    this.tabAdded = true;
  }

  /**
   * Supprime l'onglet passé en paramètre
   */
  closeTab(index: number): void {
    this.onglets.splice(index, 1);
    this.nextActive = this.ongletsService.getNextActiveTab(this.active, index, this.nextActive, this.onglets.length);
  }
}
