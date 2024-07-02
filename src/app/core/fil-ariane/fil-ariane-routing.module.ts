import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilArianeContainerComponent } from './container/fil-ariane-container.component';

const routes: Routes = [
  {
    path: '',
    component: FilArianeContainerComponent,
    data: {
      pageTitle : 'Fil d\'Ariane'
    }
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilArianeRoutingModule { }
