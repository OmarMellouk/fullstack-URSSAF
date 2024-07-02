import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { DateEditorComponent } from '@app/fullstack-components/tableau/ag-grid-components/date-editor/date-editor.component';
import { InputEditorComponent } from '@app/fullstack-components/tableau/ag-grid-components/input-editor/input-editor.component';
import { SelectEditorComponent } from '@app/fullstack-components/tableau/ag-grid-components/select-editor/select-editor.component';
import { ExtendedColDef } from '@app/fullstack-components/tableau/models/tableau.models';
import { TableauFormattersComparatorsService } from '@app/fullstack-components/tableau/services/tableau-formatters-comparators.service';
import { ColDef, ColGroupDef } from 'ag-grid-community';
import { PopupDeConfirmationComponent } from '../components/tableau-modifiable/popup-de-confirmation/popup-de-confirmation.component';

@Injectable({
  providedIn: 'root'
})
export class TableauModifiableService {

  constructor(private tableauFormattersComparatorsService: TableauFormattersComparatorsService) {}

  private NO_ROWS_TEXT = 'Aucun résultat';
  private columnDefs: (ExtendedColDef | ColGroupDef)[] = [
    {
      // Affichage d'une ligne de checkboxes
      // Cette ligne est liée à un bouton "Supprimer en masse" permettant de supprimer plusieurs lignes
      headerName: '',
      // Le field soit absolument avoir comme nom 'selectAll' afin que le bouton soit affiché
      field: 'selectAll',
      headerCheckboxSelection: true,
      checkboxSelection: true,
      sortable: false,
      width: 35,
      minWidth: 35,
      // Permet de ne pas proposer la colonnes lors de la configuration des colonnes
      lockPosition: 'left',
      // Doit être définit, même vide, afin de renseigner le passage en édition
      cellRendererParams: {},
      cellStyle: params => {
        // Masque la cellule en édition
        return params.colDef.cellRendererParams.isEditing ? {display: 'none'} : {display: 'flex'}
      },
      headerClass: params => {
        // Masque la checkbox en édition
        return params.colDef['cellRendererParams'].isEditing ? 'hide-checkbox' : '';
      },
    },
    {
      headerName: '',
      field: 'actionRendererEdit',
      width: 35,
      minWidth: 35,
      cellRenderer: 'actionRendererEdit',
      // Doit être définit, même vide, afin de renseigner le passage en édition
      cellRendererParams: {},
      sortable: false,
      // Masque la bordure du header
      headerClass: 'no-border',
      lockPosition: 'left'
    },
    {
      headerName: '',
      field: 'actionRendererDelete',
      width: 35,
      minWidth: 35,
      cellRenderer: 'actionRendererDelete',
      cellRendererParams: {
        deleteModal: PopupDeConfirmationComponent,
      },
      sortable: false,
      lockPosition: 'left'
    },
    {
      headerName: 'ID Serveur',
      field: 'serveur',
      sortable: true,
      sort: 'asc',
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      floatingFilterComponent: 'inputFilter',
      // Renderer avec une formKey, considéré comme éditable
      cellRenderer: InputEditorComponent,
      cellRendererParams: {
        formKey: 'serveur', // Pas de formKey => pas éditable
        validators: [this.customRequiredValidator()]
      },
      // Permet d'empêcher de masquer la colonnes lors de la configuration des colonnes
      lockList: true
    },
    {
      headerName: 'Système',
      field: 'systeme',
      sortable: true,
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      floatingFilterComponent: 'listFloatingFilter',
      floatingFilterComponentParams: {
        possibleValues: ['Linux', 'Windows', 'MacOS'],
        suppressFilterButton: true
      },
      // Renderer avec une formKey, considéré comme éditable
      cellRenderer: SelectEditorComponent,
      cellRendererParams: {
        formKey: 'systeme',
        values: ['Linux', 'Windows', 'MacOS'],
        hasBlankOption: true,
        validators: [this.customRequiredValidator()]
      },
      lockList: true
    },
    {
      headerName: 'Nom',
      field: 'nom',
      sortable: true,
      // Renderer avec une formKey, considéré comme éditable
      cellRenderer: InputEditorComponent,
      cellRendererParams: {
        formKey: 'nom',
        validators: [this.customRequiredValidator()]
      },
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      floatingFilterComponent: 'inputFilter',
      lockList: true
    },
    {
      headerName: 'Adresse IP',
      field: 'ip',
      sortable: true,
      // Renderer avec une formKey, considéré comme éditable
      cellRenderer: InputEditorComponent,
      cellRendererParams: {
        formKey: 'ip',
        validators: [this.customRequiredValidator()],
        canEditOnlyOnNewRow: true // Éditable uniquement lors de l'ajout d'une ligne
      },
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      floatingFilterComponent: 'inputFilter',
      lockList: true
    },
    {
      headerName: 'Test',
      field: 'test',
      sortable: true,
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      floatingFilterComponent: 'listFloatingFilter',
      floatingFilterComponentParams: {
        possibleValues: ['Testé', '-'],
        suppressFilterButton: true
      },
      // Renderer avec une formKey, considéré comme éditable
      cellRenderer: SelectEditorComponent,
      cellRendererParams: {
        formKey: 'test',
        validators: [this.customRequiredValidator()],
        values: ['Testé', '-'],
        hasBlankOption: true
      },
      lockList: true
    },
    {
      headerName: 'Date de test',
      field: 'date',
      sortable: true,
      // Renderer avec une formKey, considéré comme éditable
      cellRenderer: DateEditorComponent,
      cellRendererParams: {
        formKey: 'date'
      },
      filter: 'agDateColumnFilter',
      floatingFilterComponent: 'agDateInput',
      floatingFilter: true,
      filterParams: {comparator: this.tableauFormattersComparatorsService.compareDates},
      lockList: true
    },
    {
      headerName: 'Etat',
      field: 'etat',
      sortable: true,
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      floatingFilterComponent: 'listFloatingFilter',
      floatingFilterComponentParams: {
        possibleValues: ['Actif', 'Inactif'],
        suppressFilterButton: true
      },
      // Renderer avec une formKey, considéré comme éditable
      cellRenderer: SelectEditorComponent,
      cellRendererParams: {
        formKey: 'etat',
        values: ['Actif', 'Inactif'],
        hasBlankOption: true,
        validators: [this.customRequiredValidator()]
      },
      cellStyle: params => {
        if (params.value === 'Actif') {
          return {color: '#006B00'};
        }
      },
      lockList: true
    }
  ];

  getOverlayNoRowsTemplate(): string {
    return '<span class="no-rows">' + this.NO_ROWS_TEXT + '</span>';
  }

  getColumnDefs(): (ColDef | ColGroupDef)[] {
    return this.columnDefs;
  }

  customRequiredValidator(): ValidatorFn {
    return function validate(control: AbstractControl): ValidationErrors {
      return !!control.value
      ? null
      : {
          isError: true,
          message: 'La valeur ne peut pas être nulle'
        };
    };
  }
}
