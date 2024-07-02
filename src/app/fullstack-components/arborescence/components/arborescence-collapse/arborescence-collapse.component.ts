import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Arborescence, ArborescenceOutputEvent } from '../../models/aborescence.models';

@Component({
  selector: 'app-arborescence-collapse',
  templateUrl: './arborescence-collapse.component.html'
})
export class ArborescenceCollapseComponent implements OnInit {
  /**
   * Composant intermédiaire permettant de gérer correctement le collapsing
   */

  /**
   * Arbre à afficher et ses enfants
   */
  @Input() tree: Arborescence[];
  /**
   * Index des parents au format x-x-x, x étant une valeur numérique
   */
  @Input() parentsIndexes: string;
  /**
   * Index actuellement affiché
   */
  @Input() index: number;
  /**
   * Formulaire affiché
   */
  @Input() formGroup: FormGroup;
  /**
   * Affiche des checkboxes
   */
  @Input() useCheckboxes: boolean;

  /**
   * Output pour envoyer un événement aux parents
   */
  @Output() output: EventEmitter<ArborescenceOutputEvent> = new EventEmitter<ArborescenceOutputEvent>();

  isCollapsed: boolean = false;

  ngOnInit(): void {
    this.isCollapsed = !this.tree[this.index].expandChildByDefault;
  }

  /**
   * Transmet simplement l'événement au parent
   */
  outputFn(event: ArborescenceOutputEvent): void {
    this.output.emit(event);
  }
}
