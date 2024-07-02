import { Component } from '@angular/core';

@Component({
  selector: 'app-icones-projet-raf',
  templateUrl: './icones-projet-raf.component.html',
  styleUrls: ['./icones-projet-raf.component.scss']
})
export class IconesProjetRafComponent {

  projectRafIcons = [
    {url: 'assets/icones-projets/RAF/evolution-courbe.svg'},
    {url: 'assets/icones-projets/RAF/DetailEvolutionCourbe.svg'},
    {url: 'assets/icones-projets/RAF/traitPlein.svg', addBlackBg: true},
    {url: 'assets/icones-projets/RAF/traitPleinPuisPointille.svg', addBlackBg: true},
    {url: 'assets/icones-projets/RAF/traitPointille.svg', addBlackBg: true},
    {url: 'assets/icones-projets/RAF/traitPointillePuisPlein.svg', addBlackBg: true},
    {url: 'assets/icones-projets/RAF/traitVide.svg', addBlackBg: true}
  ];
}
