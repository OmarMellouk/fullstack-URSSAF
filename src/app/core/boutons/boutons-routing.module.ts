import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoutonsContainerComponent } from './container/boutons-container.component';

const routes: Routes = [
  {
    path: '',
    component: BoutonsContainerComponent,
    data: {
      pageTitle : 'Boutons'
    }
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoutonsRoutingModule { }
