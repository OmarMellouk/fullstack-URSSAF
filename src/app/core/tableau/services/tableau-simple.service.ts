import { Injectable } from '@angular/core';
import { TableauFormattersComparatorsService } from '@app/fullstack-components/tableau/services/tableau-formatters-comparators.service';
import { ColDef, ColGroupDef } from 'ag-grid-community';

@Injectable({
  providedIn: 'root'
})
export class TableauSimpleService {

  constructor(private tableauFormattersComparatorsService: TableauFormattersComparatorsService) {}

  private NO_ROWS_TEXT = 'Aucun résultat';
  private columnDefs: (ColDef | ColGroupDef)[] = [
    {
      headerName: 'Année de référence \n\n(Exemple d\'un header prenant trois lignes)',
      field: 'reference',
      sortable: false,
      filter: false,
      headerClass: 'white-space-pre-wrap',
      cellRenderer: 'textTooltipRenderer',
    },
    {
      headerName: '2020',
      field: 'data2020',
      sortable: false,
      filter: false,
      cellRenderer: 'textTooltipRenderer',
      // Aligne le texte à droite
      cellStyle: {'text-align': 'right'},
      valueFormatter: data => this.tableauFormattersComparatorsService.customValueFormatter(data, 2),
    },
    {
      headerName: '2019',
      field: 'data2019',
      sortable: false,
      filter: false,
      cellRenderer: 'textTooltipRenderer',
      cellStyle: {'text-align': 'right'},
      valueFormatter: data => this.tableauFormattersComparatorsService.customValueFormatter(data, 2),
    },
    {
      headerName: '2018',
      field: 'data2018',
      sortable: false,
      filter: false,
      cellRenderer: 'textTooltipRenderer',
      cellStyle: {'text-align': 'right'},
      valueFormatter: data => this.tableauFormattersComparatorsService.customValueFormatter(data, 2),
    }
  ];

  getOverlayNoRowsTemplate(): string {
    return '<span class="no-rows mb-4">' + this.NO_ROWS_TEXT + '</span>';
  }

  getColumnDefs(): (ColDef | ColGroupDef)[] {
    return this.columnDefs;
  }

}
