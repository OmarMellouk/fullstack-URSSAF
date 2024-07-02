import { Injectable } from '@angular/core';
import { ExtendedColDef } from '@app/fullstack-components/tableau/models/tableau.models';
import { TableauConfigurationBuilderService } from '@app/fullstack-components/tableau/services/tableau-configuration-builder.service';
import { TableauFormattersComparatorsService } from '@app/fullstack-components/tableau/services/tableau-formatters-comparators.service';
import { ColDef, ColGroupDef, GridOptions } from 'ag-grid-community';

@Injectable({
  providedIn: 'root',
})
export class TableauImbriqueService {
  constructor(
    private tableauConfigurationBuilderService: TableauConfigurationBuilderService,
    private tableauFormattersComparatorsService: TableauFormattersComparatorsService
  ) {}

  private NO_ROWS_TEXT = 'Aucun résultat';
  private columnDefs: (ExtendedColDef | ColGroupDef)[] = [
    {
      field: 'collapse',
      headerName: '',
      sortable: false,
      // Paramètre custom permettant de gérer l'affichage de l'icône dans l'header et du nombre de lignes totales
      enableCollapsing: true,
      cellRenderer: 'agGroupCellRenderer',
      width: 32,
      minWidth: 32,
      // Permet de ne pas proposer la colonnes lors de la configuration des colonnes
      lockPosition: 'left'
    },
    {
      field: 'activite',
      headerName: 'Activité',
      sortable: false,
      cellRenderer: 'textTooltipRenderer'
    },
    {
      field: 'type',
      headerName: 'Type',
      sortable: false,
      cellRenderer: 'textTooltipRenderer'
    },
    {
      field: 'nature',
      headerName: 'Nature de l\'activité',
      sortable: false,
      cellRenderer: 'textTooltipRenderer'
    },
    {
      field: 'statut',
      headerName: 'Statut',
      sortable: false,
      cellRenderer: 'textTooltipRenderer'
    },
    {
      field: 'dateDebut',
      headerName: 'Date de début prévisionnelle',
      cellRenderer: 'dateRenderer',
      sortable: false,
    },
    {
      field: 'dateFin',
      headerName: 'Date de fin prévisionnelle',
      cellRenderer: 'dateRenderer',
      sortable: false,
    },
    {
      field: 'dateRealisation',
      headerName: 'Date de réalisation',
      cellRenderer: 'dateRenderer',
      sortable: false,
    },
    {
      field: 'lien',
      headerName: 'Lien',
      sortable: false,
      valueFormatter: data => this.tableauFormattersComparatorsService.customValueFormatter(data, 2),
      cellRenderer: 'textTooltipRenderer'
    },
  ];

  getOverlayNoRowsTemplate(): string {
    return '<span class="no-rows">' + this.NO_ROWS_TEXT + '</span>';
  }

  getColumnDefs(): (ColDef | ColGroupDef)[] {
    return this.columnDefs;
  }

  /**
   * Retourne la configuration du tableau imbriqué
   */
  getDetailCellRendererParams() {
    const gridConfiguration: GridOptions = this.tableauConfigurationBuilderService.createGridConfiguration();

    return {
      detailGridOptions: {
        ...gridConfiguration,
        components: {
          ...gridConfiguration.components,
        },
        columnDefs: [
          {
            field: 'numero',
            headerName: 'Numéro de créance',
            sortable: false,
            cellRenderer: 'textTooltipRenderer'
          },
          {
            field: 'periode',
            headerName: 'Périodes',
            sortable: false,
            cellRenderer: 'textTooltipRenderer'
          },
          {
            field: 'origine',
            headerName: 'Origine',
            sortable: false,
            cellRenderer: 'textTooltipRenderer'
          },
          {
            field: 'montant',
            headerName: 'Montant d\'origine (€)',
            sortable: false,
            cellStyle: {'text-align': 'right'},
            valueFormatter: data => this.tableauFormattersComparatorsService.customValueFormatter(data, 2),
            cellRenderer: 'textTooltipRenderer'
          },
          {
            field: 'solde',
            headerName: 'Solde (€)',
            sortable: false,
            cellStyle: {'text-align': 'right'},
            valueFormatter: data => this.tableauFormattersComparatorsService.customValueFormatter(data, 2),
            cellRenderer: 'textTooltipRenderer'
          },
          {
            field: 'date',
            headerName: 'Date de rattachement',
            sortable: false,
            valueFormatter: data => this.tableauFormattersComparatorsService.customDateFormatter(data),
            cellRenderer: 'textTooltipRenderer'
          },
        ],
        onFirstDataRendered(params) {
          params.api.sizeColumnsToFit();
        },
      },
      getDetailRowData: function (params) {
        params.successCallback(params.data.detail);
      }
    }
  }
}
