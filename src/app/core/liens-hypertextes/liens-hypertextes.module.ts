import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiensHypertextesComponent } from './components/liens-hypertextes/liens-hypertextes.component';
import { LiensHypertextesContainerComponent } from './container/liens-hypertextes-container.component';
import { LiensHypertextesRoutingsModule } from './liens-hypertextes-routing.module';
import { ZoneLiensExternesComponent } from './components/zone-liens-externes/zone-liens-externes.component';
import { FullstackComponentsModule } from '@app/fullstack-components/fullstack-components.module';

@NgModule({
  declarations: [
    LiensHypertextesComponent,
    LiensHypertextesContainerComponent,
    ZoneLiensExternesComponent
  ],
  imports: [
    CommonModule,
    LiensHypertextesRoutingsModule,
    FullstackComponentsModule
  ],
  exports: [
    ZoneLiensExternesComponent
  ]
})
export class LiensHypertextesModule { }
