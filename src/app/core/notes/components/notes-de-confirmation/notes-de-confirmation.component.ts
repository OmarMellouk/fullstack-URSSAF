import { Component } from '@angular/core';
import { NotesService, ToastCategoryEnum } from '@app/fullstack-components/notes/services/notes.service';

@Component({
  selector: 'app-notes-de-confirmation',
  templateUrl: './notes-de-confirmation.component.html'
})
export class NotesDeConfirmationComponent {

  toastCategoryEnum: typeof ToastCategoryEnum = ToastCategoryEnum;

  constructor(public notesService: NotesService) {}

  /**
   * Affiche une note de confirmation
   */
  afficherNoteConfirmation() {
    // Rajouter delay: XXXX dans l'objet pour changer le temps d'affichage (10 secondes par défaut)
    // Pour modifier la position surcharger la classe .ngb-toasts
    this.notesService.show({
      title: 'Ceci est une note de confirmation',
      classname: 'note-confirmation',
      category: this.toastCategoryEnum.SUCCESS
    });
  }
}
