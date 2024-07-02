import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-liste-deroulante',
  templateUrl: './liste-deroulante.component.html'
})
export class ListeDeroulanteComponent {

  /**
   * Label à afficher pour le control correspondant
   */
  @Input() label: string;
  /**
   * Index pour éviter des duplications d'id/for
   */
  @Input() index: number;
  /**
   * Control du formulaire réactif pour la valeur voulue
   */
  @Input() form: FormControl;
  /**
   * Liste des possibilités à afficher dans la liste
   */
  @Input() options: {value: string, text: string}[];
  /**
   * Affiche un valeur blanche dans la liste des propositions
   * Champ optionnel, peut être laissé à vide pour ne pas afficher de valeur blanche
   */
  @Input() hasBlankOption: boolean;
  /**
   * En cas d'erreur sur le formulaire réactif, affiche une erreur plutôt qu'un warning
   * Champ optionnel, peut être laissé à vide pour afficher un warning
   */
  @Input() isError: boolean;
  /**
   * Taille de la colonne pour le label
   * Champ optionnel, valeur par défaut : 4
   */
  @Input() labelColumns = 4;
  /**
   * Taille de la colonne pour l'input
   * Champ optionnel, valeur par défaut : 6
   */
  @Input() inputColumns = 6;
  /**
   * Largeur de la colonne du label en pixel
   * Permet de définir une taille fixe en fonction du contenu
   * Champ optionnel, écrasera la valeur labelColumns
   */
  @Input() labelWidth: number;
  /**
   * L'input prendra toute la place
   * Ne prend plus en compte la largeur des colonnes
   * Utilise la valeur labelWidth
   * Champ optionnel, faux par défaut
   */
  @Input() fillInput: boolean = false;
  /**
   * Affiche un ou plusieurs messages d'erreur dans un tooltips au survol de l'icône d'erreur/warning
   */
  @Input() errorMessage: string | {message: string}[]
  
  array = Array;
}
