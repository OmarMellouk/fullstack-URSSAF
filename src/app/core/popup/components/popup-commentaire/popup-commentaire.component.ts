import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-popup-commentaire',
  templateUrl: './popup-commentaire.component.html'
})
export class PopupCommentaireComponent implements OnInit {

  form: FormGroup;
  modalRef: NgbModalRef;
  subscription: Subscription;

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    // Création du formulaire de la popup
    this.form = this.fb.group({
      commentaire: ['', Validators.required],
    });
  }

  /**
   * Ouvre la popup
   */
  open(popup): void {
    this.modalRef = this.modalService.open(popup);
  }

}
