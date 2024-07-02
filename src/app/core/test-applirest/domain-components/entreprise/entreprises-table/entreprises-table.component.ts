import { Component } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { EntrepriseTableModifyRendrerComponent } from '../entreprise-table-modify-rendrer/entreprise-table-modify-rendrer.component';
import { EntrepriseService } from '@app/apis/applirest/api-v3/services';
import { TableauConfigurationBuilderService } from '@app/fullstack-components/tableau/services/tableau-configuration-builder.service';
import { DateRendererComponent } from '@app/fullstack-components/tableau/ag-grid-components/date-renderer/date-renderer.component';
import { ColumnHeaderComponent } from '@app/fullstack-components/tableau/ag-grid-components/column-header/column-header.component';
import { DateFilterComponent } from '@app/fullstack-components/tableau/ag-grid-components/date-filter/date-filter.component';
import { TableauFormattersComparatorsService } from '@app/fullstack-components/tableau/services/tableau-formatters-comparators.service';
import { DateEditorComponent } from '@app/fullstack-components/tableau/ag-grid-components/date-editor/date-editor.component';
import { InputFilterComponent } from '@app/fullstack-components/tableau/ag-grid-components/input-filter/input-filter.component';
import { EntrepriseTableDeleteRendrerComponent } from '../entreprise-table-delete-rendrer/entreprise-table-delete-rendrer.component';

@Component({
  selector: 'app-entreprises-table',
  templateUrl: './entreprises-table.component.html'
})
export class EntreprisesTableComponent {

  tableFrameworkComponents = {
    dateRenderer: DateRendererComponent,
    agColumnHeader: ColumnHeaderComponent,
    agDateInput: DateFilterComponent,
    inputFilter: InputFilterComponent,
    actionRendererEdit: EntrepriseTableModifyRendrerComponent,
    actionRendererDelete: EntrepriseTableDeleteRendrerComponent,
  };

  // La configuration du tableau
  gridOptions: GridOptions;
  overlayNoRowsTemplate: string;

  rowData;

  columnDefs = [
    {
      width: 35,
      minWidth: 35,
      maxWidth: 35,
      cellRenderer: 'actionRendererEdit',
      sortable: false,
      headerClass: 'no-border'
    },
    {
      width: 35,
      minWidth: 35,
      maxWidth: 35,
      cellRenderer: 'actionRendererDelete',
      sortable: false,
    },
    {
      headerName: '#',
      field: 'id',
      sort: 'asc',
      sortable: true,
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      floatingFilterComponent: 'inputFilter'
    },
    {
      headerName: 'Dénomination',
      field: 'denomination',
      sortable: true,
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      floatingFilterComponent: 'inputFilter'
    },
    {
      headerName: 'Activité principale',
      field: 'activite',
      sortable: true,
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      floatingFilterComponent: 'inputFilter'
    },
    {
      headerName: 'Code NAF',
      field: 'naf',
      sortable: true,
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      floatingFilterComponent: 'inputFilter'
    },
    {
      headerName: '	Date de création',
      field: 'dateCreation',
      sortable: true,
      cellRenderer: DateEditorComponent,
      filter: 'agDateColumnFilter',
      floatingFilterComponent: 'agDateInput',
      floatingFilter: true,
      filterParams: {comparator: this.tableauFormattersComparatorsService.compareDates}
    }
  ];

  constructor(private entrepriseService: EntrepriseService,
              private tableauConfigurationBuilderService: TableauConfigurationBuilderService,
              private tableauFormattersComparatorsService: TableauFormattersComparatorsService) {
    this.gridOptions = this.tableauConfigurationBuilderService.createGridConfiguration(this.tableFrameworkComponents);

  }

  lowerCase(params) {
    return params.value.toLowerCase();
  }


  onGridReady() {
    this.rowData = this.entrepriseService.rechercherEntreprises({ currentPage: 0, size: 20 });
  }

}


