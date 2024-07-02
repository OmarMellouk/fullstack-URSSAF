import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullstackComponentsModule } from '@app/fullstack-components/fullstack-components.module';
import { ActionRendererComponent } from './liste-pjd/components/action-renderer/action-renderer.component';
import { ListePjdContainerComponent } from './liste-pjd/container/liste-pjd-container.component';
import { HeaderComponent } from './liste-pjd/components/header/header.component';
import { OngletsComponent } from './liste-pjd/components/onglets/onglets.component';
import { TableauPieceAnnuelleComponent } from './liste-pjd/components/tableau-piece-annuelle/tableau-piece-annuelle.component';
import { DetailPjdContainerComponent } from './detail-pjd/container/detail-pjd-container.component';
import { HeaderDetailComponent } from './detail-pjd/components/header-detail/header-detail.component';
import { OngletsDetailComponent } from './detail-pjd/components/onglets-detail/onglets-detail.component';
import { RouterModule } from '@angular/router';
import { TableauDetailComponent } from './detail-pjd/components/tableau-detail/tableau-detail.component';
import { FormatCtpCellRendererComponent } from './detail-pjd/components/format-ctp-cell-renderer/format-ctp-cell-renderer.component';
import { RightMenuComponent } from './detail-pjd/components/right-menu/right-menu.component';
import { EcransRoutingModule } from './ecrans-routing.module';
import { TableauListePiecesComponent } from './liste-pjd/components/tableau-liste-pieces/tableau-liste-pieces.component';
import { InformationsGneneralesComponent } from './detail-pjd/components/informations-gnenerales/informations-gnenerales.component';
import { BasesAssujettiesEtCotisantsComponent } from './detail-pjd/components/bases-assujetties-et-cotisants/bases-assujetties-et-cotisants.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ListePjdContainerComponent,
    ActionRendererComponent,
    HeaderComponent,
    OngletsComponent,
    TableauPieceAnnuelleComponent,
    DetailPjdContainerComponent,
    HeaderDetailComponent,
    OngletsDetailComponent,
    TableauDetailComponent,
    FormatCtpCellRendererComponent,
    RightMenuComponent,
    TableauListePiecesComponent,
    InformationsGneneralesComponent,
    BasesAssujettiesEtCotisantsComponent
  ],
  imports: [
    CommonModule,
    EcransRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FullstackComponentsModule,
    RouterModule,
    AngularSvgIconModule,
    NgbPopoverModule
  ],
  exports: [
    ListePjdContainerComponent,
    DetailPjdContainerComponent
  ]
})
export class EcransModule { }
