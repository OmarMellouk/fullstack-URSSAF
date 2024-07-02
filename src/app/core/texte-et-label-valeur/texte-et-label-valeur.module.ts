import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TexteEtLabelValeurComponent } from './container/texte-et-label-valeur.component';
import { TexteComponent } from './components/texte/texte.component';
import { LabelValeurComponent } from './components/label-valeur/label-valeur.component';
import { TexteEtLabelValeurRoutingModule } from './texte-et-label-valeur-routing.module';
import { FullstackComponentsModule } from '@app/fullstack-components/fullstack-components.module';



@NgModule({
  declarations: [
    TexteEtLabelValeurComponent,
    TexteComponent,
    LabelValeurComponent
  ],
  imports: [
    CommonModule,
    TexteEtLabelValeurRoutingModule,
    FullstackComponentsModule
  ]
})
export class TexteEtLabelValeurModule { }
