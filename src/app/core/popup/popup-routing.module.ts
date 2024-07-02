import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopupContainerComponent } from './container/popup-container.component';

const routes: Routes = [
  {
    path: '',
    component: PopupContainerComponent,
    data: {
      pageTitle : 'Popup'
    }
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PopupRoutingModule { }
