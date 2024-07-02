import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemonstrationRemContainerComponent } from './container/desmonstration-rem-container.component';
import { DemonstrationRemComponent } from './components/desmonstration-rem/desmonstration-rem.component';
import { DemonstrationRemRoutingModule } from './demonstration-rem-routing.module';
import { BoutonsRadioModule } from '../boutons-radio/boutons-radio.module';
import { LiensHypertextesModule } from '../liens-hypertextes/liens-hypertextes.module';
import { ArborescenceModule } from '../arborescence/arborescence.module';
import { OngletsModule } from '../onglets/onglets.module';
import { ZonePliableDepliableModule } from '../zone-pliable-depliable/zone-pliable-depliable.module';
import { BadgesModule } from '../badges/badges.module';

@NgModule({
  declarations: [
    DemonstrationRemContainerComponent,
    DemonstrationRemComponent
  ],
  imports: [
    CommonModule,
    DemonstrationRemRoutingModule,
    BoutonsRadioModule,
    LiensHypertextesModule,
    ZonePliableDepliableModule,
    OngletsModule,
    ArborescenceModule,
    BadgesModule
  ]
})
export class DemonstrationEmModule { }
