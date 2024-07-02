import { Component, OnDestroy, OnInit } from '@angular/core';
import { DATA_TABLEAU_MODIFIABLE } from '@app/bouchons-html/tableau/tableau-modifiable';
import { TableAsynchronousError } from '@app/fullstack-components/tableau/models/tableau.models';
import { TableauConfigurationBuilderService } from '@app/fullstack-components/tableau/services/tableau-configuration-builder.service';
import { GridOptions, ColDef, ColGroupDef, GridApi, ColumnApi, GridReadyEvent } from 'ag-grid-community';
import { BehaviorSubject } from 'rxjs';
import { TableauModifiableService } from '../../services/tableau-modifiable.service';

@Component({
  selector: 'app-tableau-modifiable',
  templateUrl: './tableau-modifiable.component.html'
})
export class TableauModifiableComponent implements OnInit, OnDestroy {

  gridOptions: GridOptions;
  overlayNoRowsTemplate: string;

  rowData: any = DATA_TABLEAU_MODIFIABLE;
  columnDefs: (ColDef | ColGroupDef)[];

  gridApi: GridApi;
  gridColumnApi: ColumnApi;

  asynchronousErrors$: BehaviorSubject<Map<number, TableAsynchronousError[]>> = new BehaviorSubject(null);

  tableDataUpdatedFn;

  constructor(
    private tableauConfigurationBuilderService: TableauConfigurationBuilderService,
    private tableauModifiableService: TableauModifiableService
  ) { }

  ngOnInit(): void {
    // Configuration générale du tableau
    this.gridOptions = this.tableauConfigurationBuilderService.createGridConfiguration();
    // Colonnes du tableau
    this.columnDefs = this.tableauModifiableService.getColumnDefs();
    // Template tableau vide
    this.overlayNoRowsTemplate = this.tableauModifiableService.getOverlayNoRowsTemplate();
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    // Évènement custom envoyé par le composant enfant après une édition
    this.tableDataUpdatedFn = this.tableDataUpdated.bind(this);
    this.gridApi.addEventListener('tableDataUpdated', this.tableDataUpdatedFn);
  }

  tableDataUpdated(): void {
    // Traiter et sauvegarder les données

    // Exemple de récupération des données
    // this.gridApi.forEachNode((row: RowNode) => {
    //   console.log(row);
    // });
  }

  onSaveEdition(editedRow: any[]) {
    const errors: Map<number, TableAsynchronousError[]> = new Map();

    // Faire un call au backend de validation ici et retourner les erreurs dans l'observable asynchronousErrors
    editedRow.forEach((rowData: any, uniqueRowKey: number) => {
      // Code d'exemple d'erreur retournée
      if (rowData.serveur?.length < 3) {
        const error: TableAsynchronousError = {
          isError: true, message: 'L\'ID du serveur doit contenir au moins 3 caractères', id: 'serveur'
        };
        this.setError(uniqueRowKey, error, errors);
      }
      if (rowData.nom?.length < 3) {
        const error: TableAsynchronousError = {
          isError: true, message: 'Le nom du serveur doit contenir au moins 3 caractères', id: 'nom'
        };
        this.setError(uniqueRowKey, error, errors);
      }
    });

    this.asynchronousErrors$.next(errors);
  }

  /**
   * Ajoute les erreurs dans la map
   */
  setError(uniqueRowKey: number, error: TableAsynchronousError, errors: Map<number, TableAsynchronousError[]>): void {
    if (errors.has(uniqueRowKey)) {
      errors.get(uniqueRowKey).push(error);
    } else {
      errors.set(uniqueRowKey, [error]);
    }
  }

  ngOnDestroy(): void {
    this.gridApi.removeEventListener('tableDataUpdated', this.tableDataUpdatedFn);
  }
}
