import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

export interface BoutonPopup {
  label: string;
  icone?: string;
}

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html'
})
export class PopupComponent {

  @Input() modalRef: NgbModalRef | NgbActiveModal;

  /**
   * Titre de la popup
   */
  @Input() title: string;
  /**
   * Label et icône du premier bouton (En partant de la droite)
   * Champ optionnel, sera affiché par défaut "Confirmer"
   */
  @Input() firstButton: BoutonPopup = {label: 'Confirmer', icone: 'icon-b_valid'};
  /**
   * Label et icône du premier bouton (En partant de la droite)
   * Champ optionnel, sera affiché par défaut "Abandonner"
   */
  @Input() secondButton: BoutonPopup = {label: 'Abandonner', icone: 'icon-b_cancel'};
  /**
   * Label et icône du premier bouton (En partant de la droite)
   * Champ optionnel, sera masqué par défaut
   */
  @Input() thirdButton: BoutonPopup;
  /**
   * Validité du formulaire, désactive le premier bouton si faux.
   * Champ optionnel
   */
  @Input() isFormValid = true;
  /**
   * URL de l'icône à afficher dans la popup
   */
  @Input() iconToDisplay: string;

  /**
   * Ferme la popup en renvoyant le numéro du bouton
   */
  closePopup(numButton: number): void {
    this.modalRef.dismiss(numButton);
  }
}
