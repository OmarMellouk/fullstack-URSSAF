import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilArianeContainerComponent } from './container/fil-ariane-container.component';
import { FilArianeComponent } from './components/fil-ariane/fil-ariane.component';
import { FilArianeRoutingModule } from './fil-ariane-routing.module';

@NgModule({
  declarations: [
    FilArianeContainerComponent,
    FilArianeComponent
  ],
  imports: [
    CommonModule,
    FilArianeRoutingModule
  ],
  exports: [
    FilArianeComponent
  ]
})
export class FilArianeModule { }
