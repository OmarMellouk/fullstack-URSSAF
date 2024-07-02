import { Component, OnInit } from '@angular/core';
import { DATA_TABLEAU_SIMPLE } from '@app/bouchons-html/tableau/tableau-simple';
import { UserColConfiguration } from '@app/fullstack-components/tableau/models/tableau.models';
import { TableauConfigurationBuilderService } from '@app/fullstack-components/tableau/services/tableau-configuration-builder.service';
import { ColDef, ColGroupDef, ColumnApi, GridApi, GridOptions, GridReadyEvent } from 'ag-grid-community';
import { TableauSimpleService } from '../../services/tableau-simple.service';

@Component({
  selector: 'app-tableau-simple',
  templateUrl: './tableau-simple.component.html'
})
export class TableauSimpleComponent implements OnInit {

  gridOptions: GridOptions;
  overlayNoRowsTemplate: string;

  rowData: any = DATA_TABLEAU_SIMPLE;
  columnDefs: (ColDef | ColGroupDef)[];

  gridApi: GridApi;
  gridColumnApi: ColumnApi;

  localUserColConfiguration: UserColConfiguration;
  localStorageKey = 'tableauSimpleUserConfig';

  constructor(
    private tableauConfigurationBuilderService: TableauConfigurationBuilderService,
    private tableauSimpleService: TableauSimpleService
  ) { }

  ngOnInit(): void {
    // Override la configuration par défaut pour ce tableau
    const defaultColDef = {...this.tableauConfigurationBuilderService.createGridConfiguration().defaultColDef, resizable: true};
    // Configuration générale du tableau
    this.gridOptions = {
      ...this.tableauConfigurationBuilderService.createGridConfiguration(),
      defaultColDef: defaultColDef,
      onGridReady: this.setHeaderHeight
    };
    // Colonnes du tableau
    this.columnDefs = this.tableauSimpleService.getColumnDefs();
    // Template tableau vide
    this.overlayNoRowsTemplate = this.tableauSimpleService.getOverlayNoRowsTemplate();

    // Charge la configuration utilisateur depuis le localStorage
    this.localUserColConfiguration = JSON.parse(localStorage.getItem(this.localStorageKey));
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  /**
   * Récupère la nouvelle configuration des colonnes du tableau
   * @param userColConfiguration 
   */
  onConfigurationUpdated(userColConfiguration: UserColConfiguration) {
    // Sauvegarde par exemple cette configuration dans le localStorage
    localStorage.setItem(this.localStorageKey, JSON.stringify(userColConfiguration));
  }

  /**
   * Modifie la taille du header
   */
  setHeaderHeight(event: GridReadyEvent): void {
    // Hauteur de l'entête du tableau
    // Une ligne = 40 (par défaut)
    // Deux lignes = 52
    // Trois lignes = 64
    event.api.setHeaderHeight(64);
  }

}
