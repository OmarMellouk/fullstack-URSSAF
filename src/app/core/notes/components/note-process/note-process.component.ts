import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastCategoryEnum, NotesService } from '@app/fullstack-components/notes/services/notes.service';

@Component({
  selector: 'app-note-process',
  templateUrl: './note-process.component.html'
})
export class NoteProcessComponent implements OnInit, OnDestroy {

  toastCategoryEnum: typeof ToastCategoryEnum = ToastCategoryEnum;

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    // Affiche une note d'erreur de données
    this.notesService.showStatic({
      title: 'Ceci est une note de process',
      body: 'Note process qui peut présenter un lien hypertexte',
      classname: 'note-process',
      category: ToastCategoryEnum.PROCESS,
      iconUrl: 'assets/icones-showcase/checklist.svg',
      hideClose: true,
      link: '',
      linkText: 'Lien hypertexte'
    });
  }

  ngOnDestroy(): void {
    this.notesService.removeAllStatic();
  }
}
