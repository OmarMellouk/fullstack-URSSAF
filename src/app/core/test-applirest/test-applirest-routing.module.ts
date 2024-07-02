import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrepriseFormComponent } from './domain-components/entreprise/entreprise-form/entreprise-form.component';
import { EntreprisesListeComponent } from './domain-components/entreprise/entreprises-liste/entreprises-liste.component';
import { TestApplirestComponent } from './test-applirest.component';


const testApplirestRoutes: Routes = [
  {
    path: '',
    component: TestApplirestComponent,
    data: {
      pageTitle : 'Application blanche'
    },
    children: [
      {
        path: '',
        component: EntreprisesListeComponent,
        data: {
          pageTitle : 'Liste des entreprises'
        }
      },
      {
        path: 'add-entreprise',
        component: EntrepriseFormComponent,
        data: {
          pageTitle: 'Ajouter une entreprise'
        }
      },
      {
        path: 'modify-entreprise/:id',
        component: EntrepriseFormComponent,
        data: {
          pageTitle: 'Modifier une entreprise'
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(testApplirestRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TestApplirestRoutingModule { }
