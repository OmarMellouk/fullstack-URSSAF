import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoubleListeContainerComponent } from './container/double-liste-container.component';

const routes: Routes = [
  {
    path: '',
    component: DoubleListeContainerComponent,
    data: {
      pageTitle : 'Double liste'
    }
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoubleListeRoutingModule { }
