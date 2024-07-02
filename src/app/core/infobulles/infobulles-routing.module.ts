import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfobullesComponent } from './container/infobulles.component';

const routes: Routes = [
  {
    path: '',
    component: InfobullesComponent,
    data: {
      pageTitle: 'Infobulles',
    }
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfobullesRoutingModule { }
