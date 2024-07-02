import { Component, OnInit } from '@angular/core';
import { DATA_TABLEAU_IMBRIQUE } from '@app/bouchons-html/tableau/tableau-imbrique';
import { TableauConfigurationBuilderService } from '@app/fullstack-components/tableau/services/tableau-configuration-builder.service';
import { GridOptions, ColDef, ColGroupDef, GridApi, ColumnApi, GridReadyEvent } from 'ag-grid-community';
import { TableauImbriqueService } from '../../services/tableau-imbrique.service';

@Component({
  selector: 'app-tableau-imbrique',
  templateUrl: './tableau-imbrique.component.html'
})
export class TableauImbriqueComponent implements OnInit {

  gridOptions: GridOptions;
  overlayNoRowsTemplate: string;
  detailCellRendererParams: any;

  columnDefs: (ColDef | ColGroupDef)[];
  rowData: any = DATA_TABLEAU_IMBRIQUE;

  gridApi: GridApi;
  gridColumnApi: ColumnApi;

  constructor(
    private tableauConfigurationBuilderService: TableauConfigurationBuilderService,
    private tableauImbriqueService: TableauImbriqueService
  ) { }

  ngOnInit(): void {
    // Configuration générale du tableau
    this.gridOptions = {
      ...this.tableauConfigurationBuilderService.createGridConfiguration(),
      detailCellRendererParams: this.tableauImbriqueService.getDetailCellRendererParams()
    };

    // Colonnes du tableau
    this.columnDefs = this.tableauImbriqueService.getColumnDefs();
    // Template tableau vide
    this.overlayNoRowsTemplate = this.tableauImbriqueService.getOverlayNoRowsTemplate();
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

}
