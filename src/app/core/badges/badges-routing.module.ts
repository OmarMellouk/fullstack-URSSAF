import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadgesContainerComponent } from './container/badges-container.component';

const routes: Routes = [
  {
    path: '',
    component: BadgesContainerComponent,
    data: {
      pageTitle : 'Badges'
    }
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BadgesRoutingModule { }
