import { FormBuilder, FormGroup } from '@angular/forms';
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ExtendedICellRendererParams, FormattedValue } from '../../models/tableau.models';
import { EditorService } from '../../services/editor.service';
import { TableauService } from '../../services/tableau.service';
import { TooltipsService } from '@app/fullstack-components/utils/tooltips/tooltips.service';

@Component({
  selector: 'app-input-editor',
  templateUrl: './input-editor.component.html',
  styleUrls: ['./input-editor.component.scss']
})
export class InputEditorComponent implements ICellRendererAngularComp, OnDestroy, AfterViewInit {
  /**
   * Composant custom pour l'edition d'une input dans ag grid
   *
   * Pour bien comprendre le code qui suit, il faut savoir que :
   * - La cellule peut être détruite puis recrée après chaque filtrage, tri ou changement de page (si elle disparaît du tableau)
   * - Après une édition, la valeur est instantanément sauvegardée dans le tableau. Cette sauvegarde permet de :
   *   - Garder en mémoire la valeur après un filtre, tri ou changement de page
   *   - Prendre en compte la nouvelle valeur lors d'un filtrage ou d'un tri
   * - La sauvegarde d'une cellule va également la détruire puis la recréer
   *   - Cela engendre une perte du focus (repositionné avec setCursorPosition)
   * - Des informations sont stockées dans la ligne du tableau plutôt que dans la cellule pour ne pas perdre les informations
   *   - Affichage des erreurs du formulaire (formErrors: Map<string, boolean>)
   *   - Affichage des erreurs asynchrones (asyncErrors: Map<string, TableAsynchronousError>)
   *   - Boolean de modification de la ligne
   */

  @ViewChild('input') input: ElementRef;

  // Positionne le cursor d'édition au bon endroit après une sauvegarde automatique
  @ViewChild('input') set cursorPosition(element: ElementRef) {
    this.setCursorPosition(element);
  }

  @ViewChild('textElement') textElement: ElementRef;

  // Formulaire
  form: FormGroup;
  // paramètres ag grid
  params: ExtendedICellRendererParams;
  subscriptions: Subscription[] = [];
  // Statut de l'édition
  isEditing: boolean;
  // Clef unique du tableau ag grid
  uniqueGridKey: string;
  // Id de la cellule
  cellId: string;

  enableTooltip = false;
  checkTooltipDisplayFn;
  handleFocusFn;
  displayErrorsFn;

  constructor(
    private fb: FormBuilder,
    private editorService: EditorService,
    private tableauService: TableauService,
    private tooltipsService: TooltipsService
  ) { }

  agInit(params: ExtendedICellRendererParams): void {
    const isTotalRow = !!params.node.rowPinned;
    this.params = params;
    this.uniqueGridKey = params.api['gridOptionsWrapper'].domDataKey;
    this.cellId = params.column['colId'];

    // Vérifie si la cellule est en edition
    this.isEditing = this.editorService.getIsEditing(this.params);

    // Pas éditable si ligne total ou pas de clef de formulaire
    if (!isTotalRow && this.params.formKey && this.isEditing && !params.data.lockEdition) {
      // Envoie le focus dans l'input lorsque la cellule est focus
      this.handleFocusFn = this.handleFocus.bind(this);
      params.eGridCell.addEventListener('focus', this.handleFocusFn);

      this.initForm();
    } else {
      this.isEditing = false;
    }

    // Écoute le resize de la grille ou d'une colonne
    this.checkTooltipDisplayFn = this.tableauService.debounce(this.checkTooltipDisplay.bind(this), 300);
    this.params.api.addEventListener('gridOrColumnResized', this.checkTooltipDisplayFn);
  }

  /**
   * Création du formulaire à l'initialisation du composant
   */
  initForm(): void {
    const validators = this.params.validators || [];
    // Formate la valeur avant de l'afficher si inputInput existe
    const value = this.params.inputInput ? this.params.inputInput(this.params.value, null).value : this.params.value;

    this.form = this.fb.group({
      [this.params.formKey]: [value, validators],
    });

    // Affiche les erreurs
    this.editorService.displayErrorsAfterFormInit(this.form, this.cellId, this.params);

    // Dans le cas d'une nouvelle ligne
    if (this.params.newRowAdded) {
      // Écoute l'évènement forceErrorDisplay afin d'afficher les erreurs
      // Notamment utile si l'utilisateur essaie d'ajouter une ligne vide
      this.displayErrorsFn = this.displayErrors.bind(this);
      this.params.api.addEventListener('forceErrorDisplay', this.displayErrorsFn);
    }

    // Sauvegarde après un changement de valeur
    this.subscriptions.push(this.form.get(this.params.formKey).valueChanges.pipe(debounceTime(300)).subscribe(() => {
      this.saveValueChange();
      // Informe le composant tableau qu'une édition a commencé pour la validation des données asynchrones
      this.params.api.dispatchEvent({type: 'formEditionStarted'});
    }));
  }

  /**
   * Sauvegarde après un changement de valeur même si l'utilisateur n'a pas encore cliqué sur sauvegarder
   * En cas d'annulation, les valeurs originales seront restitués
   *
   * Cette sauvegarde immédiate permet de prendre en compte la nouvelle valeur lors d'un tri ou filtre
   * Et de ne pas la perdre lors d'un changement de page
   */
  saveValueChange(): void {
    this.editorService.saveValueChange(this.form, this.cellId, this.params, this.input);

    // Applique le formatage à la sauvegarde si il existe
    if (this.params.inputSave) {
      const value = this.params.inputSave(this.form.getRawValue()[this.params.formKey]);
      this.params.setValue(value);
    } else {
      // Met à jour la valeur
      this.params.setValue(this.form.getRawValue()[this.params.formKey]);
    }
  }

  /**********************/
  /** AFFICHAGE ERREURS */
  /**********************/

  /**
   * Affiche les erreurs du formulaire si il y en a
   */
  displayErrors(): void {
    this.form.markAsDirty();
  }

  /**
   * Affiche les erreurs asynchrones dans le formulaire si elles existes
   * Affiche un tooltip si nécessaire
   */
  ngAfterViewInit(): void {
    this.editorService.displayAsyncErrors(this.form, this.params);

    if (!this.isEditing) {
      // Utilisation d'un timeout pour obtenir les valeurs réels
      setTimeout(() => {
        this.checkTooltipDisplay();
      });
    }
  }

  /**********************/
  /**   GESTION FOCUS  **/
  /**********************/

  /**
   * Envoie le focus dans l'input lorsque la cellule est focus
   */
  handleFocus(): void {
    this.input?.nativeElement.focus();
  }

  /**
   * Positionne le cursor d'édition au bon endroit après une sauvegarde automatique
   */
  setCursorPosition(element: ElementRef) {
    this.editorService.setCursorPosition(element, this.params);
  }

  /**********************/
  /**    FORMATAGE     **/
  /**********************/

  /**
   * Autorise uniquement un certain format passé en paramètre
   */
  inputKeypress(event: KeyboardEvent): boolean {
    return this.params.inputKeypress(event);
  }

  /**
   * Formate la valeur à la saisie
   */
  inputInput(event, input: HTMLInputElement): void {
    const formattedValue: FormattedValue = this.params.inputInput(event.target.value, input);
    if (formattedValue.value) {
      event.target.value = formattedValue.value;
    }
    // Repositionne le curseur au bon endroit
    input.selectionStart = input.selectionEnd = formattedValue.cursorPos;
  }

  /**********************/
  /**     AG GRID      **/
  /**********************/

  refresh(): boolean {
    return false;
  }

  /**********************/
  /**     TOOLTIP      **/
  /**********************/
  
  /**
   *  Affiche un tooltip si la valeur est trop longue pour la casse
   */
  checkTooltipDisplay(): void {
    if (this.textElement) {
      this.enableTooltip = this.tooltipsService.shouldDisplayTooltips(this.textElement);
    }
  }

  /**********************/
  /**     DESTROY      **/
  /**********************/

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    this.params.eGridCell.removeEventListener('focus', this.handleFocusFn);
    this.params.api.removeEventListener('formEditionStarted', this.displayErrorsFn);
    this.params.api.removeEventListener('gridOrColumnResized', this.checkTooltipDisplayFn);
  }
}
