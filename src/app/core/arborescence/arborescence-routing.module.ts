import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArborescenceContainerComponent } from './container/arborescence-container/arborescence-container.component';

const routes: Routes = [
  {
    path: '',
    component: ArborescenceContainerComponent,
    data: {
      pageTitle : 'Arborescence'
    }
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArborescenceRoutingModule { }
