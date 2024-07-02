import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastCategoryEnum, NotesService } from '@app/fullstack-components/notes/services/notes.service';

@Component({
  selector: 'app-note-avertissement',
  templateUrl: './note-avertissement.component.html'
})
export class NoteAvertissementComponent implements OnInit, OnDestroy {

  toastCategoryEnum: typeof ToastCategoryEnum = ToastCategoryEnum;

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    // Affiche une note d'avertissement
    this.notesService.showStatic({
      title: 'Ceci est une note d\'avertissement',
      classname: 'note-avertissement',
      category: ToastCategoryEnum.WARNING,
    });
  }

  ngOnDestroy(): void {
    this.notesService.removeAllStatic();
  }

}
