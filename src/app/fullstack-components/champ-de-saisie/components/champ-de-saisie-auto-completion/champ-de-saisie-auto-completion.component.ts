import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipsService } from '@app/fullstack-components/utils/tooltips/tooltips.service';
import { PlacementArray } from '@ng-bootstrap/ng-bootstrap/util/positioning';
import { OperatorFunction, Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

export enum SearchTypeEnum {
  START_WITH = 'START_WITH ',
  INCLUDES = 'INCLUDES'
 }

@Component({
  selector: 'app-champ-de-saisie-auto-completion',
  templateUrl: './champ-de-saisie-auto-completion.component.html'
})
export class ChampDeSaisieAutoCompletionComponent implements OnInit, AfterViewInit, OnDestroy {

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
    * Placeholder du champs
    * Champ optionnel
    */
  @Input() placeholder = '';
   /**
    * Liste des résultats possible pour l'autocomplete
    */
  @Input() autoCompleteResults: string[];
   /**
    * Nombre de caractères à partir duquel la recherche dans autoCompleteResults commence
    * Champ optionnel, valeur par défaut : 2
    */
  @Input() kickLength = 2;
   /**
    * Nombre maximum de résultat dans la liste d'autocomplétion
    * Champ optionnel, valeur par défaut : 10
    */
  @Input() maxResults = 10;
   /**
    * Type de recherche dans la liste d'autocomplétion
    * Champ optionnel, valeur par défaut : includes
    */
  @Input() searchType: SearchTypeEnum = SearchTypeEnum.INCLUDES;
    /**
    * If true, model values will not be restricted only to items selected from the popup.
    * Default value: true
    */
  @Input() editable = true;
   /**
    * The preferred placement of the typeahead, among the possible values.
    */
  @Input() placement: PlacementArray = 'bottom-start';
   /**
    * Affiche un message d'erreur dans un tooltips au survol de l'icône d'erreur/warning
    */
  @Input() errorMessage: string;
   /**
    * Affiche une icône de recherche dans l'input
    */
  @Input() displaySearchIcon: boolean = false;

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
 
  /**
  * Recherche le mot tapper par l'utilisateur et retourne la liste de résultats dans un observable
  */
  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) => {
    return text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => {
        if (term.length < this.kickLength) {
          return [];
        } else if (this.searchType === SearchTypeEnum.START_WITH) {
          return this.autoCompleteResults.filter(v => v.toLowerCase().startsWith(term.toLowerCase())).slice(0, this.maxResults);
        } else {
          return this.autoCompleteResults.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, this.maxResults);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
