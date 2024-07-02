import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NotesService, Toast, ToastCategoryEnum } from '@app/fullstack-components/notes/services/notes.service';
import { NgbModalRef, NgbModal, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-popup-bandeau-erreur',
  templateUrl: './popup-bandeau-erreur.component.html'
})
export class PopupBandeauErreurComponent implements OnInit {

  modalRef: NgbModalRef;
  form: FormGroup;
  maxDate: NgbDate;
  toastCategoryEnum: typeof ToastCategoryEnum = ToastCategoryEnum;

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private notesService: NotesService
  ) { }

  ngOnInit(): void {
    // Date du jour
    const date = new Date();
    this.maxDate = new NgbDate(date.getFullYear(), date.getMonth() + 1, date.getDate());

    // Création du formulaire de la popup
    this.form = this.fb.group({
      dateDeces: [{year: 2122, month: 1, day: 1}, this.validateDate.bind(this)],
    });
  }

  /**
   * Ouvre la popup
   */
  open(popup): void {
    // Affiche une note d'erreur dans la modale
    const toast: Toast = {
      title: 'Saisie invalide. La date de décès n\'est pas cohérente avec le dossier.',
      classname: 'note-erreur',
      hideClose: true,
      category: ToastCategoryEnum.ERROR
    };
    this.notesService.showStatic(toast);

    // Ouvre la popup
    this.modalRef = this.modalService.open(popup);

    // Supprime les toasts quand la modale de ferme
    this.modalRef.dismissed.pipe(take(1)).subscribe(() => {
      this.notesService.removeStatic(toast);
    });
  }

  /**
   * Valide que la date ne dépasse pas maxDate
   */
  validateDate(control: AbstractControl) {
    if ((control.value === '' || !control.value)) {
      return null;
    }

    if (this.maxDate.after(control.value)) {
      return null;
    }

    return true;
  }
}
