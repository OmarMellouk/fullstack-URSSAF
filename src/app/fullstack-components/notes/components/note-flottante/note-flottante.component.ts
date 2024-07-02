import { Component } from '@angular/core';
import { NotesService, ToastContainer } from '../../services/notes.service';

/**
 * Ce composant permet l'affichage de toutes les notes
 * Il est affiché directement dans app.component.html
 */
@Component({
  selector: 'app-note-flottante',
  templateUrl: './note-flottante.component.html'
})
export class NoteFlottanteComponent {

  constructor(public notesService: NotesService) { }

  /**
   * Ferme la note
   */
  closeToast(toast: ToastContainer): void {
    this.notesService.remove(toast.toast);
  }
}
