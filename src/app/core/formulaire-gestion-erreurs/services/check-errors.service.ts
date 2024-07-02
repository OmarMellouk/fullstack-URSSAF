import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { NotesService, ToastCategoryEnum } from '@app/fullstack-components/notes/services/notes.service';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class CheckErrorsService {

  constructor(
    private notesService: NotesService
  ) { }

  /**
   * Vérifie à la sauvegarde la cohérence des données du formulaire
   * Passe les champs du formulaire en erreur si besoin'
   * Et affiche une note d'erreur correspondante
   *
   * Retourne s'il y a une erreur
   */
  checkErrorsOnSave(form: FormGroup): boolean {
    const nir: string = form.getRawValue().nir;
    const nirCivilite: string = nir.charAt(0);
    const nirAnneDeNaissance: string = nir.charAt(1) + nir.charAt(2);
    const nirMoisDeNaissance: string = nir.charAt(3) + nir.charAt(4);
    const dateDeNaissance: NgbDate = form.getRawValue().dateDeNaissance;
    const civilite: string = form.getRawValue().civilite;
    const sexe: string = form.getRawValue().sexe;
    const messages: string[] = [];

    // Supprime toutes les notes d'erreurs
    this.notesService.removeAllStatic();
    this.resetFormErrors(form);

    // Le premier chiffre du NIR correspond à la civilité (1 pour homme ,2 pour femme)
    if ((nirCivilite === '1' && civilite !== 'Monsieur') || (nirCivilite === '2' && civilite !== 'Madame')) {
      const messageCivilite = 'Le NIR et la civilité doivent correspondre.';

      this.setErrors(form.get('nir'), messageCivilite, 1);
      this.setErrors(form.get('civilite'), messageCivilite, 1);

      messages.push(messageCivilite);
    }

    // La civilité et le sexe doivent correspondre
    if (civilite === 'Monsieur' && sexe !== 'Masculin' || civilite === 'Madame' && sexe !== 'Féminin') {
      const messageSexe = 'Le sexe et la civilité doivent correspondre.';

      this.setErrors(form.get('sexe'), messageSexe, 2);
      this.setErrors(form.get('civilite'), messageSexe, 2);

      messages.push(messageSexe);
    }

    // Le 2ème et 3ème chiffres correspondent à l'année de naissance
    if (nirAnneDeNaissance !== dateDeNaissance.year.toString().slice(-2)) {
      const messageAnneeNaissance = 'Le NIR et l\'année de naissance doivent correspondre.';

      this.setErrors(form.get('nir'), messageAnneeNaissance, 3);
      this.setErrors(form.get('dateDeNaissance'), messageAnneeNaissance, 3);

      messages.push(messageAnneeNaissance);
    }

    // Le 4ème et 5ème chiffres correspondent au mois de naissance
    if (Number(nirMoisDeNaissance) !== dateDeNaissance.month) {
      const messageMoisNaissance = 'Le NIR et le mois de naissance doivent correspondre.';

      this.setErrors(form.get('nir'), messageMoisNaissance, 4);
      this.setErrors(form.get('dateDeNaissance'), messageMoisNaissance, 4);

      messages.push(messageMoisNaissance);
    }

    // Affiche une note d'erreur si besoin
    if (messages.length > 0) {
      const messageMultipleErrors = 'Plusieurs champs sont en erreur, veuillez survoler ' +
        'l\'icône d\'erreur des champs concernés pour plus de détails.';
      const message = messages.length > 1 ? messageMultipleErrors : messages[0];
      this.notesService.showStatic({
        title: message,
        classname: 'note-erreur',
        hideClose: true,
        category: ToastCategoryEnum.ERROR
      });
    }

    return messages.length > 0;
  }

  /**
   * Ajoute l'erreur dans le formulaire
   */
  setErrors(formControl: AbstractControl, message: string, id: number): void {
    // Si il y a déjà une erreur, ajoute la nouvelle à la suite
    if (formControl.errors) {
      const errors =[{message: message, id: id}].concat(formControl.errors as any);
      formControl.setErrors(errors);
    } else {
      // Sinon ajoute simplement l'erreur
      formControl.setErrors([{message: message, id: id}]);
    }

    // Marque le formulaire comme touché afin d'être sur que les erreurs s'affichent bien
    formControl.markAsTouched();
  }

  /**
   * Supprime les messages d'erreur du formulaire
   */
  resetFormErrors(form: FormGroup): void {
    for (const key in form.controls) {
      form.get(key).setErrors(null);
    }
  }

  /**
   * Vérifie les erreurs à la sauvegarde après une mise à jour
   * Dans cette exemple, les erreurs avec id fonctionnent par deux maximum
   * Donc si une erreur avec un id se retrouve seule, cela veut dire que le champ en erreur lié vient d'être modifié
   * Il faut donc supprimer l'erreur lié restante car elle est potentiellement corrigée
   */
  checkErrorsOnUpdate(form: FormGroup): void {
    const map = new Map();

    // Parcours le formulaire
    for (const key in form.controls) {
      // Récupère les erreurs
      const errors = form.get(key).errors;
      // Vérifie qu'il s'agit d'erreurs à la sauvegarde
      if (errors && Array.isArray(errors)) {
        // Parcours les erreurs et les ajoute dans une map en fonction de leur id
        errors.forEach(error => {
          // Clef déjà existante
          if (map.has(error.id)) {
            const keys: string[] = map.get(error.id);
            keys.push(key);
            map.set(error.id, keys);
          } else {
            // Nouvelle clef
            map.set(error.id, [key]);
          }
        });
      }
    }

    // Vérifie dans la map si une erreur se retrouve seule
    map.forEach((formKeys: string[], key: string) => {
      if (formKeys.length === 1) {
        // si c'est le cas, supprime le message correspondant
        const errorsToKeep = form.get(formKeys[0]).errors.filter(error => error.id !== key);
        form.get(formKeys[0]).setErrors(errorsToKeep.length > 0 ? errorsToKeep : null);
      }
    });
  }
}
