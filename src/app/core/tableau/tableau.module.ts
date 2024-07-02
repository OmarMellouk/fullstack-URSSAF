import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableauContainerComponent } from './container/tableau-container.component';
import { TableauSimpleComponent } from './components/tableau-simple/tableau-simple.component';
import { TableauRoutingModule } from './tableau-routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { TableauTriFiltrePaginationComponent } from './components/tableau-tri-filtre-pagination/tableau-tri-filtre-pagination.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullstackComponentsModule } from '@app/fullstack-components/fullstack-components.module';
import { TableauDepliableMultiEnteteComponent } from './components/tableau-depliable-multi-entete/tableau-depliable-multi-entete.component';
import { TableauImbriqueComponent } from './components/tableau-imbrique/tableau-imbrique.component';
import { TableauModifiableComponent } from './components/tableau-modifiable/tableau-modifiable.component';
import { PopupDeConfirmationComponent } from './components/tableau-modifiable/popup-de-confirmation/popup-de-confirmation.component';

@NgModule({
  declarations: [
    TableauContainerComponent,
    TableauSimpleComponent,
    TableauTriFiltrePaginationComponent,
    TableauDepliableMultiEnteteComponent,
    TableauImbriqueComponent,
    TableauModifiableComponent,
    PopupDeConfirmationComponent
  ],
  imports: [
    CommonModule,
    TableauRoutingModule,
    AgGridModule,
    FormsModule,
    ReactiveFormsModule,
    FullstackComponentsModule
  ]
})
export class TableauModule { }
