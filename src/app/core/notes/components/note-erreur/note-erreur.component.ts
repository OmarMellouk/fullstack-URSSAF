import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastCategoryEnum, NotesService } from '@app/fullstack-components/notes/services/notes.service';

@Component({
  selector: 'app-note-erreur',
  templateUrl: './note-erreur.component.html'
})
export class NoteErreurComponent implements OnInit, OnDestroy {

  toastCategoryEnum: typeof ToastCategoryEnum = ToastCategoryEnum;

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    // Affiche une note d'erreur
    this.notesService.showStatic({
      title: 'Ceci est une note d\'erreur',
      classname: 'note-erreur',
      hideClose: true,
      category: ToastCategoryEnum.ERROR
    });

    // Affiche une note d'erreur sur deux lignes
    this.notesService.showStatic({
      body: 'Ceci est une note d\'erreur',
      title: 'Note d\'erreur',
      classname: 'note-erreur',
      hideClose: true,
      category: ToastCategoryEnum.ERROR
    });
  }

  ngOnDestroy(): void {
    this.notesService.removeAllStatic();
  }
}
