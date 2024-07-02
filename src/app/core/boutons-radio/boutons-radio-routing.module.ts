import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoutonsRadioContainerComponent } from './container/boutons-radio-container.component';

const routes: Routes = [
  {
    path: '',
    component: BoutonsRadioContainerComponent,
    data: {
      pageTitle : 'Boutons radio'
    }
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoutonsRadioRoutingModule { }
