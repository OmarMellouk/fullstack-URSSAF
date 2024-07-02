import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popup-formulaire',
  templateUrl: './popup-formulaire.component.html'
})
export class PopupFormulaireComponent implements OnInit {

  form: FormGroup;
  modalRef: NgbModalRef;
  labelWidth = 10.692;

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    // Création du formulaire de la popup
    this.form = this.fb.group({
      reference1: ['', Validators.required],
      reference2: ['', Validators.required],
      reference3: ['', Validators.required],
      montant: ['', Validators.required],
      dateImpaye: ['', Validators.required],
      numCompte: ['', Validators.required],
      compteRemise: ['', Validators.required],
      motif: ['', Validators.required],
      statut: ['', Validators.required],
      dateStatut: ['', Validators.required],
      commentaire: ['', Validators.required],
    });
  }

  /**
   * Ouvre la popup
   */
  open(popup): void {
    this.modalRef = this.modalService.open(popup, { modalDialogClass: 'modal-formulaire' });
  }
}
