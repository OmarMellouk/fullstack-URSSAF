import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPjdContainerComponent } from './detail-pjd/container/detail-pjd-container.component';
import { ListePjdContainerComponent } from './liste-pjd/container/liste-pjd-container.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'liste-pjd',
    pathMatch: 'prefix'
  },
  {
    path: '',
    data: {
      pageTitle: 'Synthèse du compte',
    },
    children: [
      {
        path: 'liste-pjd',
        component: ListePjdContainerComponent,
        data: {
          pageTitle: 'Liste des pièces justificatives de débit',
        },
      },
      {
        path: 'liste-pjd',
        data: {
          pageTitle: 'Liste des pièces justificatives de débit',
        },
        children: [
          {
            path: 'detail-pjd',
            component: DetailPjdContainerComponent,
            data: {
              pageTitle: 'Détail d\'une PJD',
            },
          },
        ]
      },
    ],
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class EcransRoutingModule { }
