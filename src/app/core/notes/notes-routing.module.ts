import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesContainerComponent } from './container/notes-container.component';

const routes: Routes = [
  {
    path: '',
    component: NotesContainerComponent,
    data: {
      pageTitle : 'Notes'
    }
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
