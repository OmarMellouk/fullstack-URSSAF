import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ColDef, ColumnApi, GridApi, GridOptions } from 'ag-grid-community';
import { Observable, BehaviorSubject } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { StartEditingTable } from '../models/tableau.models';

@Injectable({
  providedIn: 'root'
})
export class TableauModifiableService {

  // Position du cursor au cours d'une édition
  cursorPosition: number = null;

  constructor(private modalService: NgbModal) {}

  // Observable permettant de gérer le status de l'édition
  private startEditingSubject$: BehaviorSubject<StartEditingTable> = new BehaviorSubject(null);

  /**
   * Met à jour l'observable
   */
  startEditing(uniqueKey: string, rowId?: number): void {
    this.startEditingSubject$.next({id: uniqueKey, rowId});
  }

  /**
   * Retourne l'observable sans sa valeur initiale (null)
   */
  onStartEditing(uniqueKey: string): Observable<StartEditingTable> {
    return this.startEditingSubject$.pipe(filter((value: StartEditingTable) => value?.id === uniqueKey));
  }

  /**
   * Active l'édition sur les cellules depuis cellRendererParams
   */
  turnEditionOn(gridApi: GridApi, gridColumnApi: ColumnApi, rowId: number, newRowAdded: boolean): void {
    gridColumnApi.getAllDisplayedColumns().forEach(column => {
      const columnDefinition: ColDef = column.getColDef();
      if (columnDefinition.cellRendererParams) {
        columnDefinition.cellRendererParams.isEditing = true;
        columnDefinition.cellRendererParams.rowIdEdit = rowId;
        columnDefinition.cellRendererParams.newRowAdded = newRowAdded;
      }
    });

    gridApi.redrawRows();
    gridApi.refreshHeader();
  }

  /**
   * Désactive l'édition sur les cellules depuis cellRendererParams
   */
  turnEditionOff(gridApi: GridApi, gridColumnApi: ColumnApi): void {
    gridColumnApi.getAllDisplayedColumns().forEach(column => {
      const columnDefinition: ColDef = column.getColDef();
      if (columnDefinition.cellRendererParams) {
        columnDefinition.cellRendererParams.isEditing = false;
        columnDefinition.cellRendererParams.rowIdEdit = -1;
      }
    });

    gridApi.redrawRows();
    gridApi.refreshHeader();
  }

  /**
   * Supprime une ou plusieurs lignes
   */
  deleteRow(gridApi: GridApi, indexOrIndexList: number | number[], modal?: any): void {
    // Récupère les lignes à supprimer
    const rowsToDelete = [];
    // Dans le cas où l'on veut supprimer plusieurs lignes
    if (Array.isArray(indexOrIndexList)) {
      indexOrIndexList.forEach(index => {
        if (gridApi.getDisplayedRowAtIndex(index)) {
          rowsToDelete.push(gridApi.getDisplayedRowAtIndex(index).data);
        }
     });
    } else {
      // Dans le cas où l'on veut supprimer qu'une ligne
      rowsToDelete.push(gridApi.getDisplayedRowAtIndex(indexOrIndexList).data);
    }

    if (modal) {
      const modalRef = this.modalService.open(modal);
      modalRef.componentInstance.rowDataArray = rowsToDelete;
      modalRef.dismissed.pipe(take(1)).subscribe((numButton: number) => {
        // Dans le cas ou l'utilisateur confirme
        if (numButton === 1) {
          // Supprime la ligne
          gridApi.applyTransaction({remove: rowsToDelete});
          // Informe que les données ont été modifiée
          gridApi.dispatchEvent({type: 'tableDataUpdated'});
          // Redraw les lignes afin de prendre en compte la ligne supprimée
          gridApi.redrawRows();
        }
      });
    } else {
      // Supprime la ligne
      gridApi.applyTransaction({remove: rowsToDelete});
      // Informe que les données ont été modifiée
      gridApi.dispatchEvent({type: 'tableDataUpdated'});
      // Redraw les lignes afin de prendre en compte la ligne supprimée
      gridApi.redrawRows();
    }
  }

  /**
   * Ajoute une ligne au début du tableau
   */
  addRow(gridApi: GridApi, gridOptions: GridOptions, pushNewRows: boolean): number {
    if (pushNewRows) {
      gridApi.paginationGoToLastPage();
    } else {
      gridApi.paginationGoToFirstPage();
    }

    // Récupère le model de la ligne
    const columnDefs = gridApi.getColumnDefs();
    const row: any = {};
    const index = pushNewRows ? gridApi.getDisplayedRowCount() : 0;

    // Supprime les filtres et les tris
    gridOptions.api.setFilterModel(null);
    gridOptions.columnApi.applyColumnState({ defaultState: { sort: null } });

    // Crée une nouvelle ligne à partir du model en l'initialisant à null
    columnDefs.forEach((columnDef: ColDef) => {
      row[columnDef.field] = null;
    });

    // Ajoute la ligne et met à jour les données
    const rowNodeTransaction = gridApi.applyTransaction({ add: [row], addIndex: index });

    // Redraw les lignes afin d'avoir la ligne ajoutée
    gridApi.redrawRows();

    // Retourne l'id de la nouvelle ligne
    return rowNodeTransaction.add[0].__objectId;
  }

  /**
   * Supprime la ligne ajoutée en cas d'annulation
   */
  deleteRowIfNecessary(gridApi: GridApi, cancel: boolean, newRowAdded: boolean, pushNewRows: boolean): void {
    if (cancel && newRowAdded) {
      this.deleteRow(gridApi, pushNewRows ? gridApi.getDisplayedRowCount() - 1 : 0);
    }
  }
}
