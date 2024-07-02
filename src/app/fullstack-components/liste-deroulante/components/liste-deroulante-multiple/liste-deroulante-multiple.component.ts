import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { ListeDeroulanteService } from '../../services/liste-deroulante.service';

@Component({
  selector: 'app-liste-deroulante-multiple',
  templateUrl: './liste-deroulante-multiple.component.html'
})
export class ListeDeroulanteMultipleComponent implements OnInit, OnDestroy {

  @ViewChild('dropdownRef', {static: false, read: NgbDropdown}) dropdown: NgbDropdown;

  /**
   * Control du formulaire réactif pour la valeur voulue
   */
  @Input() form: FormGroup;
  /**
   * Label à afficher pour le control correspondant
   */
  @Input() label: string;
  /**
   * Index pour éviter des duplications d'id/for
   */
  @Input() formIndex: number;
  /**
   * Texte affiché dans l'input lorsqu'aucune valeur n'est sélectionnée
   */
  @Input() defaultText: string;
  /**
   * Désactive le formulaire si true
   * Optionnel, peut être laissé à vide pour activer le formulaire
   */
  @Input() disabled = false;
  /**
   * Taille de la colonne pour l'input
   * Champ optionnel, valeur par défaut : 6
   */
  @Input() inputColumns = 6;
  /**
   * Taille de la colonne pour le label
   * Champ optionnel, valeur par défaut : 4
   */
  @Input() labelColumns = 4;
  /**
   * Largeur de la colonne du label en pixel
   * Permet de définir une taille fixe en fonction du contenu
   * Champ optionnel, écrasera la valeur labelColumns
   */
  @Input() labelWidth: number;

  // Form pour le bouton select all
  formSelectAll: FormGroup;
  subscriptions: Subscription[] = [];
  // État du formulaire avant édition
  formState: any;
  // Contenu à afficher dans la select en fonction des choix
  contentToDisplay: string;
  // Permet de savoir si l'utilisateur à sauvegarder lorsque la dropdown se ferme
  hasSaved = false;

  constructor(private fb: FormBuilder, private listeDeroulanteService: ListeDeroulanteService) { }

  ngOnInit(): void {
    // Formulaire pour le select all
    this.formSelectAll = this.fb.group({
      selectAll: [false, null]
    });

    // Met à jour le texte en fonction des valeurs par défaut
    this.contentToDisplay = this.listeDeroulanteService.updateContentToDisplay(this.formSelectAll, this.form, false);

    // Met à jour les valeurs lorsque 'Tout sélectionner / Tout désélectionner' est coché
    this.subscriptions.push(this.formSelectAll.valueChanges.subscribe(() => {
      this.listeDeroulanteService.selectAll(this.formSelectAll, this.form, false);
    }));

    // Met à jour le texte en fonction des valeurs nouvelles valeurs
    this.subscriptions.push(this.form.valueChanges.subscribe(() => {
      this.contentToDisplay = this.listeDeroulanteService.updateContentToDisplay(this.formSelectAll, this.form, false);
    }));

    // Sauvegarde la valeur initiale du formulaire
    this.formState = this.form.getRawValue();
  }

  /**
   * Appelé lorsque la dropdown est ouverte/fermée
   */
  openChange(isOpened: boolean): void {
    // Si on ferme la dropdown et que l'utilisateur n'a pas sauvegardé
    if (!isOpened && !this.hasSaved) {
      // Remet le formulaire sans son état initial
      this.form.setValue(this.formState);
    } else {
      // Sinon remet la valeur du boolean à false pour la prochaine ouverture
      this.hasSaved = false;
    }
  }

  /**
   * Bouton valider de la dropdown
   */
   valider(): void {
    // Met à jour le boolean de sauvegarde permettant de savoir s'il faut restituer l'état du formulaire ou non à la fermeture
    this.hasSaved = true;
    // Sauvegarde le nouvel état
    this.formState = this.form.getRawValue();
    // Ferme la dropdown
    this.dropdown.close();
  }

  /**
   * Toggle la dropdown
   */
  toggleDropdown(): void {
    this.dropdown.toggle();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
