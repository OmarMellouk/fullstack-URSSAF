import { Injectable } from '@angular/core';
import { TableauFormattersComparatorsService } from '@app/fullstack-components/tableau/services/tableau-formatters-comparators.service';
import { ColDef, ColGroupDef} from 'ag-grid-community';

@Injectable({
  providedIn: 'root'
})
export class TableauTriFiltrePaginationService {

  constructor(private tableauFormattersComparatorsService: TableauFormattersComparatorsService) {}

  private NO_ROWS_TEXT = 'Aucun résultat';
  private columnDefs: (ColDef | ColGroupDef)[] = [
    {
      headerName: 'Compte comptable',
      field: 'compte',
      filter: 'agTextColumnFilter',
      sort: 'asc',
      floatingFilter: true,
      floatingFilterComponent: 'inputFilter',
      cellRenderer: 'textTooltipRenderer'
    },
    {
      headerName: 'Attributaire',
      field: 'attributaire',
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      floatingFilterComponent: 'listFloatingFilter',
      floatingFilterComponentParams: {
        possibleValues: ['006 - AGFPN', '007 - AOT', '009 - CADES'],
        suppressFilterButton: true
      },
      cellRenderer: 'textTooltipRenderer'
    },
    {
      headerName: 'Produit (€)',
      field: 'produit',
      cellStyle: {'text-align': 'right'},
      cellClass: params => params.value < 0 ?  'display-warning-in-table' : '',
      valueFormatter: data => this.tableauFormattersComparatorsService.customValueFormatter(data, 2),
      cellRenderer: 'textTooltipRenderer'
    },
    {
      headerName: 'Date encaissement',
      field: 'date',
      filter: 'agDateColumnFilter',
      floatingFilterComponent: 'agDateInput',
      floatingFilter: true,
      cellRenderer: 'dateRenderer',
      cellClass: params => params.value?.includes('1970') ?  'display-warning-in-table' : '',
      filterParams: {comparator: this.tableauFormattersComparatorsService.compareDates}
    }
  ];

  getOverlayNoRowsTemplate(): string {
    return '<span class="no-rows">' + this.NO_ROWS_TEXT + '</span>';
  }

  getColumnDefs(): (ColDef | ColGroupDef)[] {
    return this.columnDefs;
  }
}
