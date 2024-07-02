import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZoneInformationComponent } from './components/zone-information/zone-information.component';
import { ZoneInformationContainerComponent } from './container/zone-information-container/zone-information-container.component';
import { ZoneInformationRoutingModule } from './zone-information-routing.module';
import { FullstackComponentsModule } from '@app/fullstack-components/fullstack-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [
    ZoneInformationComponent,
    ZoneInformationContainerComponent,
  ],
  imports: [
    CommonModule,
    ZoneInformationRoutingModule,
    FullstackComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularSvgIconModule
  ]
})
export class ZoneInformationModule { }
