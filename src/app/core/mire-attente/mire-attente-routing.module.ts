import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MireAttenteContainerComponent } from './container/mire-attente-container.component';

const routes: Routes = [
  {
    path: '',
    component: MireAttenteContainerComponent,
    data: {
      pageTitle: 'Mire d\'attente',
    }
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MireAttenteRoutingModule { }
