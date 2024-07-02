import { Injectable } from '@angular/core';
import { InputEditorComponent } from '@app/fullstack-components/tableau/ag-grid-components/input-editor/input-editor.component';
import { NumericalAmountService } from '@app/fullstack-components/tableau/services/numerical-amount.service';
import { TableauFormattersComparatorsService } from '@app/fullstack-components/tableau/services/tableau-formatters-comparators.service';
import { ColDef, ColGroupDef } from 'ag-grid-community';

@Injectable({
  providedIn: 'root'
})
export class TableauDetailService {

  constructor(
    private tableauFormattersComparatorsService: TableauFormattersComparatorsService,
    private numericalAmountService: NumericalAmountService
  ) { }

  private columnDefs: (ColDef | ColGroupDef)[] = [
    {
      maxWidth: 60,
      headerName: 'CTP',
      field: 'ctp',
      sortable: true,
      sort: 'asc',
      filter: false
    },
    {
      headerName: 'Nature d\'assiette',
      field: 'nature',
      sortable: true,
      filter: false
    },
    {
      maxWidth: 77,
      minWidth: 69,
      headerName: 'Format CTP',
      field: 'format',
      sortable: true,
      filter: false,
      cellRenderer: 'formatCtpCellRenderer',
      cellStyle: params => params.value === 'F' ? {color: '#008000', 'font-weight': 700} : null
    },
    {
      maxWidth: 77,
      headerName: 'Code risque',
      field: 'codeRisque',
      sortable: true,
      filter: false
    },
    {
      maxWidth: 100,
      headerName: 'Code commune',
      field: 'codeCommune',
      sortable: true,
      filter: false,
      cellStyle: params => params.value === 'Multiple' ? {color: '#247bd2', 'font-weight': 700} : null
    },
    {
      headerName: 'Cotisation plafonnées',
      headerClass: 'header-text-center',
      children: [
        {
          maxWidth: 120,
          headerName: 'Assiette (€)',
          field: 'assiette',
          sortable: true,
          filter: false,
          cellStyle: {'justify-content': 'flex-end', 'font-weight': 700, 'border-left': '0.071rem solid #808080'}, // 1px
          valueFormatter: data => data.value === '' ? '' : this.tableauFormattersComparatorsService.customValueFormatter(data, 0),
          cellRenderer: InputEditorComponent,
          cellRendererParams: {
            // Applique un filtrage à la saisie de chaque caractère
            inputKeypress: this.numericalAmountService.allowNumericalAmount,
            // Applique un formatage à la saisie
            inputInput: this.numericalAmountService.formatNumericalAmount,
            // Applique un formatage à la sauvegarde
            inputSave: this.numericalAmountService.cleanFormatToSave,
            formKey: 'assiette'
          },
        },
        {
          maxWidth: 120,
          headerName: 'Taux (%)',
          field: 'taux',
          sortable: true,
          filter: false,
          cellStyle: {'justify-content': 'flex-end'},
          valueFormatter: data => data.value === '' ? '' : this.tableauFormattersComparatorsService.customValueFormatter(data, 2)
        },
        {
          maxWidth: 120,
          headerName: 'Montant (€)',
          field: 'montant',
          sortable: true,
          filter: false,
          cellStyle: {'justify-content': 'flex-end', 'border-right': '0.071rem solid #808080'}, // 1px
          valueFormatter: data => data.value === '' ? '' : this.tableauFormattersComparatorsService.customValueFormatter(data, 2)
        }
      ]
    },
    {
      headerName: 'Cotisation déplafonnées',
      headerClass: 'header-text-center',
      children: [
        {
          maxWidth: 120,
          headerName: 'Assiette (€)',
          field: 'assiette2',
          filter: false,
          sortable: true,
          cellStyle: {'justify-content': 'flex-end', 'font-weight': 700},
          valueFormatter: data => data.value === '' ? '' : this.tableauFormattersComparatorsService.customValueFormatter(data, 0),
          cellRenderer: InputEditorComponent,
          cellRendererParams: {
            // Applique un filtrage à la saisie de chaque caractère
            inputKeypress: this.numericalAmountService.allowNumericalAmount,
            // Applique un formatage à la saisie
            inputInput: this.numericalAmountService.formatNumericalAmount,
            // Applique un formatage à la sauvegarde
            inputSave: this.numericalAmountService.cleanFormatToSave,
            formKey: 'assiette'
          },
        },
        {
          maxWidth: 120,
          headerName: 'Taux (%)',
          field: 'taux2',
          filter: false,
          sortable: true,
          cellStyle: {'justify-content': 'flex-end'},
          valueFormatter: data => data.value === '' ? '' : this.tableauFormattersComparatorsService.customValueFormatter(data, 2)
        },
        {
          maxWidth: 120,
          headerName: 'Montant (€)',
          field: 'montant2',
          filter: false,
          sortable: true,
          cellStyle: {'justify-content': 'flex-end', 'border-right': '0.071rem solid #808080'}, // 1px
          valueFormatter: data => data.value === '' ? '' : this.tableauFormattersComparatorsService.customValueFormatter(data, 2)
        }
      ]
    },
    {
      maxWidth: 120,
      headerName: 'Montant total calculé',
      field: 'montantTotal',
      sortable: true,
      filter: false,
      cellStyle: {'justify-content': 'flex-end', 'font-weight': 700},
      valueFormatter: data => data.value === '' ? '' : this.tableauFormattersComparatorsService.customValueFormatter(data, 0)
    },
  ];

  getColumnDefs(): (ColDef | ColGroupDef)[] {
    return this.columnDefs;
  }
}
