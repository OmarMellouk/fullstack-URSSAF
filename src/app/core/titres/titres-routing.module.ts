import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitresContainerComponent } from './container/titres-container.component';

const routes: Routes = [
  {
    path: '',
    component: TitresContainerComponent,
    data: {
      pageTitle : 'Titres'
    }
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TitresRoutingModule { }
