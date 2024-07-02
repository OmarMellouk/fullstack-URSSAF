import { Injectable } from '@angular/core';

export interface Toast {
  body?: string;
  title: string;
  classname: string;
  delay?: number;
  hideClose?: boolean;
  category?: ToastCategoryEnum;
  // A utiliser uniquement pour les note de type INFO
  doNotDisplayCheckbox?: boolean;
  // A utiliser uniquement pour les notes de type ERREUR_DONNEES ou PROCESS
  iconUrl?: string;
  // A utiliser uniquement pour les note de type PROCESS
  link?: string;
  linkText?: string;
}

export interface ToastContainer {
  toast: Toast;
  doNotDisplayAnymore: boolean;
}

export enum ToastCategoryEnum {
 INFO = 'INFO',
 ERROR = 'ERROR',
 WARNING = 'WARNING',
 SUCCESS = 'SUCCESS',
 ERREUR_DONNEES = 'ERREUR_DONNEES',
 PROCESS = 'PROCESS'
}

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  toasts: Toast[] = [];
  staticToasts: Toast[] = [];

  /**
   * Ajoute une note dans la liste
   */
  show(toast: Toast): void {
    this.toasts.push(toast);
  }

  /**
   * Supprime une note de la liste
   */
  remove(toast: Toast): void {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

  /**
   * Ajoute une note dans la liste
   */
  showStatic(toast: Toast): void {
    this.staticToasts.push(toast);
  }

  /**
   * Supprime une note de la liste
   */
  removeStatic(toast: Toast): void {
    this.staticToasts = this.staticToasts.filter(t => t !== toast);
  }

  /**
   * Supprime toutes les notes
   */
  removeAllStatic(): void {
    this.staticToasts = [];
  }
}
