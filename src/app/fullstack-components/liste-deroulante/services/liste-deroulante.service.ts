import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ListeDeroulanteService {

  /**
   * Met à jour les valeurs lorsque 'Tout sélectionner / Tout désélectionner' est coché
   */
  selectAll(formSelectAll: FormGroup, form: FormGroup, hasSubLevel: boolean): void {
    const value: boolean = formSelectAll.value.selectAll;

    // Dans le cas où il n'y a pas plusieurs niveaux dans le formulaire
    if (!hasSubLevel) {
      this.updateForm(form, value);
    } else {
       // cas où il y a plusieurs niveaux dans le formulaire
      Object.keys(form.value).forEach((key: string) => {
        this.updateForm(form.get(key) as FormGroup, value);
      });
    }
  }

  /**
   * Met à jour le formulaire avec la valeur passée en paramètre
   */
  private updateForm(form: FormGroup, value: boolean): void {
    Object.keys(form.value).forEach((key: string) => {
      // Uniquement si la valeur n'est pas déjà à jour
      if ((value && !form.get(key).value) || (!value && form.get(key).value)) {
        form.get(key).setValue(value);
      }
    });
  }

  /**
   * Met à jour la checkbox selectAll lorsque des valeurs sont sélectionnées
   */
  shouldSelectAll(formSelectAll: FormGroup, form: FormGroup): void {
    const unselectedKeys: string[] = Object.keys(form.value).filter((key: string) => {
      return form.get(key).value === false;
    });

    // emitEvent à false pour éviter pour boucle infinie de mise à jour entre les deux formulaires
    if (unselectedKeys.length === 0) {
      // Cas tout sélectionné
      formSelectAll.patchValue({selectAll: true}, {emitEvent: false, onlySelf: true});
    } else if (unselectedKeys.length === Object.keys(form.controls).length) {
      // Cas aucun sélectionné
      formSelectAll.patchValue({selectAll: false}, {emitEvent: false, onlySelf: true});
    } else {
      // Cas certain sélectionné (affiche un carré bleu dans la checkbox car valeur mise à null)
      formSelectAll.patchValue({selectAll: null}, {emitEvent: false, onlySelf: true});
    }
  }

  /**
   * Met à jour le texte en fonction des valeurs actuelles du formulaire
   * Et met à jour la checkbox selectAll
   */
  updateContentToDisplay(formSelectAll: FormGroup, form: FormGroup, hasSubLevel: boolean): string {
    // Nombre d'éléments sélectionnables
    let maxElements = 0;
    let selected: string[] = [];

    // Dans le cas où il n'y a pas plusieurs niveaux dans le formulaire
    if (!hasSubLevel) {
      // Éléments sélectionnés
      selected = Object.keys(form.value).filter((key => {
        // Compte les éléments
        maxElements++;
        return form.value[key] === true;
      }));
    } else {
      // cas où il y a plusieurs niveaux dans le formulaire

      // Itère sur le premier niveau
      Object.keys(form.value).forEach((key => {
        let selectedElements: string[] = [];

        // Itère sur le deuxième niveau et récupère les éléments
        selectedElements = selectedElements.concat(Object.keys(form.value[key]).filter((key2 => {
          // Compte les éléments
          maxElements++;
          return form.value[key][key2] === true;
        })));

        // Éléments sélectionnés
        selected = selected.concat(selectedElements);
      }));
    }

    // Mise à jour de la checkbox selectAll
    if (selected.length === maxElements) {
      formSelectAll.patchValue({selectAll: true}, {emitEvent: false, onlySelf: true});
    } else {
      formSelectAll.patchValue({selectAll: false}, {emitEvent: false, onlySelf: true});
    }

    // Renvoie le texte à afficher
    if (selected.length === maxElements) {
      return 'Tous';
    } else if (selected.length === 1) {
      return selected[0];
    } else if (selected.length > 1) {
      return selected.length + ' sélectionnés';
    } else {
      return null;
    }
  }
}
