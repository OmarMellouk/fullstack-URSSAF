import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoubleListeComponent } from './components/double-liste/double-liste.component';
import { DoubleListeContainerComponent } from './container/double-liste-container.component';
import { DoubleListeRoutingModule } from './double-liste-routing.module';
import { DoubleListeLongueComponent } from './components/double-liste-longue/double-liste-longue.component';
import { DoubleListeModule as DoubleListeModuleLib } from '@acoss/double-liste-angular-intranet';

@NgModule({
  declarations: [
    DoubleListeContainerComponent,
    DoubleListeComponent,
    DoubleListeLongueComponent
  ],
  imports: [
    CommonModule,
    DoubleListeRoutingModule,
    DoubleListeModuleLib
  ]
})
export class DoubleListeModule { }
