import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoutonsRadioContainerComponent } from './container/boutons-radio-container.component';
import { BoutonsRadioComponent } from './components/boutons-radio/boutons-radio.component';
import { BoutonsRadioRoutingModule } from './boutons-radio-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BoutonsRadioContainerComponent,
    BoutonsRadioComponent
  ],
  imports: [
    CommonModule,
    BoutonsRadioRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    BoutonsRadioComponent
  ]
})
export class BoutonsRadioModule { }
