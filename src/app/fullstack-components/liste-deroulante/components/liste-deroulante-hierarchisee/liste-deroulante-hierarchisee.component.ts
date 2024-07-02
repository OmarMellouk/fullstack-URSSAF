import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { ListeDeroulanteService } from '../../services/liste-deroulante.service';

@Component({
  selector: 'app-liste-deroulante-hierarchisee',
  templateUrl: './liste-deroulante-hierarchisee.component.html'
})
export class ListeDeroulanteHierarchiseeComponent implements OnInit, OnDestroy {

  @ViewChild('dropdownRef', {static: false, read: NgbDropdown}) dropdown: NgbDropdown;

  /**
   * Group du formulaire réactif contenant l'ensemble des valeurs
   * Format :
   * group({
   *   'Groupe 1': group({
   *     'Option 1':
   *   })
   * })
   */
  @Input() form: FormGroup;
  /**
   * Label à afficher pour le control correspondant
   */
  @Input() label: string;
  /**
   * Texte affiché dans l'input lorsqu'aucune valeur n'est sélectionnée
   */
  @Input() defaultText: string;
  /**
   * Index pour éviter des duplications d'id/for
   */
  @Input() formIndex: number;
  /**
   * Désactive le formulaire si true
   * Optionnel, peut être laissé à vide pour activer le formulaire
   */
  @Input() disabled = false;
  /**
   * Taille de la colonne pour le label
   * Champ optionnel, valeur par défaut : 4
   */
  @Input() labelColumns = 4;
  /**
   * Taille de la colonne pour l'input
   * Champ optionnel, valeur par défaut : 6
   */
  @Input() inputColumns = 6;
  /**
   * Largeur de la colonne du label en pixel
   * Permet de définir une taille fixe en fonction du contenu
   * Champ optionnel, écrasera la valeur labelColumns
   */
  @Input() labelWidth: number;

  // Form pour le bouton select all
  formSelectAll: FormGroup;
  subscriptions: Subscription[] = [];
  // Contenu à afficher dans la select en fonction des choix
  contentToDisplay: string;
  // État du formulaire avant édition
  formState: any;
  // Permet de savoir si l'utilisateur à sauvegarder lorsque la dropdown se ferme
  hasSaved = false;

  constructor(private fb: FormBuilder, private listeDeroulanteService: ListeDeroulanteService) { }

  ngOnInit(): void {
    // Formulaire pour le select all
    this.formSelectAll = this.fb.group({
      selectAll: [false, null]
    });

    // Met à jour le texte en fonction des valeurs par défaut
    this.contentToDisplay = this.listeDeroulanteService.updateContentToDisplay(this.formSelectAll, this.form, true);

    // Met à jour les valeurs lorsque 'Tout sélectionner / Tout désélectionner' est coché
    this.subscriptions.push(this.formSelectAll.valueChanges.subscribe(() => {
      this.listeDeroulanteService.selectAll(this.formSelectAll, this.form, true);
    }));

    // Met à jour le texte en fonction des valeurs nouvelles valeurs
    this.subscriptions.push(this.form.valueChanges.subscribe(() => {
      this.contentToDisplay = this.listeDeroulanteService.updateContentToDisplay(this.formSelectAll, this.form, true);
    }));

    // Sauvegarde la valeur initiale du formulaire
    this.formState = this.form.getRawValue();
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
   * Toggle la dropdown
   */
  toggleDropdown(): void {
    this.dropdown.toggle();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
