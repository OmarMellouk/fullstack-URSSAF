import { Component, OnInit } from '@angular/core';
import { DATA_TABLEAU_SIMPLE } from '@app/bouchons-html/tableau/tableau-simple';
import { OngletTypeEnum } from '@app/fullstack-components/onglets/components/onglet/onglet.component';
import { OngletPremierNiveau } from '@app/fullstack-components/onglets/models/onglets.models';
import { TableauConfigurationBuilderService } from '@app/fullstack-components/tableau/services/tableau-configuration-builder.service';
import { GridOptions, ColDef, ColGroupDef, GridApi, ColumnApi } from 'ag-grid-community';
import { InfobulleTableauService } from '../../services/infobulle-tableau.service';

@Component({
  selector: 'app-infobulle-informative',
  templateUrl: './infobulle-informative.component.html'
})
export class InfobulleInformativeComponent implements OnInit {

  ongletTypeEnum: typeof OngletTypeEnum = OngletTypeEnum;

  active = 0;

  onglets: OngletPremierNiveau[] = [
    {label: 'Label onglet 1'},
    {label: 'Label onglet 2', badgeValue: 3, badge: 'badge-info', infobulle: '3 éléments Onglet 2'},
    {label: 'Label onglet 3', iconAfter: 'assets/icones-showcase/m_warning_b.svg', infobulle: 'Infobulle informative qui reste affichée'}
  ];

  gridOptions: GridOptions;

  rowData: any[] = DATA_TABLEAU_SIMPLE;
  columnDefs: (ColDef | ColGroupDef)[];

  gridApi: GridApi;
  gridColumnApi: ColumnApi;

  constructor(
    private tableauConfigurationBuilderService: TableauConfigurationBuilderService,
    private infobulleTableauService: InfobulleTableauService
  ) {
    this.rowData = [...this.rowData];
    this.rowData[0] = {...this.rowData[0], reference: 'Référence trop longue pour rentrer dans la case'};
  }

  ngOnInit(): void {
    // Configuration générale du tableau
    this.gridOptions = this.tableauConfigurationBuilderService.createGridConfiguration();
    // Colonnes du tableau
    this.columnDefs = this.infobulleTableauService.getColumnDefs();
  }
}
