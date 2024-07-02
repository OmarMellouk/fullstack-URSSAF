import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastCategoryEnum, NotesService } from '@app/fullstack-components/notes/services/notes.service';

@Component({
  selector: 'app-note-erreur-donnees',
  templateUrl: './note-erreur-donnees.component.html'
})
export class NoteErreurDonneesComponent implements OnInit, OnDestroy {

  toastCategoryEnum: typeof ToastCategoryEnum = ToastCategoryEnum;

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    // Affiche une note d'erreur de données
    this.notesService.showStatic({
      title: 'Note d\'erreur de données',
      body: 'Ceci est une note d\'erreur de données',
      classname: 'note-erreur-donnees',
      category: ToastCategoryEnum.ERREUR_DONNEES,
      iconUrl: 'assets/icones-showcase/erreur_donnees.svg'
    });
  }

  ngOnDestroy(): void {
    this.notesService.removeAllStatic();
  }
}
