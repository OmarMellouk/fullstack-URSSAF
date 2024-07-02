import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popup-confirmation',
  templateUrl: './popup-confirmation.component.html'
})
export class PopupConfirmationComponent {

  @Input() closedNumber: number;

  constructor(public activeModal: NgbActiveModal) { }
}
