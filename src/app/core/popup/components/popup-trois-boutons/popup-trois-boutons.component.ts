import { Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popup-trois-boutons',
  templateUrl: './popup-trois-boutons.component.html'
})
export class PopupTroisBoutonsComponent {

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
