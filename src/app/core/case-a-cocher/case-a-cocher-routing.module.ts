import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseACocherContainerComponent } from './container/case-a-cocher-container.component';

const routes: Routes = [
  {
    path: '',
    component: CaseACocherContainerComponent,
    data: {
      pageTitle : 'Case à cocher'
    }
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaseACocherRoutingModule { }
