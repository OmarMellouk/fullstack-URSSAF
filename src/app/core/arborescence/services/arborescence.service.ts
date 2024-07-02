import { Injectable } from '@angular/core';
import { ARBORESCENCE } from '@app/bouchons-html/arborescence/arborescence';
import { Arborescence } from '@app/fullstack-components/arborescence/models/aborescence.models';

@Injectable({
  providedIn: 'root'
})
export class ArborescenceService {

  iconFolder: string = 'assets/icones-showcase/b_folder.svg';
  iconTree: string = 'assets/icones-showcase/b_archive.svg';

  getTree(): Arborescence[] {
    return ARBORESCENCE;
  }

  getComplexeTree(): Arborescence[] {
    return [
      {
        text: '1',
        value: false,
        expandChildByDefault: true,
        icon: this.iconFolder,
        children: [
          {
            text: '1-1',
            value: false,
            expandChildByDefault: true,
            icon: this.iconFolder,
            children: [
              {
                text: '1-1-1',
                value: false,
                icon: this.iconFolder,
                children: [
                  {
                    text: '1-1-1-1',
                    value: false,
                    icon: this.iconTree,
                  },
                  {
                    text: '1-1-1-2',
                    value: false,
                    icon: this.iconTree,
                  }
                ]
              },
              {
                text: '1-1-2',
                value: false,
                icon: this.iconTree,
              }
            ]
          },
          {
            text: '1-2',
            value: false,
            expandChildByDefault: true,
            icon: this.iconFolder,
            children: [
              {
                text: '1-2-1',
                value: false,
                icon: this.iconTree,
              },
              {
                text: '1-2-2',
                value: false,
                icon: this.iconFolder,
                children: [
                  {
                    text: '1-2-2-1',
                    value: false,
                    icon: this.iconTree,
                  },
                  {
                    text: '1-2-2-2',
                    value: false,
                    icon: this.iconFolder,
                    children: [
                      {
                        text: '1-2-2-2-1',
                        value: false,
                        icon: this.iconTree,
                      },
                      {
                        text: '1-2-2-2-2',
                        value: false,
                        icon: this.iconTree,
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            text: '1-3',
            value: false,
            icon: this.iconFolder
          }
        ]
      }
    ];
  }
}
