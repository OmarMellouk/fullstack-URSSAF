import { Component, OnInit } from '@angular/core';
import { DATA_TABLEAU_TRI_FILTRE_PAGINATION } from '@app/bouchons-html/tableau/tableau-tri-filtre-pagination';
import { TableauConfigurationBuilderService } from '@app/fullstack-components/tableau/services/tableau-configuration-builder.service';
import { ColDef, ColGroupDef, ColumnApi, GridApi, GridOptions, GridReadyEvent } from 'ag-grid-community';
import { TableauTriFiltrePaginationService } from '../../services/tableau-tri-filtre-pagination.service';

@Component({
  selector: 'app-tableau-tri-filtre-pagination',
  templateUrl: './tableau-tri-filtre-pagination.component.html'
})
export class TableauTriFiltrePaginationComponent implements OnInit {

  gridOptions: GridOptions;
  overlayNoRowsTemplate: string;
  hasTotalRow = true;

  columnDefs: (ColDef | ColGroupDef)[];
  rowData: any = DATA_TABLEAU_TRI_FILTRE_PAGINATION;

  gridApi: GridApi;
  gridColumnApi: ColumnApi;

  constructor(
    private tableauConfigurationBuilderService: TableauConfigurationBuilderService,
    private tableauTriFiltrePaginationService: TableauTriFiltrePaginationService
  ) { }

  ngOnInit(): void {
    // Configuration générale du tableau
    this.gridOptions = this.tableauConfigurationBuilderService.createGridConfiguration();
    // Colonnes du tableau
    this.columnDefs = this.tableauTriFiltrePaginationService.getColumnDefs();
    // Template tableau vide
    this.overlayNoRowsTemplate = this.tableauTriFiltrePaginationService.getOverlayNoRowsTemplate();
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

}
