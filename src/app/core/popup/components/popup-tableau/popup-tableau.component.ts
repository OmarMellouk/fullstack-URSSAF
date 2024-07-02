import { Component, OnInit } from '@angular/core';
import { DATA_TABLEAU_SIMPLE } from '@app/bouchons-html/tableau/tableau-simple';
import { TableauSimpleService } from '@app/core/tableau/services/tableau-simple.service';
import { TableauConfigurationBuilderService } from '@app/fullstack-components/tableau/services/tableau-configuration-builder.service';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ColDef, ColGroupDef, GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-popup-tableau',
  templateUrl: './popup-tableau.component.html',
  styleUrls: ['./popup-tableau.component.scss']
})
export class PopupTableauComponent implements OnInit {

  modalRef: NgbModalRef;

  gridOptions: GridOptions;
  rowData: any = DATA_TABLEAU_SIMPLE;
  columnDefs: (ColDef | ColGroupDef)[];

  constructor(
    private modalService: NgbModal,
    private tableauConfigurationBuilderService: TableauConfigurationBuilderService,
    private tableauSimpleService: TableauSimpleService
  ) { }

  ngOnInit(): void {
    // Configuration générale du tableau
    this.gridOptions = this.tableauConfigurationBuilderService.createGridConfiguration();
    // Colonnes du tableau
    this.columnDefs = [...this.tableauSimpleService.getColumnDefs()];
    this.columnDefs[0] = {...this.columnDefs[0], headerName: 'Année de référence'} ;
  }

  /**
   * Ouvre la popup
   */
  open(popup): void {
    this.modalRef = this.modalService.open(popup);
  }
}
