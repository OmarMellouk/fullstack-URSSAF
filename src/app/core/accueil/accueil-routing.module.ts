import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilContainerComponent } from './container/accueil-container.component';

const routes: Routes = [
  {
    path: '',
    component: AccueilContainerComponent,
    data: {
      pageTitle : 'Accueil'
    }
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccueilRoutingModule { }
