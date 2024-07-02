import { Component, OnInit } from '@angular/core';
import { FLUX_BANCAIRES } from '@app/bouchons-html/tableau/flux-bancaires';
import { ExtendedColDef } from '@app/fullstack-components/tableau/models/tableau.models';
import { TableauConfigurationBuilderService } from '@app/fullstack-components/tableau/services/tableau-configuration-builder.service';
import { GridOptions, ColDef, ColGroupDef, GridApi, ColumnApi, GridReadyEvent } from 'ag-grid-community';
import { TableauDepliableMultiEnteteService } from '../../services/tableau-depliable-multi-entete.service';

@Component({
  selector: 'app-tableau-depliable-multi-entete',
  templateUrl: './tableau-depliable-multi-entete.component.html'
})
export class TableauDepliableMultiEnteteComponent implements OnInit {

  gridOptions: GridOptions;
  overlayNoRowsTemplate: string;
  hasTotalRow = true;

  columnDefs: (ColDef | ColGroupDef)[];
  rowData: any = FLUX_BANCAIRES;

  gridApi: GridApi;
  gridColumnApi: ColumnApi;

  constructor(
    private tableauConfigurationBuilderService: TableauConfigurationBuilderService,
    private tableauDepliableMultiEnteteService: TableauDepliableMultiEnteteService
  ) { }

  ngOnInit(): void {
    // Configuration générale du tableau
    this.gridOptions = {
      ...this.tableauConfigurationBuilderService.createGridConfiguration(),
      autoGroupColumnDef: {
        headerName: '',
        sortable: false,
        resizable: false,
        width: 60,
        minWidth: 60,
        // Paramètre custom permettant de gérer l'affichage de l'icône dans l'header
        enableGrouping: true
      } as ExtendedColDef
    };

    // Colonnes du tableau
    this.columnDefs = this.tableauDepliableMultiEnteteService.getColumnDefs();
    // Template tableau vide
    this.overlayNoRowsTemplate = this.tableauDepliableMultiEnteteService.getOverlayNoRowsTemplate();
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

}
