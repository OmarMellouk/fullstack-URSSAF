import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardComponent } from './components/wizard/wizard.component';
import { WizardContainerComponent } from './container/wizard-container.component';
import { WizardRoutingModule } from './wizard-routing.module';
import { FullstackComponentsModule } from '@app/fullstack-components/fullstack-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WizardFormIndividuComponent } from './components/wizard-form-individu/wizard-form-individu.component';
import { WizardFormEntrepriseComponent } from './components/wizard-form-entreprise/wizard-form-entreprise.component';
import { WizardFormEtablissementComponent } from './components/wizard-form-etablissement/wizard-form-etablissement.component';
import { WizardFormContactComponent } from './components/wizard-form-contact/wizard-form-contact.component';
import { WizardFormAdresseComponent } from './components/wizard-form-adresse/wizard-form-adresse.component';

@NgModule({
  declarations: [
    WizardComponent,
    WizardContainerComponent,
    WizardFormIndividuComponent,
    WizardFormEntrepriseComponent,
    WizardFormEtablissementComponent,
    WizardFormContactComponent,
    WizardFormAdresseComponent
  ],
  imports: [
    CommonModule,
    WizardRoutingModule,
    FullstackComponentsModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class WizardModule { }
