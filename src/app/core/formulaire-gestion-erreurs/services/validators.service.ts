import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

export const datePipe = new DatePipe('fr');

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  /**
   * Retourne un message d'erreur si le champs est laissé vide
   */
  customRequiredValidator(): ValidatorFn {
    return function validate(control: AbstractControl): ValidationErrors {
      return !!control.value
      ? null
      : {
          message: 'La valeur ne peut pas être nulle'
        };
    };
  }

  /**
   * Retourne un message d'erreur si la longueur n'est pas respectée
   */
  customLengthValidator(length: number): ValidatorFn {
    return function validate(control: AbstractControl): ValidationErrors {
      return control.value.length === length || control.value === ''
      ? null
      : {
          message: `La valeur doit contenir ${length} caractères`
        };
    };
  }

  /**
   * Retourne un message d'erreur si la valeur contient autre chose que des chiffres
   */
  customNumberOnlyValidator(): ValidatorFn {
    return function validate(control: AbstractControl): ValidationErrors {
      return /^\d+$/.test(control.value) || control.value === ''
      ? null
      : {
        message: `La valeur doit uniquement contenir des chiffres`
      };
    };
  }

  /**
   * Retourne un message d'erreur si l'utilisateur rentre des caractères spéciaux
   */
  customCharOnlyValidator(): ValidatorFn {
    return function validate(control: AbstractControl): ValidationErrors {
      return !/[^A-zÀ-ú\s\-]/.test(control.value)
      ? null
      : {
        message: `La valeur ne doit pas contenir de caractères spéciaux`
      };
    };
  }

  /**
   * Retourne un message d'erreur si la date n'est pas antérieure
   */
  customBeforeDateValidator(date: Date): ValidatorFn {
    return function validate(control: AbstractControl): ValidationErrors {
      if (!!control.value) {
        const controlNgbDate: NgbDate = new NgbDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
        const ngbDate: NgbDate = new NgbDate(control.value.year, control.value.month, control.value.day);
        const dateToDisplay = datePipe.transform(date, 'dd/MM/yyyy');

        return ngbDate.before(controlNgbDate)
        ? null
        : {
          message: `La date doit être antérieur à ${dateToDisplay}`
        };
      }

      return null;
    };
  }

  /**
   * Autorise uniquement des nombres à la saisie
   */
  allowOnlyNumber(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }

}
