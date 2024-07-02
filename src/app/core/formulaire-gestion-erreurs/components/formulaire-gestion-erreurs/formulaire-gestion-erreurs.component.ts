import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotesService, ToastCategoryEnum } from '@app/fullstack-components/notes/services/notes.service';
import { TextFormat } from '@app/fullstack-components/utils/text-format/text-format.service';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { CheckErrorsService } from '../../services/check-errors.service';
import { ValidatorsService } from '../../services/validators.service';

@Component({
  selector: 'app-formulaire-gestion-erreurs',
  templateUrl: './formulaire-gestion-erreurs.component.html',
  styleUrls: ['./formulaire-gestion-erreurs.component.scss']
})
export class FormulaireGestionErreursComponent implements OnInit, OnDestroy {

  form: FormGroup;
  initialFormValues: any[] = [];

  labelNirWidth: number = 60;

  isEditing = false;
  hasStaticError = false;
  toastCategoryEnum: typeof ToastCategoryEnum = ToastCategoryEnum;
  TextFormat: typeof TextFormat = TextFormat;
  subscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
    private notesService: NotesService,
    private checkErrorsService: CheckErrorsService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nir: ['2780975403161', [this.validatorsService.customRequiredValidator(), this.validatorsService.customLengthValidator(13)]],

      sexe: ['Féminin', this.validatorsService.customRequiredValidator()],
      civilite: ['Madame', this.validatorsService.customRequiredValidator()],
      nomPatronymique: ['Rousseaux', [this.validatorsService.customRequiredValidator(), this.validatorsService.customCharOnlyValidator()]],
      prenomsPatronymiques: ['Nicole Charlotte Elisabeth', this.validatorsService.customCharOnlyValidator()],
      nomUsage: ['Ratieville-Tournier', this.validatorsService.customCharOnlyValidator()],
      prenomUsage: ['Nicole', this.validatorsService.customCharOnlyValidator()],
      pseudonyme: ['', this.validatorsService.customCharOnlyValidator()],

      dateDeNaissance : [{year: 1978, month: 9, day: 10}, [this.validatorsService.customRequiredValidator(),
        this.validatorsService.customBeforeDateValidator(new Date()).bind(this)]],
      paysDeNaissance: ['100 - France', null],
      communeDeNaissance: ['75100 - Paris', null],
      communeDeNaissanceEtranger: ['', null],

      nationalite : ['Française', null],
      numeroDeTitreDeSejour: ['', this.validatorsService.customNumberOnlyValidator()],
      typeDeTitreDeSejour: ['', null],
      dateDeFinValiditeDuTitreDeSejour: ['', null],
    });

    // Sauvegarde le formulaire d'origine
    this.initialFormValues = this.form.getRawValue();

    // Vérifie les erreurs ajouté à la sauvegarde
    this.subscription = this.form.valueChanges.pipe(debounceTime(300)).subscribe(() => {
      this.checkErrorsService.checkErrorsOnUpdate(this.form);
    });
  }

  /**
   * Autorise uniquement des nombres à la saisie
   */
  allowOnlyNumber(event): boolean {
    return this.validatorsService.allowOnlyNumber(event);
  }

  /**
   * Remet le formulaire dans son état d'origine
   */
  resetForm(): void {
    for (const key in this.initialFormValues) {
      this.form.get(key).setValue(this.initialFormValues[key]);
    }
  }
  
  /**
   * Toggle le mode édition
   */
  toggleEdition(): void {
    this.isEditing = !this.isEditing;
  }

  /**
   * Sort du mode édition et annule toutes les saisies
   */
  cancel(): void {
    this.resetForm();
    this.notesService.removeAllStatic();
    this.toggleEdition();
  }

  /**
   * Sort du mode édition si il n'y a pas d'erreurs
   */
  save(): void {
    const hadErrors = this.checkErrorsService.checkErrorsOnSave(this.form);
    this.hasStaticError = hadErrors;
    this.isEditing = hadErrors;
  }

  ngOnDestroy(): void {
    this.notesService.removeAllStatic();
    this.subscription.unsubscribe();
  }

}
