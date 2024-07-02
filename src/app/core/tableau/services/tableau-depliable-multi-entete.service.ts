import { Injectable } from '@angular/core';
import { TableauFormattersComparatorsService } from '@app/fullstack-components/tableau/services/tableau-formatters-comparators.service';
import { ColDef, ColGroupDef } from 'ag-grid-community';

@Injectable({
  providedIn: 'root'
})
export class TableauDepliableMultiEnteteService {

  constructor(private tableauFormattersComparatorsService: TableauFormattersComparatorsService) {}

  private NO_ROWS_TEXT = 'Aucun résultat';
  private columnDefs: (ColDef | ColGroupDef)[] = [
    {
      field: 'dateIntegration',
      rowGroup: true,
      rowGroupIndex: 0,
      hide: true,
      // Permet de ne pas proposer la colonnes lors de la configuration des colonnes
      lockPosition: 'left'
    },
    {
      headerName: 'Date Integration',
      field: 'dateIntegration',
      // Affiche la valeur dans la colonne en plus de celle du groupe
      showRowGroup: true,
      filter: 'agDateColumnFilter',
      sort: 'desc',
      floatingFilterComponent: 'agDateInput',
      floatingFilter: true,
      filterParams: {comparator: this.tableauFormattersComparatorsService.compareDates},
      // 0 étant le niveau de rowGroupIndex pour ce champs
      valueFormatter: data => this.tableauFormattersComparatorsService.displayOnlyForLevel(data, 0),
      cellRenderer: 'textTooltipRenderer'
    },
    {
      headerName: 'Date Execution',
      field: 'dateExecution',
      filter: 'agDateColumnFilter',
      floatingFilterComponent: 'agDateInput',
      floatingFilter: true,
      filterParams: {comparator: this.tableauFormattersComparatorsService.compareDates},
      // 1 étant la valeur supérieure aux niveaux des rowGroupIndex
      valueFormatter: data => this.tableauFormattersComparatorsService.customDateFormatter(data, 1),
      cellRenderer: 'textTooltipRenderer'
    },
    {
      field: 'validation',
      headerName: 'Validation',
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      floatingFilterComponent: 'listFloatingFilter',
      floatingFilterComponentParams: {
        possibleValues: ['Non requise', 'OK', 'OK avec modif', 'Requise'],
        suppressFilterButton: true
      },
      cellRenderer: 'textTooltipRenderer'
    },
    {
      headerName: 'Emetteur',
      field: 'emetteur',
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      floatingFilterComponent: 'listFloatingFilter',
      floatingFilterComponentParams: {
        possibleValues: ['Aladin', 'Banque', 'Teledep'],
        suppressFilterButton: true
      },
      cellRenderer: 'textTooltipRenderer'
    },
    {
      headerName: 'Montant (€)',
      field: 'montant',
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      floatingFilterComponent: 'inputFilter',
      cellStyle: { 'text-align': 'right' },
      // 1 étant la valeur supérieure aux niveaux des rowGroupIndex
      valueFormatter: data => this.tableauFormattersComparatorsService.customValueFormatter(data, 2, 1),
      cellRenderer: 'textTooltipRenderer'
    },
    {
      headerName: 'Rejet',
      field: 'rejet',
      headerClass: 'header-text-center',
      // Contrainte en cas d'utilisation de la configuration des colonnes
      // Une colonne avec des enfants doit avoir une position verrouillée, elle ne peut pas être déplacée programmatically
      lockPosition: 'right',
      children: [
        {
          headerName: 'Motif de rejet',
          field: 'rejetMotif',
          filter: 'agTextColumnFilter',
          floatingFilter: true,
          floatingFilterComponent: 'listFloatingFilter',
          floatingFilterComponentParams: {
            possibleValues: ['Erreur de structure', 'Fichier en doublon'],
            suppressFilterButton: true
          },
          cellRenderer: 'textTooltipRenderer'
        },
        {
          headerName: 'Detail du rejet',
          field: 'rejetDetail',
          filter: 'agTextColumnFilter',
          floatingFilter: true,
          floatingFilterComponent: 'inputFilter',
          cellRenderer: 'textTooltipRenderer'
        }
      ]
    }
  ];

  getOverlayNoRowsTemplate(): string {
    return '<span class="no-rows mt-5">' + this.NO_ROWS_TEXT + '</span>';
  }

  getColumnDefs(): (ColDef | ColGroupDef)[] {
    return this.columnDefs;
  }
}
