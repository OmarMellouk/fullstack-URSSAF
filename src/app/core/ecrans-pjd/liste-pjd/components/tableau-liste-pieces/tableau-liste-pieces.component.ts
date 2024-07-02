import { Component, OnInit } from '@angular/core';
import { DATA_TABLEAU_LISTE_PJD } from '@app/bouchons-html/ecrans/tableau-liste-pjd';
import { ColumnHeaderComponent } from '@app/fullstack-components/tableau/ag-grid-components/column-header/column-header.component';
import { DateRendererComponent } from '@app/fullstack-components/tableau/ag-grid-components/date-renderer/date-renderer.component';
import { TableauConfigurationBuilderService } from '@app/fullstack-components/tableau/services/tableau-configuration-builder.service';
import { GridOptions, ColDef, ColGroupDef, GridApi, ColumnApi, GridReadyEvent } from 'ag-grid-community';
import { TableauService } from '../../services/tableau.service';
import { ActionRendererComponent } from '../action-renderer/action-renderer.component';

@Component({
  selector: 'app-tableau-liste-pieces',
  templateUrl: './tableau-liste-pieces.component.html'
})
export class TableauListePiecesComponent implements OnInit {
  gridOptions: GridOptions;
  rowData: any = DATA_TABLEAU_LISTE_PJD;
  columnDefs: (ColDef | ColGroupDef)[];
  gridApi: GridApi;
  gridColumnApi: ColumnApi;

  frameworkComponents = {
    agColumnHeader: ColumnHeaderComponent,
    dateRenderer: DateRendererComponent,
    // Utilise un action renderer spécifique pour ce tableau
    actionRenderer: ActionRendererComponent,
  };

  constructor(
    private tableauConfigurationBuilderService: TableauConfigurationBuilderService,
    private tableauService: TableauService
  ) { }

  ngOnInit(): void {
    // Configuration générale du tableau
    this.gridOptions = this.tableauConfigurationBuilderService.createGridConfiguration(this.frameworkComponents);
    // Colonnes du tableau
    this.columnDefs = this.tableauService.getColumnDefs(true);
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

}
