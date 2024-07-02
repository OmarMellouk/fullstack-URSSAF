import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemonstrationRemContainerComponent } from './container/desmonstration-rem-container.component';

const routes: Routes = [
  {
    path: '',
    component: DemonstrationRemContainerComponent,
    data: {
      pageTitle: 'Démonstration REM',
    }
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemonstrationRemRoutingModule { }
