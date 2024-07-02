import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OngletPremierNiveauComponent } from './components/onglet-premier-niveau/onglet-premier-niveau.component';
import { OngletDeuxiemeNiveauComponent } from './components/onglet-deuxieme-niveau/onglet-deuxieme-niveau.component';
import { OngletPremierNiveauIconeComponent } from './components/onglet-premier-niveau-icone/onglet-premier-niveau-icone.component';
import { OngletsContainerComponent } from './container/onglets-container.component';
import { OngletsRoutingModule } from './onglets-routings.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FullstackComponentsModule } from '@app/fullstack-components/fullstack-components.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { OngletPremierNiveauIconeNavigationComponent } from './components/onglet-premier-niveau-icone-navigation/onglet-premier-niveau-icone-navigation.component';
import { OngletPremierNiveauNavigationComponent } from './components/onglet-premier-niveau-navigation/onglet-premier-niveau-navigation.component';
import { OngletDeuxiemeNiveauNavigationComponent } from './components/onglet-deuxieme-niveau-navigation/onglet-deuxieme-niveau-navigation.component';

@NgModule({
  declarations: [
    OngletPremierNiveauComponent,
    OngletDeuxiemeNiveauComponent,
    OngletPremierNiveauIconeComponent,
    OngletsContainerComponent,
    OngletPremierNiveauIconeNavigationComponent,
    OngletPremierNiveauNavigationComponent,
    OngletDeuxiemeNiveauNavigationComponent
  ],
  imports: [
    CommonModule,
    OngletsRoutingModule,
    NgbModule,
    FullstackComponentsModule,
    AngularSvgIconModule
  ],
  exports: [
    OngletPremierNiveauNavigationComponent
  ]
})
export class OngletsModule { }
