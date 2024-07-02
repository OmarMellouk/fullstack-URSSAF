import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampDeSaisieDateContainerComponent } from './container/champ-de-saisie-date-container.component';
import { ChampDeSaisieDateComponent } from './components/champ-de-saisie-date/champ-de-saisie-date.component';
import { ChampDeSaisieDateRoutingModule } from './champ-de-saisie-date-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChampDeSaisieDateIntervalleComponent } from './components/champ-de-saisie-date-intervalle/champ-de-saisie-date-intervalle.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FullstackComponentsModule } from '@app/fullstack-components/fullstack-components.module';

@NgModule({
  declarations: [
    ChampDeSaisieDateContainerComponent,
    ChampDeSaisieDateComponent,
    ChampDeSaisieDateIntervalleComponent
  ],
  imports: [
    CommonModule,
    ChampDeSaisieDateRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AngularSvgIconModule,
    FullstackComponentsModule
  ]
})
export class ChampDeSaisieDateModule { }
