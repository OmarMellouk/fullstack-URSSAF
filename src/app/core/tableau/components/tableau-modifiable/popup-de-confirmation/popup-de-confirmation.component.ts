import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popup-de-confirmation',
  templateUrl: './popup-de-confirmation.component.html'
})
export class PopupDeConfirmationComponent {

  @Input() rowDataArray: any[] = [];

  constructor(public activeModal: NgbActiveModal) { }
}
