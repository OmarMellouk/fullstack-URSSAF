import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableauContainerComponent } from './container/tableau-container.component';

const routes: Routes = [
  {
    path: '',
    component: TableauContainerComponent,
    data: {
      pageTitle : 'Tableau'
    }
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableauRoutingModule { }
