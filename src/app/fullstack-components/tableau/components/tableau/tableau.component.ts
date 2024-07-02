import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NotesService, ToastCategoryEnum } from '@app/fullstack-components/notes/services/notes.service';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, ColGroupDef, ColumnApi, GridApi, GridOptions, GridReadyEvent, RowNode } from 'ag-grid-community';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { DefaultColConfiguration, InternalRowNode, StartEditingTable, TableAsynchronousError, UserColConfiguration } from '../../models/tableau.models';
import { ColumnsConfigurationService } from '../../services/columns-configuration.service';
import { TableauErrorsService } from '../../services/tableau-errors.service';
import { TableauModifiableService } from '../../services/tableau-modifiable.service';
import { TableauService } from '../../services/tableau.service';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html'
})
export class TableauComponent implements OnInit, OnDestroy {

  @ViewChild('agGrid') agGrid: AgGridAngular;

  /**
   * Object GridOptions d'ag grid contenant la configuration du tableau
   */
  @Input() gridOptions: GridOptions;
  /**
   * Object contenant les différentes colonnes ag grid à afficher
   */
  @Input() columnDefs: (ColDef | ColGroupDef)[];
  /**
   * Template affiché si aucune données en entrée ou après un filtrage
   */
  @Input() overlayNoRowsTemplate: string;
  /**
   * Les données correspondantes aux colonnes
   */
  @Input() rowData: any;
  /**
   * Affichage de la pagination
   * Champ optionnel, peut être laissé à vide pour ne pas afficher de pagination
   */
  @Input() pagination: boolean;
  /**
   * Affichage de la ligne total
   * Format :
   *  - labelId : id de la colonne sur laquelle sera afficher le mot "TOTAL"
   *  - valuesId : tableaux des id de colonne pour lesquels il faut afficher un total
   * Champ optionnel, peut être laissé à vide pour ne pas afficher la ligne total
   */
  @Input() total: {labelId: string, valuesId: string[]};
  /**
   * Pour un tableau éditable, ajoute les nouvelles lignes à la fin plutôt qu'au début
   * Champ optionnel, peut être laissé à vide pour ajouter les lignes au début
   */
  @Input() pushNewRows = false;
  /**
   * Pour un tableau éditable, permet d'envoyer de façon asynchrone des erreurs à afficher lors de l'édition
   * La valeur "key" doit correspondre à la valeur renseignée dans "cellEditorParams" des ColDefs
   */
  @Input() asynchronousErrors$: Observable<Map<number, TableAsynchronousError[]>>;
  /**
   * Permet d'afficher le bouton pour ajouter une ligne
   * Champ optionnel, ne sera pas afficher par défaut
   */
  @Input() enableAddButton = false;
  /**
   * Permet d'afficher le bouton pour éditer tout le tableau
   * Champ optionnel, ne sera pas afficher par défaut
   */
  @Input() enableFullEdit = false;
  /**
   * Permet de définir le nombre de lignes affichées par défaut en cas de pagination
   * Champ optionnel, 20 par défaut
   */
  @Input() defaultNbreLignes: string = '20';
  /**
   * Permet d'afficher un bouton afin de configurer l'affiche des colonnes
   * Champ optionnel, false par défaut
   */
  @Input() displayColumnsConfiguration: boolean = false;
  /**
   * Configuration des colonnes pour l'utilisateur connecté
   * Champ optionnel, pas de configuration spécifique par défaut
   */
  @Input() userColConfiguration: UserColConfiguration;
  /**
   * Retourne l'API d'ag-grid lorsqu'elle est prête
   */
  @Output() gridReady: EventEmitter<GridReadyEvent> =  new EventEmitter<GridReadyEvent>();
  /**
   * Notifie le parent qu'une demande de sauvegarde est envoyée pour la ligne en édition
   * Permet de vérifier les valeurs et mettre à jour asynchronousErrors$ si besoin
   */
  @Output() saveEdition: EventEmitter<any> = new EventEmitter<any>();
  /**
   * Notifie le parent que la configuration des colonnes du tableau a été changée
   * afin de la sauvegarder pour une persistance 
   */
  @Output() configurationUpdated: EventEmitter<UserColConfiguration> = new EventEmitter<UserColConfiguration>();

  toastCategoryEnum: typeof ToastCategoryEnum = ToastCategoryEnum;

  gridApi: GridApi;
  gridColumnApi: ColumnApi;
  subscriptions: Subscription[] = [];

  // Permet de savoir si une row avait été ajouté lorsque l'utilisateur cancel
  private newRowAdded = false;
  // Clef unique ag-grid
  private uniqueAgKey: string;
  // ID HTML unique
  uniqueUiID: string = 'id-' + new Date().getTime();

  // Sauvegarde des données avant l'édition
  dataBeforeEdition: any[] = [];

  // Gestion de l'édition
  isEditing: boolean;
  // Gestion du status du bouton "Supprimer en masse"
  enableDeleteButton = false;

  // Gestion de l'affichage des boutons
  displayDeleteSelectedButton = false;
  disableSaveForAsyncErrors = false;

  // Popup de confirmation lors de la suppression d'une ligne
  deleteModal: any;

  // Configuration par défaut des colonnes
  defaultColConfiguration: DefaultColConfiguration;

  onFormEditionStartedFn;

  constructor(
    private tableauService: TableauService,
    private tableauModifiableService: TableauModifiableService,
    private tableauErrorsService: TableauErrorsService,
    private notesService: NotesService,
    private columnsConfigurationService: ColumnsConfigurationService
  ) { }

  ngOnInit(): void {
    // Ajoute des écoutes d'évènements à la configuration
    this.setGridOptionOverload();

    // Gère l'affichage des boutons autour du tableau
    this.checkButtonsToDisplay();
  }

  /**
   * Lorsqu'ag-grid est prêt :
   * - Récupère les paramètres
   * - Affiche la ligne total si besoin
   * - Subscribe au prêt des erreurs asynchrone si l'observable est passé en input
   * - Charge la configuration utilisateur des colonnes
   */
  onGridReady(params: GridReadyEvent) {
    this.gridReady.emit(params);

    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.uniqueAgKey = this.gridApi['gridOptionsWrapper'].domDataKey;

    // Affiche la ligne TOTAL si besoin
    if (this.total) {
      this.displayTotalPinnedRow();
    }

    // Gestion des erreurs asynchrones
    this.handleAsynchronousErrors();

    // Dans le cas d'un tableau double entête, la hauteur est de 32
    if (this.columnDefs.some((e: ColGroupDef) => !!e.children)) {
      this.gridApi.setHeaderHeight(32);
    } else {
      // Sinon la hauteur de 40 pour une ligne
      this.gridApi.setHeaderHeight(40);
    }

    // Écoute l'observable pour savoir si une ligne demande à passer en édition
    this.subscriptions.push(this.tableauModifiableService.onStartEditing(this.uniqueAgKey)
      .subscribe((startEditingTable: StartEditingTable) => {
        this.startEditing(startEditingTable.rowId);
    }));

    // Sauvegarde la configuration par défaut et charge la configuration utilisateur des colonnes
    this.handleColConfiguration();
  }

  /**
   * Surcharge l'objet gridOption :
   * - Écoute les changements sur les filtres pour afficher l'overlay no rows si besoin
   * - Écoute les changements sur le modal si il y a une ligne total afin de la mettre à jour
   */
  setGridOptionOverload(): void {
    // Mise à jour après un filtrage
    this.gridOptions.onFilterModified = () => {
      // Après un filtre ne retournant pas de résultat, l'overlay noRows n'est pas trigger
      // On le trigger donc manuellement ici si besoin
      if (this.gridApi.getDisplayedRowCount() === 0) {
        this.gridApi.showNoRowsOverlay();
      } else {
        this.gridApi.hideOverlay();
      }

      // Redraw les lignes afin d'être sur que les actions handlers soient bien à jour
      this.gridApi.redrawRows();
    };

    // Met à jour la ligne total quand le model change (sort, filter, new row, row removed)
    if (this.total) {
      this.gridOptions.onModelUpdated = () => {
        if (this.gridApi) {
          this.displayTotalPinnedRow();
        }
      };
    }
  }

  /**********************/
  /**    AFFICHAGE     **/
  /**********************/

  /**
   * Gère l'affichage des boutons autour du tableau
   */
  checkButtonsToDisplay(): void {
    // Parcours les colonnes pour voir s'il faut afficher des boutons
    this.columnDefs.forEach((columnDef: ColDef) => {
      // Affiche le bouton permettant de supprimer en masse
      if (columnDef.headerCheckboxSelection && columnDef.field === 'selectAll') {
        this.displayDeleteSelectedButton = true;
      }
      // Configure la popup de suppression
      if (this.enableAddButton && columnDef.cellRendererParams?.deleteModal) {
        this.deleteModal = columnDef.cellRendererParams?.deleteModal;
      }
    });

    // Met à jour l'affichage du bouton "Supprimer en masse" en fonction des checkboxes
    if (this.displayDeleteSelectedButton) {
      this.gridOptions.onRowSelected = () => {
        this.enableDeleteButton = this.gridApi.getSelectedNodes().length > 0;
      };
    }
  }

  /**
   * Met à jour la ligne TOTAL après un filtrage
   */
  displayTotalPinnedRow() {
    if (this.gridApi.getDisplayedRowCount() === 0) {
      this.gridApi.setPinnedBottomRowData([]);
    } else {
      const pinnedBottomData =
        this.tableauService.generatePinnedBottomRow(this.gridApi, this.gridColumnApi, this.total.labelId, this.total.valuesId);
      this.gridApi.setPinnedBottomRowData([pinnedBottomData]);
    }
  }

  /**
   * Sauvegarde la configuration par défaut des colonnes si la configuration est possible
   * Charge la configuration utilisateur des colonnes si elle existe
   */
  handleColConfiguration() {
    if (this.displayColumnsConfiguration) {
      this.defaultColConfiguration = this.columnsConfigurationService.getColConfiguration(this.gridApi);
    }

    if (this.userColConfiguration) {
      this.columnsConfigurationService.loadUserColConfiguration(this.gridApi, this.gridColumnApi, this.userColConfiguration);
    }
  }

  /**********************/
  /**     EDITION      **/
  /**********************/

  /**
   * Commence l'édition d'une ligne
   */
  startEditing(rowId?: number) {
    // Sauvegarde les données avant édition
    this.gridApi.forEachNode((row: InternalRowNode) => {
      this.dataBeforeEdition.push({...row.data});
      // Ajoute une map à la ligne pour les erreurs de formulaire des cellules
      row.formErrors = new Map();
    });

    this.isEditing = true;

    // Active le mode édition des cellules
    this.tableauModifiableService.turnEditionOn(this.gridApi, this.gridColumnApi, rowId, this.newRowAdded);
  }

  /**
   * Gère l'affichage des erreurs si il y en a
   */
  saveOrCancelEdition(cancel = false): void {
    // Vérifie si il y a des erreurs
    const stopEdition = this.tableauErrorsService.checkErrors(cancel, this.gridOptions, !!this.asynchronousErrors$, this.saveEdition);
    if (stopEdition) {
      this.stopEditing(cancel);
    }
  }

  /**
   * Arrête l'édition d'une ligne
   */
  stopEditing(cancel: boolean): void {
    this.isEditing = false;
    this.disableSaveForAsyncErrors = false;

    // Supprime la ligne ajoutée en cas d'annulation
    this.tableauModifiableService.deleteRowIfNecessary(this.gridApi, cancel, this.newRowAdded, this.pushNewRows);

    this.gridApi.forEachNode((row: InternalRowNode, index: number) => {
      // Restitue les données en cas d'annulation
      if (cancel && !this.newRowAdded) {
        row.setData(this.dataBeforeEdition[index]);
      }

      // Met à 0 les erreurs et mise à jour
      row.asyncErrors = null;
      row.formErrors = null;
      row.updated = null;
    });

    // Met à jour la ligne total après édition
    if (this.total) {
      this.displayTotalPinnedRow();
    }
    // Désactive le mode édition des cellules
    this.tableauModifiableService.turnEditionOff(this.gridApi, this.gridColumnApi);

    this.newRowAdded = false;
    this.dataBeforeEdition = [];

    // Informe que les données ont été modifiée
    this.gridApi.dispatchEvent({type: 'tableDataUpdated'});
  }

  /**
   * Ajoute une ligne
   */
  addRow(): void {
    // isEditing va passer à true via l'appel de startEditing depuis l'observable dans la fonction tableauModifiableService.addRow
    this.newRowAdded = true;
    const cellId = this.tableauModifiableService.addRow(this.gridApi, this.gridOptions, this.pushNewRows);

    this.startEditing(cellId);
  }

  /**
   * Supprime toutes les lignes sélectionnées
   */
  deleteAllSelected(): void {
    const selectedNodes = this.gridApi.getSelectedNodes();
    const indexListToDelete: number[] = [];

    selectedNodes.forEach((node: RowNode) => {
      indexListToDelete.push(node.rowIndex);
    });

    this.tableauModifiableService.deleteRow(this.gridApi, indexListToDelete, this.deleteModal);
  }

  /****************************/
  /**   ERREURS ASYNCHRONES  **/
  /****************************/

  /**
   * Gestion des erreurs asynchrones
   */
  handleAsynchronousErrors(): void {
    // Gestion des erreurs asynchrones
    this.subscriptions.push(
      this.asynchronousErrors$?.pipe(filter((value) => value !== null)).subscribe((errors: Map<number, TableAsynchronousError[]>) => {
        if (errors.size > 0) {
          // Si il y a des erreurs retournées, alors on les affiche
          this.tableauErrorsService.displayAsynchronousErrors(this.gridOptions, errors);
          this.disableSaveForAsyncErrors = true;
        } else {
          // Sinon, on peut arrêter l'édition
          this.stopEditing(false);
        }
      })
    );

    this.onFormEditionStartedFn = this.onFormEditionStarted.bind(this);
    this.gridApi.addEventListener('formEditionStarted', this.onFormEditionStartedFn);
  }

  /**
   * Après une édition, vérifie le status du formulaire pour changer le status du bouton
   * Cela ne concerne uniquement les erreurs asynchrones
   */
  onFormEditionStarted(): void {
    if (this.disableSaveForAsyncErrors) {
      this.disableSaveForAsyncErrors = this.tableauErrorsService.checkIfHasAsyncErrors(this.gridOptions);
    }
  }

  /**
   * Ouvre une modale de configuration des colonnes
   */
  configureColumns(): void {
    this.columnsConfigurationService.configureColumns(this.gridApi, this.gridColumnApi, this.defaultColConfiguration, this.configurationUpdated);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => subscription?.unsubscribe());
    this.gridApi.removeEventListener('formEditionStarted', this.onFormEditionStartedFn);
    this.notesService.removeAllStatic();
  }
}
