import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesContainerComponent } from './container/notes-container.component';
import { NotesDeConfirmationComponent } from './components/notes-de-confirmation/notes-de-confirmation.component';
import { NotesRoutingModule } from './notes-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NoteInformationComponent } from './components/note-information/note-information.component';
import { NoteAvertissementComponent } from './components/note-avertissement/note-avertissement.component';
import { NoteErreurComponent } from './components/note-erreur/note-erreur.component';
import { FullstackComponentsModule } from '@app/fullstack-components/fullstack-components.module';
import { NoteErreurDonneesComponent } from './components/note-erreur-donnees/note-erreur-donnees.component';
import { NoteProcessComponent } from './components/note-process/note-process.component';

@NgModule({
  declarations: [
    NotesContainerComponent,
    NotesDeConfirmationComponent,
    NoteInformationComponent,
    NoteAvertissementComponent,
    NoteErreurComponent,
    NoteErreurDonneesComponent,
    NoteProcessComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    NgbModule,
    AngularSvgIconModule,
    FullstackComponentsModule
  ]
})
export class NotesModule { }
