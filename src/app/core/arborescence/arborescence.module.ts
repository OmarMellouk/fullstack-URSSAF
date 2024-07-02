import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArborescenceContainerComponent } from './container/arborescence-container/arborescence-container.component';
import { ArborescenceComponent } from './components/arborescence/arborescence.component';
import { ArborescenceRoutingModule } from './arborescence-routing.module';
import { FullstackComponentsModule } from '@app/fullstack-components/fullstack-components.module';
import { ArborescenceComplexeComponent } from './components/arborescence-complexe/arborescence-complexe.component';
import { ArborescenceSimpleComponent } from './components/arborescence-simple/arborescence-simple.component';

@NgModule({
  declarations: [
    ArborescenceContainerComponent,
    ArborescenceComponent,
    ArborescenceComplexeComponent,
    ArborescenceSimpleComponent,
  ],
  imports: [
    CommonModule,
    ArborescenceRoutingModule,
    FullstackComponentsModule,
  ],
  exports: [
    ArborescenceComplexeComponent
  ]
})
export class ArborescenceModule { }
