import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.scss']
})
export class InformationsComponent {

  @Input() tokenValue: string;

  @Input() modalRef: NgbModal;

  constructor(public activeModal: NgbActiveModal) {
  }

}
