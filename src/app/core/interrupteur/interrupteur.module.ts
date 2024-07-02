import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterrupteurContainerComponent } from './container/interrupteur-container.component';
import { InterrupteurComponent } from './components/interrupteur/interrupteur.component';
import { InterrupteurLitteralComponent } from './components/interrupteur-litteral/interrupteur-litteral.component';
import { InterrupteurRoutingModule } from './interrupteur-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullstackComponentsModule } from '@app/fullstack-components/fullstack-components.module';



@NgModule({
  declarations: [
    InterrupteurContainerComponent,
    InterrupteurComponent,
    InterrupteurLitteralComponent
  ],
  imports: [
    CommonModule,
    InterrupteurRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FullstackComponentsModule
  ]
})
export class InterrupteurModule { }
