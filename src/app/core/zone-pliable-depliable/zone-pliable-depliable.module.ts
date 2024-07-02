import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZonePliableDepliableRoutingModule } from './zone-pliable-depliable-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FullstackComponentsModule } from '@app/fullstack-components/fullstack-components.module';
import { ZonePliableDepliableComponentContainerComponent } from './container/zone-pliable-depliable-container.component';
import { ZonePliableDepliableComponent } from './components/zone-pliable-depliable.component';

@NgModule({
  declarations: [
    ZonePliableDepliableComponent,
    ZonePliableDepliableComponentContainerComponent
  ],
  imports: [
    CommonModule,
    ZonePliableDepliableRoutingModule,
    NgbModule,
    FullstackComponentsModule
  ],
  exports: [
    ZonePliableDepliableComponent
  ]
})
export class ZonePliableDepliableModule { }
