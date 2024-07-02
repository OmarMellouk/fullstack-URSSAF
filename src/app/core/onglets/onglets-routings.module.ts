import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OngletsContainerComponent } from './container/onglets-container.component';

const routes: Routes = [
  {
    path: '',
    component: OngletsContainerComponent,
    data: {
      pageTitle : 'Onglets'
    }
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    NgbModule
  ],
  exports: [RouterModule]
})
export class OngletsRoutingModule { }
