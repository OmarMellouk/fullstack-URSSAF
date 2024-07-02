import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoutonsContainerComponent } from './container/boutons-container.component';
import { BoutonPremierNiveauComponent } from './components/bouton-premier-niveau/bouton-premier-niveau.component';
import { BoutonDeuxiemeNiveauComponent } from './components/bouton-deuxieme-niveau/bouton-deuxieme-niveau.component';
import { BoutonsRoutingModule } from './boutons-routing.module';
import { BoutonChoixMultiplesComponent } from './components/bouton-choix-multiples/bouton-choix-multiples.component';
import { FullstackComponentsModule } from '@app/fullstack-components/fullstack-components.module';

@NgModule({
  declarations: [
    BoutonsContainerComponent,
    BoutonPremierNiveauComponent,
    BoutonDeuxiemeNiveauComponent,
    BoutonChoixMultiplesComponent
  ],
  imports: [
    CommonModule,
    BoutonsRoutingModule,
    FullstackComponentsModule
  ]
})
export class BoutonsModule { }
