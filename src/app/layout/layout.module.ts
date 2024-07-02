import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ReportBoutonComponent } from './report-bouton/report-bouton.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FullstackComponentsModule } from '@app/fullstack-components/fullstack-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    AuthentificationComponent,
    ReportBoutonComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FullstackComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule,
    AngularSvgIconModule
  ],
  exports: [
    HeaderComponent,
    NavComponent,
    ReportBoutonComponent
  ]
})
export class LayoutModule { }
