import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseACocherContainerComponent } from './container/case-a-cocher-container.component';
import { CaseACocherComponent } from './components/case-a-cocher/case-a-cocher.component';
import { CaseACocherRoutingModule } from './case-a-cocher-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CaseACocherContainerComponent,
    CaseACocherComponent
  ],
  imports: [
    CommonModule,
    CaseACocherRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CaseACocherModule { }
