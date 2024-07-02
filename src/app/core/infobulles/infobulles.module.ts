import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfobullesComponent } from './container/infobulles.component';
import { InfobullesRoutingModule } from './infobulles-routing.module';
import { InfobulleClassiqueComponent } from './components/infobulle-classique/infobulle-classique.component';
import { InfobulleInformativeComponent } from './components/infobulle-informative/infobulle-informative.component';
import { InfobulleAdditionnellesComponent } from './components/infobulle-additionnelles/infobulle-additionnelles.component';
import { FullstackComponentsModule } from '@app/fullstack-components/fullstack-components.module';


@NgModule({
  declarations: [
    InfobullesComponent,
    InfobulleClassiqueComponent,
    InfobulleInformativeComponent,
    InfobulleAdditionnellesComponent
  ],
  imports: [
    CommonModule,
    InfobullesRoutingModule,
    FullstackComponentsModule
  ]
})
export class InfobullesModule { }
