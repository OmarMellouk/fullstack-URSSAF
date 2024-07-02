import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZoneInformationContainerComponent } from './container/zone-information-container/zone-information-container.component';

const routes: Routes = [
  {
    path: '',
    component: ZoneInformationContainerComponent,
    data: {
      pageTitle : 'Zone d\'information'
    }
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZoneInformationRoutingModule { }
