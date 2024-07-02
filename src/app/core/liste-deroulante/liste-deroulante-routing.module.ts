import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeDeroulanteContainerComponent } from './container/liste-deroulante-container.component';

const routes: Routes = [
  {
    path: '',
    component: ListeDeroulanteContainerComponent,
    data: {
      pageTitle : 'Liste déroulante'
    }
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListeDeroulanteRoutingModule { }
