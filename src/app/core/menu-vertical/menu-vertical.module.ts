import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuVerticalContainerComponent } from './container/menu-vertical-container.component';
import { MenuVerticalComponent } from './components/menu-vertical/menu-vertical.component';
import { MenuVerticalRoutingModule } from './menu-vertical-routing.module';
import { FullstackComponentsModule } from '@app/fullstack-components/fullstack-components.module';
import { MenuVerticalContentComponent } from './components/menu-vertical-content/menu-vertical-content.component';
import { EcransModule } from '../ecrans-pjd/ecrans.module';

@NgModule({
  declarations: [
    MenuVerticalContainerComponent,
    MenuVerticalComponent,
    MenuVerticalContentComponent
  ],
  imports: [
    CommonModule,
    MenuVerticalRoutingModule,
    FullstackComponentsModule,
    EcransModule
  ]
})
export class MenuVerticalModule { }
