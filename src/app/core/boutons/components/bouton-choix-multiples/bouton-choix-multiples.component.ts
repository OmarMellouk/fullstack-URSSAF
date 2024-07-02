import { Component } from '@angular/core';
import { BoutonChoixMultiples } from '@app/fullstack-components/boutons/models/bouton-choix-multiples.models';

@Component({
  selector: 'app-bouton-choix-multiples-sample',
  templateUrl: './bouton-choix-multiples.component.html'
})
export class BoutonChoixMultiplesComponent {

  dropdownButtons: BoutonChoixMultiples[] = [
    {label: 'Groupe pro'},
    {label: 'Statut'},
    {label: 'Qualité du statut', disable: true},
  ];

  dropdownButtons2: BoutonChoixMultiples[] = [
    {label: 'Modifier groupe professionnel'},
    {label: 'Basculer dans le dispositif autoentrepreneur'},
    {label: 'Modifier qualité dirigeant'},
    {label: 'Modifier date de début de statut'},
    {label: 'Affilier conjoint collaborateur'},
  ];
}
