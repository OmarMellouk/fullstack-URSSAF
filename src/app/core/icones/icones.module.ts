import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconesComponent } from './components/icones/icones.component';
import { IconesContainerComponent } from './container/icones-container.component';
import { IconesRoutingModule } from './icones-routing.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { IconesShowcaseComponent } from './components/icones-showcase/icones-showcase.component';
import { IconesProjetGaComponent } from './components/icones-projet-ga/icones-projet-ga.component';
import { IconesProjetRafComponent } from './components/icones-projet-raf/icones-projet-raf.component';
import { IconesProjetPoraComponent } from './components/icones-projet-pora/icones-projet-pora.component';

@NgModule({
  declarations: [
    IconesContainerComponent,
    IconesComponent,
    IconesShowcaseComponent,
    IconesProjetGaComponent,
    IconesProjetRafComponent,
    IconesProjetPoraComponent
  ],
  imports: [
    CommonModule,
    IconesRoutingModule,
    AngularSvgIconModule
  ]
})
export class IconesModule { }
