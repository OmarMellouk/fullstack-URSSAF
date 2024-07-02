import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilContainerComponent } from './container/accueil-container.component';
import { AccueilRoutingModule } from './accueil-routing.module';
import { FullstackComponentsModule } from '@app/fullstack-components/fullstack-components.module';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { LienComponent } from './components/lien/lien.component';
import { MemoTechniqueComponent } from './components/memo-technique/memo-technique.component';

@NgModule({
  declarations: [
    AccueilContainerComponent,
    DocumentationComponent,
    LienComponent,
    MemoTechniqueComponent
  ],
  imports: [
    CommonModule,
    FullstackComponentsModule,
    AccueilRoutingModule,

  ],
  providers: [],
  exports: []
})
export class AccueilModule { }
