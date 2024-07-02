import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Arborescence } from '../../models/aborescence.models';

@Component({
  selector: 'app-arborescence',
  templateUrl: './arborescence.component.html'
})
export class ArborescenceComponent {
  /**
   * Arbre à afficher
   */
  @Input() tree: Arborescence[];
  /**
   * Affiche des checkboxes
   */
  @Input() useCheckboxes: boolean = true;

  /**
   * A chaque changement dans le cas d'utilisation des checkboxes, renvoie au parent l'arborescence mis à jour
   */
  @Output() changes: EventEmitter<Arborescence[]> = new EventEmitter<Arborescence[]>();

  formArray: FormArray;
  formGroup: FormGroup;

  /**
   * Envoie au parent l'arborescence mise à jour
   */
  output(): void {
    this.changes.emit(this.tree);
  }
}
