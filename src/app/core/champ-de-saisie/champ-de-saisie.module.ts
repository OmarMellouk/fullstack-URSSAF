import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampDeSaisieContainerComponent } from './container/champ-de-saisie-container.component';
import { ChampDeSaisieComponent } from './components/champ-de-saisie/champ-de-saisie.component';
import { ChampDeSaisieRoutingModule } from './champ-de-saisie-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChampDeSaisieMultiligneComponent } from './components/champ-de-saisie-multiligne/champ-de-saisie-multiligne.component';
import { FullstackComponentsModule } from '@app/fullstack-components/fullstack-components.module';
import { ChampDeSaisieAutoCompletionComponent } from './components/champ-de-saisie-auto-completion/champ-de-saisie-auto-completion.component';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    ChampDeSaisieContainerComponent,
    ChampDeSaisieComponent,
    ChampDeSaisieMultiligneComponent,
    ChampDeSaisieAutoCompletionComponent
  ],
  imports: [
    CommonModule,
    ChampDeSaisieRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FullstackComponentsModule,
    NgbTypeaheadModule
  ]
})
export class ChampDeSaisieModule { }
