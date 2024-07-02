import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MireAttenteContainerComponent } from './container/mire-attente-container.component';
import { MireAttenteRoutingModule } from './mire-attente-routing.module';
import { FullstackComponentsModule } from '@app/fullstack-components/fullstack-components.module';



@NgModule({
  declarations: [
    MireAttenteContainerComponent,
  ],
  imports: [
    CommonModule,
    MireAttenteRoutingModule,
    FullstackComponentsModule
  ]
})
export class MireAttenteModule { }
