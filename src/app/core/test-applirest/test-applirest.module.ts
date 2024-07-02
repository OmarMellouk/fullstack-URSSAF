import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestApplirestComponent } from './test-applirest.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TestApplirestRoutingModule } from './test-applirest-routing.module';
import { EntrepriseModule } from './domain-components/entreprise/entreprise.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EntrepriseModule,
    TestApplirestRoutingModule
  ],
  declarations: [TestApplirestComponent]
})
export class TestApplirestModule { }
