import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterrupteurContainerComponent } from './container/interrupteur-container.component';

const routes: Routes = [
  {
    path: '',
    component: InterrupteurContainerComponent,
    data: {
      pageTitle : 'Interrupteurs'
    }
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterrupteurRoutingModule { }
