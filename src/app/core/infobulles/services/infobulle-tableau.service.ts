import { Injectable } from '@angular/core';
import { TableauFormattersComparatorsService } from '@app/fullstack-components/tableau/services/tableau-formatters-comparators.service';
import { ColDef, ColGroupDef } from 'ag-grid-community';

@Injectable({
  providedIn: 'root'
})
export class InfobulleTableauService {

  constructor(private tableauFormattersComparatorsService: TableauFormattersComparatorsService) {}

  private columnDefs: (ColDef | ColGroupDef)[] = [
    {
      headerName: 'Année de référence',
      field: 'reference',
      sortable: false,
      filter: false,
      cellRenderer: 'textTooltipRenderer',
      maxWidth: 145
    },
    {
      headerName: '2020',
      field: 'data2020',
      filter: false,
      sortable: false,
      cellStyle: {'justify-content': 'flex-end'},
      valueFormatter: data => this.tableauFormattersComparatorsService.customValueFormatter(data, 2),
    },
    {
      headerName: '2019',
      field: 'data2019',
      filter: false,
      sortable: false,
      cellStyle: {'justify-content': 'flex-end'},
      valueFormatter: data => this.tableauFormattersComparatorsService.customValueFormatter(data, 2),
    },
    {
      headerName: '2018',
      field: 'data2018',
      filter: false,
      sortable: false,
      cellStyle: {'justify-content': 'flex-end'},
      valueFormatter: data => this.tableauFormattersComparatorsService.customValueFormatter(data, 2),
    }
  ];

  getColumnDefs(): (ColDef | ColGroupDef)[] {
    return this.columnDefs;
  }
}
