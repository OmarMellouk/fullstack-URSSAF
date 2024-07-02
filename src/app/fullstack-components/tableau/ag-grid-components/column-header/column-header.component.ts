import { Component, OnDestroy } from '@angular/core';
import { RowNode } from 'ag-grid-community';
import { ExtendedIHeaderParams } from '../../models/tableau.models';

@Component({
  selector: 'app-column-header',
  templateUrl: './column-header.component.html',
  styleUrls: ['./column-header.component.scss']
})
export class ColumnHeaderComponent implements OnDestroy {

  params: ExtendedIHeaderParams;

  ascSort = false;
  descSort = false;
  noSort = true;
  enableCollapsing = false;
  enableGrouping = false;
  isExpandedAll = false;
  isAllChecked = false;

  displayFilterIcon: boolean;

  onSortChangedFn;
  onFilterChangedFn;

  agInit(params: ExtendedIHeaderParams): void {
    this.params = params;

    this.onSortChangedFn = this.onSortChanged.bind(this);
    this.params.column.addEventListener('sortChanged', this.onSortChangedFn);
    this.onSortChanged();
    this.enableCollapsing = this.params.column.getColDef().enableCollapsing;
    this.enableGrouping = this.params.column.getColDef().enableGrouping;
    this.displayFilterIcon = this.params.column.isFilterActive();

    this.onFilterChangedFn = this.onFilterChanged.bind(this);
    this.params.column.addEventListener('filterChanged', this.onFilterChangedFn);
    this.onFilterChanged();

    this.checkExpandStatus();
  }

  /**
   * Affiche une icône après un filtrage sur la colonne
   */
  onFilterChanged(): void {
    this.displayFilterIcon = this.params.column.isFilterActive();
  }

  onSortChanged() {
    this.ascSort = this.params.column.isSortAscending();
    this.descSort = this.params.column.isSortDescending();
    this.noSort = !this.ascSort && !this.descSort;
  }

  onSortRequested(event) {
    if (this.descSort) {
      this.params.setSort('asc', event.shiftKey);
    } else {
      this.params.setSort('desc', event.shiftKey);
    }
  }

  onCollapseAll(isGrouping: boolean) {
    if (isGrouping) {
      this.params.api.collapseAll();
    } else {
      this.params.api.forEachNode((node) => {
        node.setExpanded(false);
      });
    }

    this.isExpandedAll = false;
  }

  onExpandAll(isGrouping: boolean) {
    if (isGrouping) {
      this.params.api.expandAll();
    } else {
      this.params.api.forEachNode((node) => {
        node.setExpanded(true);
      });
    }

    this.isExpandedAll = true;
  }

  /**
   * Vérifie si l'icône expandAll doit être mise à jour
   */
  checkExpandStatus(): void {
    if (this.enableGrouping || this.enableCollapsing) {
      const rowCount: number = this.params.api.paginationGetRowCount();
      // Récupère les row expanded
      const expandedRows = this.params.api['rowModel'].rowsToDisplay?.filter((rowNode: RowNode) => {
        return rowNode.expanded;
      });
      // Vérifie si elles sont toutes ouvertes
      if (rowCount === expandedRows?.length && rowCount !== 0) {
        this.isExpandedAll = true;
      }
    }
  }

  ngOnDestroy(): void {
    this.params.column.removeEventListener('sortChanged', this.onSortChangedFn);
    this.params.column.removeEventListener('filterChanged', this.onFilterChangedFn);
  }
}
