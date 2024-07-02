import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popup-erreur',
  templateUrl: './popup-erreur.component.html'
})
export class PopupErreurComponent {

  form: FormGroup;
  modalRef: NgbModalRef;

  constructor(
    private modalService: NgbModal
  ) { }

  /**
   * Ouvre la popup
   */
  open(popup): void {
    this.modalRef = this.modalService.open(popup);
  }

}
