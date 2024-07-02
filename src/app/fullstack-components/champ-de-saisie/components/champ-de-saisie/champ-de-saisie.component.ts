import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipsService } from '@app/fullstack-components/utils/tooltips/tooltips.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-champ-de-saisie',
  templateUrl: './champ-de-saisie.component.html'
})
export class ChampDeSaisieComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('inputElement') inputElement: ElementRef;

  /**
   * Control du formulaire réactif pour la valeur voulue
   */
  @Input() form: FormControl;
  /**
   * Label à afficher pour le control correspondant
   */
  @Input() label: string;
  /**
   * Index pour éviter des duplications d'id/for
   */
  @Input() index: number;
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
   * Placeholder du champs
   * Champ optionnel
   */
  @Input() placeholder = '';
  /**
   * Affiche un ou plusieurs messages d'erreur dans un tooltips au survol de l'icône d'erreur/warning
   */
  @Input() errorMessage: string | {message: string}[];
  /**
   * Propriété maxlength de l'input
   */
  @Input() maxlength: number;

  array = Array;

  enableTooltip = false;
  subscription: Subscription;

  constructor(private tooltipsService: TooltipsService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.subscription = this.form.valueChanges.subscribe(() => {
      // Affiche un tooltips si le texte est trop long
      this.enableTooltip = this.tooltipsService.shouldDisplayTooltips(this.inputElement);
    });
  }

  ngAfterViewInit(): void {
    // Affiche un tooltips si le texte est trop long
    this.enableTooltip = this.tooltipsService.shouldDisplayTooltips(this.inputElement);

    if (this.enableTooltip) {
      // Force la détection de changement pour éviter l'erreur : ExpressionChangedAfterItHasBeenCheckedError
      this.cd.detectChanges();
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
