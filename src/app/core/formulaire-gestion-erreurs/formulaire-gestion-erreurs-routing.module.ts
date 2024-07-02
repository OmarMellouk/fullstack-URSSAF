import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireGestionErreursContainerComponent } from './container/formulaire-gestion-erreurs-container.component';

const routes: Routes = [
  {
    path: '',
    component: FormulaireGestionErreursContainerComponent,
    data: {
      pageTitle: 'Formulaire et gestion des erreurs',
    }
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormulaireGestionErreursRoutingModule { }
