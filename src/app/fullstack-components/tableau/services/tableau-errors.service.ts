import { EventEmitter, Injectable } from '@angular/core';
import { NotesService, ToastCategoryEnum } from '@app/fullstack-components/notes/services/notes.service';
import { GridOptions } from 'ag-grid-community';
import { InternalRowNode, TableAsynchronousError } from '../models/tableau.models';

@Injectable({
  providedIn: 'root'
})
export class TableauErrorsService {

  constructor(private notesService: NotesService) { }

  /**
   * Vérifie si le formulaire des lignes en erreur
   * En cas d'erreurs (formulaire ou asynchrones), la sauvegarde n'est pas possible
   * Sinon sauvegarde ou annule l'édition
   */
  checkErrors(cancel: boolean, gridOptions: GridOptions, handleAsyncErrors: boolean, saveEdition: EventEmitter<any>): boolean {
    let stopEdition = false;
    this.notesService.removeAllStatic();

    if (!cancel) {
      // Vérifie s'il y a des erreurs dans les lignes
      const hasError = this.checkRowsValidities(gridOptions, handleAsyncErrors, saveEdition);
      if (!hasError && !handleAsyncErrors) {
        stopEdition = true;
      } else {
        // Force l'affichage des erreurs (notamment dans le cas d'un ajout de ligne)
        gridOptions.api.dispatchEvent({type: 'forceErrorDisplay'});

      }
    } else {
      // Sinon on peut arrêter l'édition
      stopEdition = true;
    }

    return stopEdition;
  }

  /**
   * Vérifie s'il y a des erreurs dans les lignes
   * Vérifie dans un premier temps les erreurs formulaire (formErrors)
   * Si il y en a pas et que le composant parent souhaite vérifier les erreurs asynchrone (présence de handleAsyncErrors)
   * alors envoie au composant parent les lignes modifiées pour vérification
   */
  checkRowsValidities(gridOptions: GridOptions, handleAsyncErrors: boolean, saveEdition: EventEmitter<any>): any {
    const toSend: Map<number, any> = new Map();
    let pagesWithErrors: number[] = [];

    // Parcours toues les lignes
    gridOptions.api.forEachNode((row: InternalRowNode) => {
      // Vérifie s'il y a des erreurs de formulaire
      row.formErrors?.forEach((error: boolean) => {
        if (error) {
          pagesWithErrors = this.getPagesWithErrors(row, gridOptions, pagesWithErrors);
        }
      });

      // Récupère les données ayant étaient modifiées
      if (row.updated) {
        toSend.set(row.__objectId, row.data);
      }
    });

    // Si il y a des erreurs
    if (pagesWithErrors.length > 0) {
      this.navigateToPageIfNecessary(gridOptions, pagesWithErrors);
    } else if (handleAsyncErrors) {
      // Envoie au composent parent les données modifiées pour analyse
      saveEdition.emit(toSend);
    }

    return pagesWithErrors.length > 0;
  }

  /**
   * Ajoute les erreurs asynchrones aux différentes lignes, elles seront ensuite affichées par les cellules
   * Affiche une note d'erreur
   */
  displayAsynchronousErrors(gridOptions: GridOptions, errors: Map<number, TableAsynchronousError[]>, displayNote: boolean = true): void {
    let errorsCount = 0;
    let errorMessage: string;
    let pagesWithErrors: number[] = [];

    // Parcours les lignes
    gridOptions.api.forEachNode((row: InternalRowNode) => {
      // Si dans la map d'erreur il y a la ligne en question
      if (errors.has(row.__objectId)) {
        const errorsMap: Map<string, TableAsynchronousError> = new Map();
        const errorsArray: TableAsynchronousError[] = errors.get(row.__objectId);

        // Pour toutes les erreurs concernant la ligne
        errorsArray.forEach((error: TableAsynchronousError) => {
          // Crée une map associant l'erreur à l'id de la ligne
          errorsMap.set(error.id, error);
          errorMessage = error.message;
          errorsCount++;
        });

        // Ajoute les erreurs à la ligne
        row.asyncErrors = errorsMap;
        // La ligne n'est plus à jour
        row.updated = false;

        // Stock les pages avec des erreurs
        pagesWithErrors = this.getPagesWithErrors(row, gridOptions, pagesWithErrors);
      }
    });

    this.navigateToPageIfNecessary(gridOptions, pagesWithErrors, true);

    // Affiche une note d'erreur
    if (displayNote)  {
      this.notesService.showStatic({
        title: errorsCount === 1 ?
          'Saisie invalide. Un champ est en erreur : ' + errorMessage :
          'Saisie invalide. Plusieurs champs sont en erreur, veuillez survoler l\'icône d\'erreur des champs concernés pour plus de détails.',
        classname: 'note-erreur',
        hideClose: true,
        category: ToastCategoryEnum.ERROR
      });
    }
  }

  /**
   * Retourne une liste de page contenant des erreurs
   */
  getPagesWithErrors(row: InternalRowNode, gridOptions: GridOptions, pagesWithErrors: number[]): number[] {
    const pageSize = gridOptions.api.paginationGetPageSize();

    // Si la rowIndex est null, alors cela veut dire qu'elle est masquée par un filtre
    if (row.rowIndex === null) {
      gridOptions.api.setFilterModel(null);
    }

    const rowPage = Math.ceil((row.rowIndex + 1) / pageSize);

    pagesWithErrors.push(rowPage);

    return pagesWithErrors;
  }

  /**
   * Navigue vers une page contenant des erreurs si il n'y en a pas sur la page actuelle
   */
  navigateToPageIfNecessary(gridOptions: GridOptions, pagesWithErrors: number[], refresh = false): void {
    const currentPage = gridOptions.api.paginationGetCurrentPage() + 1;

    if (pagesWithErrors.indexOf(currentPage) === -1) {
      const pageToGo = pagesWithErrors.find((page: number) => page !== currentPage);
      gridOptions.api.paginationGoToPage(pageToGo - 1);
    } else if (refresh) {
      gridOptions.api.redrawRows();
    }
  }

  /**
   * Vérifie si des lignes sont en erreurs asynchrones
   */
  checkIfHasAsyncErrors(gridOptions: GridOptions): boolean {
    let hasError = false;

    gridOptions.api.forEachNode((row: InternalRowNode) => {
      if (row.asyncErrors?.size > 0) {
        hasError = true;
      }
    });

    return hasError;
  }
}
