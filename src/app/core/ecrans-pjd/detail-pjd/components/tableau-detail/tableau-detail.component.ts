import { Component, OnInit } from '@angular/core';
import { DATA_TABLEAU_PJD_DETAIL } from '@app/bouchons-html/ecrans/tableau-detail';
import { ColumnHeaderComponent } from '@app/fullstack-components/tableau/ag-grid-components/column-header/column-header.component';
import { DateFilterComponent } from '@app/fullstack-components/tableau/ag-grid-components/date-filter/date-filter.component';
import { DateRendererComponent } from '@app/fullstack-components/tableau/ag-grid-components/date-renderer/date-renderer.component';
import { InputFilterComponent } from '@app/fullstack-components/tableau/ag-grid-components/input-filter/input-filter.component';
import { ListFloatingFilterComponent } from '@app/fullstack-components/tableau/ag-grid-components/list-floating-filter/list-floating-filter.component';
import { TableauConfigurationBuilderService } from '@app/fullstack-components/tableau/services/tableau-configuration-builder.service';
import { GridOptions, ColDef, ColGroupDef, GridApi, ColumnApi, GridReadyEvent } from 'ag-grid-community';
import { TableauDetailService } from '../../services/tableau-detail.service';
import { FormatCtpCellRendererComponent } from '../format-ctp-cell-renderer/format-ctp-cell-renderer.component';

@Component({
  selector: 'app-tableau-detail',
  templateUrl: './tableau-detail.component.html'
})
export class TableauDetailComponent implements OnInit {

  gridOptions: GridOptions;
  rowData: any = DATA_TABLEAU_PJD_DETAIL;
  columnDefs: (ColDef | ColGroupDef)[];
  gridApi: GridApi;
  gridColumnApi: ColumnApi;

  frameworkComponents = {
    dateRenderer: DateRendererComponent,
    agColumnHeader: ColumnHeaderComponent,
    agDateInput: DateFilterComponent,
    listFloatingFilter: ListFloatingFilterComponent,
    inputFilter: InputFilterComponent,
    formatCtpCellRenderer: FormatCtpCellRendererComponent
  };

  constructor(
    private tableauConfigurationBuilderService: TableauConfigurationBuilderService,
    private tableauDetailService: TableauDetailService
  ) { }

  ngOnInit(): void {
    // Configuration générale du tableau
    this.gridOptions = this.tableauConfigurationBuilderService.createGridConfiguration(this.frameworkComponents);
    // Colonnes du tableau
    this.columnDefs = this.tableauDetailService.getColumnDefs();
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
}
