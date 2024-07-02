import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitresComponent } from './components/titres/titres.component';
import { TitresContainerComponent } from './container/titres-container.component';
import { TitresRoutingModule } from './titres-routing.module';
import { TitresSoulignesComponent } from './components/titres-soulignes/titres-soulignes.component';
import { FullstackComponentsModule } from '@app/fullstack-components/fullstack-components.module';



@NgModule({
  declarations: [
    TitresComponent,
    TitresContainerComponent,
    TitresSoulignesComponent
  ],
  imports: [
    CommonModule,
    TitresRoutingModule,
    FullstackComponentsModule
  ]
})
export class TitresModule { }
