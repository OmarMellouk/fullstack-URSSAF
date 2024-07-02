import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-popup-sample',
  templateUrl: './popup-sample.component.html'
})
export class PopupSampleComponent implements OnInit {

  form: FormGroup;
  modalRef: NgbModalRef;

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    // Création du formulaire de la popup
    this.form = this.fb.group({
      periode: [''],
    });
  }

  /**
   * Ouvre la popup
   */
  open(popup): void {
    this.modalRef = this.modalService.open(popup);

    this.modalRef.dismissed.pipe(take(1)).subscribe((numButton: number) => {
      if (numButton === 0) {
        // Cas fermeture en cliquant en dehors ou sur la croix
      }
      // Exemple de récupération du bouton cliqué
      // else if (numButton === 1) {
      //   // Cas confirmer
      // } else {
      //   // Cas abandonner
      // }
    });
  }
}
