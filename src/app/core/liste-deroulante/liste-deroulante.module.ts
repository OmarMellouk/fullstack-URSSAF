import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeDeroulanteComponent } from './components/liste-deroulante/liste-deroulante.component';
import { ListeDeroulanteContainerComponent } from './container/liste-deroulante-container.component';
import { ListeDeroulanteRoutingModule } from './liste-deroulante-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListeDeroulanteMultipleComponent } from './components/liste-deroulante-multiple/liste-deroulante-multiple.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListeDeroulanteHierarchiseeComponent } from './components/liste-deroulante-hierarchisee/liste-deroulante-hierarchisee.component';
import { FullstackComponentsModule } from '@app/fullstack-components/fullstack-components.module';

@NgModule({
  declarations: [
    ListeDeroulanteComponent,
    ListeDeroulanteContainerComponent,
    ListeDeroulanteMultipleComponent,
    ListeDeroulanteHierarchiseeComponent
  ],
  imports: [
    CommonModule,
    ListeDeroulanteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    FullstackComponentsModule
  ]
})
export class ListeDeroulanteModule { }
