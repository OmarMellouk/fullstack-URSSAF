import { Injectable } from '@angular/core';
import { TableauFormattersComparatorsService } from '@app/fullstack-components/tableau/services/tableau-formatters-comparators.service';
import { ColDef, ColGroupDef } from 'ag-grid-community';

@Injectable({
  providedIn: 'root'
})
export class TableauService {

  sortable: boolean;

  constructor(private tableauFormattersComparatorsService: TableauFormattersComparatorsService) { }

  getColumnDefs(sortable: boolean): (ColDef | ColGroupDef)[] {
    this.sortable = sortable;
    return [
      {
        maxWidth: 40,
        cellRenderer: 'actionRenderer',
        sortable: false
      },
      {
        maxWidth: 110,
        headerName: 'Période de déclaration',
        field: 'periode',
        comparator: this.tableauFormattersComparatorsService.compareLiteralDates,
        sortable: this.sortable,
        filter: false,
      },
      {
        maxWidth: 100,
        headerName: 'Date de réception',
        field: 'dateRecepton',
        cellRenderer: 'dateRenderer',
        sortable: this.sortable,
        filter: false
      },
      {
        maxWidth: 140,
        headerName: 'Date limite de déclaration tolérée',
        field: 'dateLimite',
        cellRenderer: 'dateRenderer',
        sortable: this.sortable,
        filter: false
      },
      {
        maxWidth: 145,
        headerName: 'Montant déclaré (€)',
        field: 'montantDeclare',
        sortable: this.sortable,
        filter: false,
        cellStyle: {'justify-content': 'flex-end'},
        valueFormatter: data => this.tableauFormattersComparatorsService.customValueFormatter(data, 0),
      },
      {
        maxWidth: 145,
        headerName: 'Montant calculé (€)',
        field: 'montantCalcule',
        sortable: this.sortable,
        filter: false,
        cellStyle: {'justify-content': 'flex-end'},
        valueFormatter: data => this.tableauFormattersComparatorsService.customValueFormatter(data, 0),
      },
      {
        headerName: 'Origine du débit',
        field: 'origine',
        sortable: this.sortable,
        filter: false
      },
      {
        maxWidth: 100,
        headerName: 'Dernière modification',
        field: 'derniereModification',
        cellRenderer: 'dateRenderer',
        sortable: this.sortable,
        filter: false
      }
    ];
  }
}
