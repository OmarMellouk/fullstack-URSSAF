import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullstackComponentsModule } from '@app/fullstack-components/fullstack-components.module';
import { FormulaireGestionErreursContainerComponent } from './container/formulaire-gestion-erreurs-container.component';
import { FormulaireGestionErreursRoutingModule } from './formulaire-gestion-erreurs-routing.module';
import { FormulaireGestionErreursComponent } from './components/formulaire-gestion-erreurs/formulaire-gestion-erreurs.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FormulaireAdresseComponent } from './components/formulaire-adresse/formulaire-adresse.component';
import { FormulaireDecesComponent } from './components/formulaire-deces/formulaire-deces.component';
import { FormulaireIdentiteComponent } from './components/formulaire-identite/formulaire-identite.component';
import { FormulaireNaissanceComponent } from './components/formulaire-naissance/formulaire-naissance.component';
import { FormulaireNationaliteComponent } from './components/formulaire-nationalite/formulaire-nationalite.component';
import { NoteExplicationComponent } from './components/note-explication/note-explication.component';

@NgModule({
  declarations: [
    FormulaireGestionErreursContainerComponent,
    FormulaireGestionErreursComponent,
    FormulaireIdentiteComponent,
    FormulaireNaissanceComponent,
    FormulaireDecesComponent,
    FormulaireNationaliteComponent,
    FormulaireAdresseComponent,
    NoteExplicationComponent
  ],
  imports: [
    CommonModule,
    FormulaireGestionErreursRoutingModule,
    FullstackComponentsModule,
    AngularSvgIconModule
  ]
})
export class FormulaireGestionErreursModule { }
