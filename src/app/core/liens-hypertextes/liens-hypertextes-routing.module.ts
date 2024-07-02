import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiensHypertextesContainerComponent } from './container/liens-hypertextes-container.component';

const routes: Routes = [
  {
    path: '',
    component: LiensHypertextesContainerComponent,
    data: {
      pageTitle : 'Liens hypertextes'
    }
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiensHypertextesRoutingsModule { }
