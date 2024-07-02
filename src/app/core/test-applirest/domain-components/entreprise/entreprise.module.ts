import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntrepriseFormComponent } from './entreprise-form/entreprise-form.component';
import { EntreprisesListeComponent } from './entreprises-liste/entreprises-liste.component';
import { EntreprisesTableComponent } from './entreprises-table/entreprises-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { EntrepriseTableModifyRendrerComponent } from './entreprise-table-modify-rendrer/entreprise-table-modify-rendrer.component';
import { FullstackComponentsModule } from '@app/fullstack-components/fullstack-components.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EntrepriseTableDeleteRendrerComponent } from './entreprise-table-delete-rendrer/entreprise-table-delete-rendrer.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    AgGridModule,
    FullstackComponentsModule,
    AngularSvgIconModule,
    HttpClientModule,
    TranslateModule,
    NgbModule
  ],
  declarations: [
    EntrepriseFormComponent,
    EntreprisesListeComponent,
    EntreprisesTableComponent,
    EntrepriseTableModifyRendrerComponent,
    EntrepriseTableDeleteRendrerComponent
  ],
  exports: [
    EntrepriseFormComponent,
    EntreprisesListeComponent,
    EntreprisesTableComponent
  ]
})
export class EntrepriseModule { }
