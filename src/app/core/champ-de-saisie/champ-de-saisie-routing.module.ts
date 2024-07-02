import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampDeSaisieContainerComponent } from './container/champ-de-saisie-container.component';

const routes: Routes = [
  {
    path: '',
    component: ChampDeSaisieContainerComponent,
    data: {
      pageTitle : 'Champ de saisie'
    }
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChampDeSaisieRoutingModule { }
