import { Component } from '@angular/core';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popup-longue',
  templateUrl: './popup-longue.component.html'
})
export class PopupLongueComponent {

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
