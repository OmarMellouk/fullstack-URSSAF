import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WizardContainerComponent } from './container/wizard-container.component';

const routes: Routes = [
  {
    path: '',
    component: WizardContainerComponent,
    data: {
      pageTitle : 'Wizard'
    }
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WizardRoutingModule { }
