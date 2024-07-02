import { Component, OnInit } from '@angular/core';
import { Arborescence } from '@app/fullstack-components/arborescence/models/aborescence.models';
import { ArborescenceService } from '../../services/arborescence.service';

@Component({
  selector: 'app-arborescence-complexe',
  templateUrl: './arborescence-complexe.component.html'
})
export class ArborescenceComplexeComponent implements OnInit {

  tree: Arborescence[];

  constructor(private arborescenceService: ArborescenceService) { }

  ngOnInit(): void {
    this.tree = this.arborescenceService.getComplexeTree();
  }
}
