import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastCategoryEnum, NotesService } from '@app/fullstack-components/notes/services/notes.service';

@Component({
  selector: 'app-note-information',
  templateUrl: './note-information.component.html'
})
export class NoteInformationComponent implements OnInit, OnDestroy {

  toastCategoryEnum: typeof ToastCategoryEnum = ToastCategoryEnum;
  localStorageKey = 'toastKey';

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    // Affiche une note d'information
    this.notesService.showStatic({
      title: 'Ceci est une note d\'information',
      classname: 'note-information',
      category: ToastCategoryEnum.INFO,
    });

    // Récupère l'information concernant l'affiche de la note dans le local storage
    if (!JSON.parse(localStorage.getItem(this.localStorageKey))?.doNotDisplayAnymore) {
      // Affiche une note d'information avec une checkbox "Ne plus afficher"
      this.notesService.showStatic({
        title: 'Ceci est une note d\'information',
        classname: 'note-information',
        category: ToastCategoryEnum.INFO,
        doNotDisplayCheckbox: true
      });
    }
  }

  /**
   * Fermeture de la note
   */
  close(doNotDisplayAnymore: boolean) {
    // Si l'utilisateur ne veut plus avoir la note affichée
    if (doNotDisplayAnymore) {
      // Sauvegarde l'information par exemple dans le local storage
      localStorage.setItem(this.localStorageKey, JSON.stringify({doNotDisplayAnymore: doNotDisplayAnymore}));
    }
  }

  ngOnDestroy(): void {
    this.notesService.removeAllStatic();
  }

}
