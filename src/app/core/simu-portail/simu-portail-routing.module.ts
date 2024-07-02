import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunicationSPAComponent } from './communication-spa/communication-spa.component';
import { OngletsComponent } from './onglets/onglets.component';
import { AuthImplicitGuard } from '@acoss/prisme-angular-intranet';

const simuPortailRoutes: Routes = [

  {
    path: '',
    component: OngletsComponent,
    data: {
      pageTitle: 'Menu SimuPortail'
    },
    children: [
      { path: 'guarded', component: CommunicationSPAComponent, canActivate: [AuthImplicitGuard] },
    ]
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forChild(simuPortailRoutes)
  ]
})
export class SimuPortailRoutingModule { }
