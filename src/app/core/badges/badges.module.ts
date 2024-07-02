import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgesContainerComponent } from './container/badges-container.component';
import { BadgesRoutingModule } from './badges-routing.module';
import { BadgesWizardComponent } from './components/badges-wizard/badges-wizard.component';
import { FullstackComponentsModule } from '@app/fullstack-components/fullstack-components.module';
import { BadgesOngletPremierNiveauComponent } from './components/badges-onglet-premier-niveau/badges-onglet-premier-niveau.component';
import { BadgesOngletDeuxiemeNiveauComponent } from './components/badges-onglet-deuxieme-niveau/badges-onglet-deuxieme-niveau.component';
import { BadgesTitresComponent } from './components/badges-titres/badges-titres.component';

@NgModule({
  declarations: [
    BadgesContainerComponent,
    BadgesWizardComponent,
    BadgesOngletPremierNiveauComponent,
    BadgesOngletDeuxiemeNiveauComponent,
    BadgesTitresComponent
  ],
  imports: [
    CommonModule,
    BadgesRoutingModule,
    FullstackComponentsModule
  ],
  exports: [
    BadgesWizardComponent
  ]
})
export class BadgesModule { }
