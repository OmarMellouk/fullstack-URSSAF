import { Injectable } from '@angular/core';
import { ColDef, ColumnResizedEvent, FilterModifiedEvent, GridOptions, GridSizeChangedEvent,
  RowClassParams, RowGroupOpenedEvent, SuppressKeyboardEventParams } from 'ag-grid-community';
import { ActionRendererDeleteComponent } from '../ag-grid-components/action-renderer-delete/action-renderer-delete.component';
import { ActionRendererEditComponent } from '../ag-grid-components/action-renderer-edit/action-renderer-edit.component';
import { ColumnHeaderComponent } from '../ag-grid-components/column-header/column-header.component';
import { DateFilterComponent } from '../ag-grid-components/date-filter/date-filter.component';
import { DateRendererComponent } from '../ag-grid-components/date-renderer/date-renderer.component';
import { InputEditorComponent } from '../ag-grid-components/input-editor/input-editor.component';
import { InputFilterComponent } from '../ag-grid-components/input-filter/input-filter.component';
import { ListFloatingFilterComponent } from '../ag-grid-components/list-floating-filter/list-floating-filter.component';
import { TextTooltipRendererComponent } from '../ag-grid-components/text-tooltip-renderer/text-tooltip-renderer.component';

@Injectable({
  providedIn: 'root'
})
export class TableauConfigurationBuilderService {

  // configuration des colonnes par défaut
  defaultColDef: ColDef = {
    // permet d'afficher l'icône de tri par défaut sur les colonnes
    unSortIcon: true,
    // permet de supprimer le menu de configuration des colonnes
    suppressMenu: true,
    // permet de supprimer le bouton de filtrage
    floatingFilterComponentParams: { suppressFilterButton: true },
    // Active le tri par défaut
    sortable: true,
    // Supprime le resize par défaut
    resizable: false,
    // Supprime les filtres par défaut
    filter: false,
    // Supprime le drag and drop sur les colonnes
    suppressMovable: true,
    suppressKeyboardEvent: (params: SuppressKeyboardEventParams) => {
      // Supprime l'utilisation des flèches dans le tableau pendant l'édition
      const keysToSuppress = ['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown'];
      const isEditing = params.colDef.cellRendererParams?.isEditing;
      if (isEditing && keysToSuppress.indexOf(params.event.key) >= 0) {
        return true;
      }

      // Autorise le ctrl + a en édition en supprimant le comportement prévu par ag grid
      if (isEditing && params.event.key === 'a' && params.event.ctrlKey) {
        return true;
      }

      return false;
    }
  };

  // Composants "maison" pour le tableau
  frameworkComponents = {
    dateRenderer: DateRendererComponent,
    agColumnHeader: ColumnHeaderComponent,
    actionRendererEdit: ActionRendererEditComponent,
    actionRendererDelete: ActionRendererDeleteComponent,
    agDateInput: DateFilterComponent,
    listFloatingFilter: ListFloatingFilterComponent,
    inputFilter: InputFilterComponent,
    textTooltipRenderer: TextTooltipRendererComponent,
    inputEditorComponent: InputEditorComponent
  };

  createGridConfiguration(tableFrameworkComponents?: any): GridOptions {
    return {
      // Option pour redimentionner automatiquement la hauteur du tableau
      domLayout: 'autoHeight',
      defaultColDef: this.defaultColDef,
      rowSelection: 'multiple',
      pagination: true,
      suppressPaginationPanel: true,
      suppressScrollOnNewData: true,
      enableRangeSelection: false,
      // RÉTROCOMPATIBILITÉ renommer frameworkComponents en components
      components: tableFrameworkComponents
        ? tableFrameworkComponents
        : this.frameworkComponents,
      onFirstDataRendered: this.onFirstDataRendered,
      rowHeight: 32,
      floatingFiltersHeight: 32,
      // Supprime le menu clic droit
      suppressContextMenu: true,
      // Active les tableaux imbriqués
      masterDetail: true,
      // Hauteur automatique pour les tableaux imbriqués
      detailRowAutoHeight: true,
      singleClickEdit: false,
      suppressClickEdit: true,
      // N'arrête pas l'édition quand on clique hors du tableau
      stopEditingWhenGridLosesFocus: false,
      stopEditingWhenCellsLoseFocus: false,
      suppressRowClickSelection: true,
      // Supprime le warning : ag-grid: invalid colDef property 'enableCollapsing'
      // enableCollapsing étant utilisé par un composant custom
      suppressPropertyNamesCheck: true,
      onFilterModified: (event: FilterModifiedEvent) => {
        // Après un filtre ne retournant pas de résultat, l'overlay noRows n'est pas trigger
        // On le trigger donc manuellement ici si besoin
        if (event.api.getDisplayedRowCount() === 0) {
          event.api.showNoRowsOverlay();
        } else {
          event.api.hideOverlay();
        }
      },
      getRowStyle: (params) => {
        if (params.node.rowPinned) {
          return { 'font-weight': 'bold' };
        }
      },
      rowClassRules: {
        // Pour les rows dynamiquements créées pendant une édition (au scroll par exemple)
        'pointer-events-none': (params: RowClassParams) => {
          if (
            params.api.getEditingCells().length > 0 &&
            params.api.getEditingCells()[0].rowIndex !== params.rowIndex
          ) {
            return true;
          }

          return false;
        },
      },
      onRowGroupOpened: (event: RowGroupOpenedEvent) => {
        // Met à jour le header lorsque des rows sont ouvertes/fermées
        event.api.refreshHeader();
      },
      onGridSizeChanged: (event: GridSizeChangedEvent) => {
        // Évite l'apparition d'une scrollbar dans le tableau lorsque la taille de la fenêtre change
        event.api.sizeColumnsToFit();
        event.api.dispatchEvent({type: 'gridOrColumnResized'});
      },
      onColumnResized: (event: ColumnResizedEvent) => {
        event.api.dispatchEvent({type: 'gridOrColumnResized'});
      }
    };
  }

  // Permet de redimensionner les colonnes pour que le tableau occupe toute la place disponible
  onFirstDataRendered(params): void {
    params.api.sizeColumnsToFit();
  }
}
