import { Component, OnInit } from '@angular/core';
import { Arborescence } from '@app/fullstack-components/arborescence/models/aborescence.models';
import { ArborescenceService } from '../../services/arborescence.service';

@Component({
  selector: 'app-arborescence-sample',
  templateUrl: './arborescence.component.html'
})
export class ArborescenceComponent implements OnInit {

  tree: Arborescence[];

  constructor(private arborescenceService: ArborescenceService) { }

  ngOnInit(): void {
    this.tree = this.arborescenceService.getTree();
  }

  /**
   * Arborescence mise à jour à chaque changement de checkbox
   */
  changes(_updatedTree: Arborescence[]): void {
    // Récupérez les mises à jour ici
  }
}
