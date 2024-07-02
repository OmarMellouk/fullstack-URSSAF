import { Component, OnInit } from '@angular/core';
import { Arborescence } from '@app/fullstack-components/arborescence/models/aborescence.models';
import { ArborescenceService } from '../../services/arborescence.service';

@Component({
  selector: 'app-arborescence-simple',
  templateUrl: './arborescence-simple.component.html'
})
export class ArborescenceSimpleComponent implements OnInit {

  tree: Arborescence[];

  constructor(private arborescenceService: ArborescenceService) { }

  ngOnInit(): void {
    this.tree = this.arborescenceService.getTree();

    // Supprime les icônes
    this.tree = this.tree.map((treeElem) => {
      const newChildren = treeElem.children.map(subTreeElem => {
        return {...subTreeElem, icon: null};
      });

      return {...treeElem, children: newChildren, icon: null};
    })
  }

}
