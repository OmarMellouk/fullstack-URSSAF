import { Component } from '@angular/core';
import { OngletTypeEnum } from '@app/fullstack-components/onglets/components/onglet/onglet.component';
import { OngletPremierNiveauIcone } from '@app/fullstack-components/onglets/models/onglets.models';

@Component({
  selector: 'app-onglet-premier-niveau-icone',
  templateUrl: './onglet-premier-niveau-icone.component.html'
})
export class OngletPremierNiveauIconeComponent {

  ongletTypeEnum: typeof OngletTypeEnum = OngletTypeEnum;

  active = 0;

  onglets: OngletPremierNiveauIcone[] = [
    {label: 'Label onglet 1', subLabel: 'Sous-label 1', icon: 'assets/icones-projets/PORA/m_person.svg'},
    {label: 'Label onglet 2', subLabel: 'Sous-label 2', icon: 'assets/icones-projets/PORA/m_person.svg'},
    {label: 'Label onglet 3', subLabel: 'Sous-label 3', icon: 'assets/icones-projets/PORA/m_person.svg'}
  ];

}
