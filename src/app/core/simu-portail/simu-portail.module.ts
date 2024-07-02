import { CommunicationSPAModule } from '@acoss/communication-spa-angular';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullstackComponentsModule } from '@app/fullstack-components/fullstack-components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CommunicationSPAComponent } from './communication-spa/communication-spa.component';
import { HabilitationPSSComponent } from './habilitation-pss/habilitation-pss.component';
import { IFrameComponent, SafePipe } from './iframe/iframe.component';
import { InformationsComponent } from './informations/informations.component';
import { OngletsComponent } from './onglets/onglets.component';
import { OpenAppComponent } from './open-app/open-app.component';
import { SimuPortailRoutingModule } from './simu-portail-routing.module';

@NgModule({
  declarations: [
    OpenAppComponent,
    HabilitationPSSComponent,
    InformationsComponent,
    IFrameComponent,
    SafePipe,
    OngletsComponent,
    CommunicationSPAComponent
  ],
  entryComponents: [
    IFrameComponent,
    InformationsComponent
  ],
  imports: [
    CommonModule,
    SimuPortailRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommunicationSPAModule.forRoot('Simu Portail'),
    NgSelectModule,
    FormsModule,
    NgbModule,
    FullstackComponentsModule,
    AngularSvgIconModule
  ],
  providers: [CommunicationSPAComponent]
})
export class SimuPortailModule {

}
