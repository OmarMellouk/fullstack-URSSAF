import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampDeSaisieDateContainerComponent } from './container/champ-de-saisie-date-container.component';

const routes: Routes = [
  {
    path: '',
    component: ChampDeSaisieDateContainerComponent,
    data: {
      pageTitle : 'Champ de saisie date'
    }
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChampDeSaisieDateRoutingModule { }
