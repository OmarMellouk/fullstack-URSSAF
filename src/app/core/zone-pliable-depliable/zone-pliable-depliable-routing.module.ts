import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZonePliableDepliableComponentContainerComponent } from './container/zone-pliable-depliable-container.component';

const routes: Routes = [
  {
    path: '',
    component: ZonePliableDepliableComponentContainerComponent,
    data: {
      pageTitle : 'Zone pliable/dépliable'
    }
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZonePliableDepliableRoutingModule { }
