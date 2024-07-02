import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IconesContainerComponent } from './container/icones-container.component';

const routes: Routes = [
  {
    path: '',
    component: IconesContainerComponent,
    data: {
      pageTitle: 'Icônes',
    }
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconesRoutingModule { }
