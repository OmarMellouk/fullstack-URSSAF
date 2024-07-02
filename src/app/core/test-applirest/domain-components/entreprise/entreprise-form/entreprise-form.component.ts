import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EntrepriseType, ErreurType } from '@app/apis/applirest/api-v3/models';
import { EntrepriseService } from '@app/apis/applirest/api-v3/services';


// Validator custom pour vérifié l'absence de / et de \, si il y en a, une erreur est retourné
export const slashValidator: ValidatorFn = (control) => {
  if (control.value.indexOf('/') === -1 && control.value.indexOf('\\') === -1) {
    return null;
  } else {
    return {
      'slashValidator': {
        reason: 'présence de slash, backslash',
        value: control.value
      }
    };
  }
};

@Component({
  selector: 'app-entreprise-form',
  templateUrl: './entreprise-form.component.html',
  styleUrls: ['./entreprise-form.component.scss']
})
export class EntrepriseFormComponent implements OnInit {

  entrepriseToEdit: EntrepriseType;
  public edition = false;

  entrepriseForm: FormGroup = new FormGroup({
    denomination: new FormControl(''),
    siren: new FormControl(''),
    activite: new FormControl(''),
    naf: new FormControl(''),
    currentDate: new FormControl('')
  });


  errors: ErreurType[];
  labelWidth = 138;

  public entrepriseObserver = {
    next: () => this.goBack(),
    error: error => this.handleError(error)
  };

  constructor(private fb: FormBuilder,
              private entrepriseService: EntrepriseService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit() {

    this.errors = [];
    const id: number = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.edition = true;
      const params = {
        idEntreprise: id,
        simple: true
      };
      this.entrepriseService.recupererEntreprise$Json(params).subscribe(
        result => {
          this.entrepriseToEdit = result;

          const date = new Date(this.entrepriseToEdit.dateCreation);
          const year = date.getFullYear();
          const month = date.getMonth();
          const day = date.getDate();

          this.entrepriseForm = this.fb.group({
            denomination: [this.entrepriseToEdit.denomination, [Validators.required, slashValidator]],
            siren: [this.entrepriseToEdit.siren, [Validators.required, Validators.minLength(9), Validators.pattern((/^\d+$/))]],
            activite: [this.entrepriseToEdit.activite, [Validators.required, slashValidator]],
            naf: [this.entrepriseToEdit.naf, [Validators.required, Validators.minLength(3), Validators.maxLength(4), Validators.pattern((/^\d+$/))]],
            currentDate: [
              {year: Number(year), month: Number(month), day: Number(day), disabled: false},
              [Validators.required]
            ]
          });
        },
        () => {
          console.error('impossible de trouver l\'entreprise id : ' + id);
        });
    } else {
      this.entrepriseForm = this.fb.group({
          denomination: ['', [Validators.required, slashValidator]],
          siren: ['', [Validators.required, Validators.minLength(9), Validators.pattern((/^\d+$/))]],
          activite: ['', [Validators.required, slashValidator]],
          naf: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(4), Validators.pattern((/^\d+$/))]],
          currentDate: ['', [Validators.required]]
      });
    }
  }

  onSubmit() {
    this.errors = [];
    if (this.edition) {
      this.modifierEntreprise();
    } else {
      this.creerEntreprise();
    }
  }

  public goBack(): void {
    this.location.back();
  }

  public modifierEntreprise(): void {
    this.entrepriseToEdit.denomination = this.entrepriseForm.value.denomination;
    this.entrepriseToEdit.siren = this.entrepriseForm.value.siren;
    this.entrepriseToEdit.activite = this.entrepriseForm.value.activite;
    this.entrepriseToEdit.naf = this.entrepriseForm.value.naf;
    const params = {
      idEntreprise: this.entrepriseToEdit.id,
      body: this.entrepriseToEdit
    };
    this.entrepriseService.modifierEntreprise(params)
      .subscribe(this.entrepriseObserver);
  }

  public creerEntreprise(): void {
    // Recuperation du jour, mois et année
    const day = this.entrepriseForm.value.currentDate.day;
    const month = this.entrepriseForm.value.currentDate.month;
    const year = this.entrepriseForm.value.currentDate.year;
    // Concatenation de tout cela dans le bon format
    this.entrepriseForm.value.currentDate = year + '-' + month + '-' + day;

    const entreprise: EntrepriseType = {...this.entrepriseForm.value};
    // Insertion dans entreprise les valeurs
    entreprise.dateFondation = this.entrepriseForm.value.currentDate;
    entreprise.dateFondation = new Date(entreprise.dateFondation).toISOString();
    this.entrepriseService.creerEntreprise({ body: entreprise })
      .subscribe(this.entrepriseObserver);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);

      if (error.error instanceof Array) {
        const errors: any[] = error.error;
        errors.forEach(element => {
          if (element.code && element.message && element.description) {
            const erreurType: ErreurType = {...element};
            this.errors.push(erreurType);
          }
        });
      }
    }
  }
}
