import { Component } from '@angular/core';
import { OngletTypeEnum } from '@app/fullstack-components/onglets/components/onglet/onglet.component';
import { NextActiveTab, OngletPremierNiveauIcone } from '@app/fullstack-components/onglets/models/onglets.models';
import { OngletsService } from '@app/fullstack-components/onglets/services/onglets.service';

@Component({
  selector: 'app-onglet-premier-niveau-icone-navigation',
  templateUrl: './onglet-premier-niveau-icone-navigation.component.html',
  styleUrls: ['./onglet-premier-niveau-icone-navigation.component.scss']
})
export class OngletPremierNiveauIconeNavigationComponent {

  ongletTypeEnum: typeof OngletTypeEnum = OngletTypeEnum;

  active = 0;
  counter = 10;
  nextActive: NextActiveTab;
  tabAdded: boolean = false;

  onglets: OngletPremierNiveauIcone[] = [
    {label: 'Label onglet 1', subLabel: 'Sous-label', icon: 'assets/icones-projets/PORA/m_person.svg'},
    {label: 'Label onglet 2', subLabel: 'Sous-label', icon: 'assets/icones-projets/PORA/m_person.svg', canClose: true},
    {label: 'Label onglet 3', subLabel: 'Sous-label', icon: 'assets/icones-projets/PORA/m_person.svg', canClose: true},
    {label: 'Label onglet 4', subLabel: 'Sous-label', icon: 'assets/icones-projets/PORA/m_person.svg', canClose: true},
    {label: 'Label onglet 5', subLabel: 'Sous-label', icon: 'assets/icones-projets/PORA/m_person.svg', canClose: true},
    {label: 'Label onglet 6', subLabel: 'Sous-label', icon: 'assets/icones-projets/PORA/m_person.svg', canClose: true},
    {label: 'Label onglet 7', subLabel: 'Sous-label', icon: 'assets/icones-projets/PORA/m_person.svg', canClose: true},
    {label: 'Label onglet 8', subLabel: 'Sous-label', icon: 'assets/icones-projets/PORA/m_person.svg', canClose: true},
    {label: 'Label onglet 9', subLabel: 'Sous-label', icon: 'assets/icones-projets/PORA/m_person.svg', canClose: true}
  ];

  constructor(private ongletsService: OngletsService) {}

  /**
   * Ajoute un nouvelle onglet
   */
  addTab(): void {
    const onglet: OngletPremierNiveauIcone = {
      label: 'Label onglet ' + this.counter, subLabel: 'Sous-label', icon: 'assets/icones-projets/PORA/m_person.svg', canClose: true,
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
