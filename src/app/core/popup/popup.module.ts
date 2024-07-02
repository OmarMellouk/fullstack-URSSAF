import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupContainerComponent } from './container/popup-container.component';
import { PopupRoutingModule } from './popup-routing.module';
import { PopupSampleComponent } from './components/popup-sample/popup-sample.component';
import { FullstackComponentsModule } from '@app/fullstack-components/fullstack-components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopupTroisBoutonsComponent } from './components/popup-trois-boutons/popup-trois-boutons.component';
import { PopupCommentaireComponent } from './components/popup-commentaire/popup-commentaire.component';
import { PopupFormulaireComponent } from './components/popup-formulaire/popup-formulaire.component';
import { PopupLongueComponent } from './components/popup-longue/popup-longue.component';
import { PopupErreurComponent } from './components/popup-erreur/popup-erreur.component';
import { PopupProgressionComponent } from './components/popup-progression/popup-progression.component';
import { PopupTableauComponent } from './components/popup-tableau/popup-tableau.component';
import { PopupBandeauErreurComponent } from './components/popup-bandeau-erreur/popup-bandeau-erreur.component';



@NgModule({
  declarations: [
    PopupContainerComponent,
    PopupSampleComponent,
    PopupTroisBoutonsComponent,
    PopupCommentaireComponent,
    PopupFormulaireComponent,
    PopupLongueComponent,
    PopupErreurComponent,
    PopupProgressionComponent,
    PopupTableauComponent,
    PopupBandeauErreurComponent
  ],
  imports: [
    CommonModule,
    PopupRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    FullstackComponentsModule
  ]
})
export class PopupModule { }
