import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Wizard } from '@app/fullstack-components/wizard/models/wizard.models';

@Component({
  selector: 'app-wizard-sample',
  templateUrl: './wizard.component.html'
})
export class WizardComponent implements OnInit {

  /**
   * Affiche tout le temps les icônes de navigation
   * Sinon, les icônes s'affichent automatiquement lorsque nécessaire
   */
  @Input() alwaysDisplayNavigation: boolean = false;

  wizard: Wizard[];
  active = 3;

  formIndividu: FormGroup;
  formEntreprise: FormGroup;
  formEtablissement: FormGroup;
  formMoyensDeContact: FormGroup;
  formAdresse: FormGroup;

  errorMessage = 'La saisie de ce champ est obligatoire';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.wizard = [
      {text: 'Identification de l\'individu', disableClick: true},
      {text: 'Individu', badge: 'badge-warning', badgeValue: 1},
      {text: 'Entreprise'},
      {text: 'Etablissement'}
    ];

    if (this.alwaysDisplayNavigation) {
      this.wizard.push({text: 'Moyens de contact'});
      this.wizard.push({text: 'Adresse'});
    }

    this.formIndividu = this.fb.group({
      nir: ['1510246102043', Validators.required],
      dateDeNaissance: [{year: 1990, month: 1, day: 1}, Validators.required],
      civilite: ['Monsieur', Validators.required],
      nom: ['Sauvage', Validators.required],
      prenom: ['Lucas', Validators.required],
    });

    this.formEntreprise = this.fb.group({
      siren: ['', Validators.required],
      denomination: ['', Validators.required],
      formeJuridique: ['', Validators.required],
      dateDebutActivite: ['', Validators.required],
      dateFinActivite: [''],
    });

    this.formEtablissement = this.fb.group({
      siret: ['', Validators.required],
      typeEtablissement: ['', Validators.required],
      dateDeCreation: ['', Validators.required],
      denomination: ['', Validators.required],
      nomCommercial: [''],
    });

    this.formMoyensDeContact = this.fb.group({
      adresseMail: ['', Validators.required],
      telephoneMobile: [''],
      telephoneFixe: [''],
    });

    this.formAdresse = this.fb.group({
      adresse: ['', Validators.required],
      codePostal: ['', Validators.required],
      ville: ['', Validators.required],
    });
  }

  /**
   * Statut du bouton suivant
   */
  enableNextButton(): boolean {
    if (this.active === 2) {
      return this.formIndividu.valid;
    } else if (this.active === 3) {
      return this.formEntreprise.valid;
    } else if (this.active === 4) {
      return this.formEtablissement.valid;
    } else if (this.active === 5) {
      return this.formMoyensDeContact.valid;
    } else if (this.active === 6) {
      return this.formMoyensDeContact.valid;
    }

    return true;
  }

  previousStep(): void {
    this.active--;
  }

  nextStep(): void {
    this.active++;
  }

  stepClicked(step: number): void {
    this.active = step;
  }

}
