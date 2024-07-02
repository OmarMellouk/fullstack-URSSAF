import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TexteEtLabelValeurComponent } from './container/texte-et-label-valeur.component';

const routes: Routes = [
  {
    path: '',
    component: TexteEtLabelValeurComponent,
    data: {
      pageTitle: 'Texte et label/valeur',
    }
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TexteEtLabelValeurRoutingModule { }
