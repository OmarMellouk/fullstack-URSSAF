import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDateParserFormatter, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NoteFlottanteComponent } from './notes/components/note-flottante/note-flottante.component';
import { NoteStatiqueComponent } from './notes/components/note-statique/note-statique.component';
import { NoteTemplateComponent } from './notes/components/note-template/note-template.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ListeDeroulanteComponent } from './liste-deroulante/components/liste-deroulante/liste-deroulante.component';
import { ListeDeroulanteMultipleComponent } from './liste-deroulante/components/liste-deroulante-multiple/liste-deroulante-multiple.component';
import { ListeDeroulanteHierarchiseeComponent } from './liste-deroulante/components/liste-deroulante-hierarchisee/liste-deroulante-hierarchisee.component';
import { ListeDeroulanteHierarchiseeFormComponent } from './liste-deroulante/components/liste-deroulante-hierarchisee/liste-deroulante-hierarchisee-form/liste-deroulante-hierarchisee-form.component';
import { ChampDeSaisieComponent } from './champ-de-saisie/components/champ-de-saisie/champ-de-saisie.component';
import { ChampDeSaisieMultiligneComponent } from './champ-de-saisie/components/champ-de-saisie-multiligne/champ-de-saisie-multiligne.component';
import { DatePickerComponent } from './shared/date-picker/date-picker.component';
import { NgbDateFrParserFormatterDirective } from './champ-de-saisie-date/directives/ngb-date-fr-parser-formatter.directive';
import { TableauComponent } from './tableau/components/tableau/tableau.component';
import { AgGridModule } from 'ag-grid-angular';
import { InputFilterComponent } from './tableau/ag-grid-components/input-filter/input-filter.component';
import { PaginationComponent } from './tableau/components/pagination/pagination.component';
import { ColumnHeaderComponent } from './tableau/ag-grid-components/column-header/column-header.component';
import { DateFilterComponent } from './tableau/ag-grid-components/date-filter/date-filter.component';
import { DateRendererComponent } from './tableau/ag-grid-components/date-renderer/date-renderer.component';
import { ListFloatingFilterComponent } from './tableau/ag-grid-components/list-floating-filter/list-floating-filter.component';
import { ChampDeSaisieDateIntervalleComponent } from './champ-de-saisie-date/components/champ-de-saisie-date-intervalle/champ-de-saisie-date-intervalle.component';
import { InputEditorComponent } from './tableau/ag-grid-components/input-editor/input-editor.component';
import { SelectEditorComponent } from './tableau/ag-grid-components/select-editor/select-editor.component';
import { DateEditorComponent } from './tableau/ag-grid-components/date-editor/date-editor.component';
import { ActionRendererEditComponent } from './tableau/ag-grid-components/action-renderer-edit/action-renderer-edit.component';
import { PopupComponent } from './popup/components/popup/popup.component';
import { ZoneInformationComponent } from './zone-information/components/zone-information/zone-information.component';
import { LabelValeurComponent } from './label-valeur/components/label-valeur/label-valeur.component';
import { WizardComponent } from './wizard/components/wizard/wizard.component';
import { WizardStepComponent } from './wizard/components/wizard-step/wizard-step.component';
import { ChampDeSaisieSeulComponent } from './champ-de-saisie/components/champ-de-saisie-seul/champ-de-saisie-seul.component';
import { ChampDeSaisieMultiligneSeulComponent } from './champ-de-saisie/components/champ-de-saisie-multiligne-seul/champ-de-saisie-multiligne-seul.component';
import { InterrupteurLitteralComponent } from './interrupteur/components/interrupteur-litteral/interrupteur-litteral.component';
import { DateInputDirective } from './shared/directives/date-input.directive';
import { OngletComponent } from './onglets/components/onglet/onglet.component';
import { OngletHeaderContainerComponent } from './onglets/components/onglet-header-container/onglet-header-container.component';
import { OngletHeaderComponent } from './onglets/components/onglet-header/onglet-header.component';
import { NumberInputDirective } from './shared/directives/number-input.directive';
import { TextTooltipRendererComponent } from './tableau/ag-grid-components/text-tooltip-renderer/text-tooltip-renderer.component';
import { H0Component } from './titres/components/h0/h0.component';
import { ChampDeSaisieAutoCompletionComponent } from './champ-de-saisie/components/champ-de-saisie-auto-completion/champ-de-saisie-auto-completion.component';
import { ZonePliableDepliableComponent } from './zone-pliable-depliable/components/zone-pliable-depliable/zone-pliable-depliable.component';
import { ActionRendererDeleteComponent } from './tableau/ag-grid-components/action-renderer-delete/action-renderer-delete.component';
import { MireAttenteComponent } from './mire-attente/components/mire-attente/mire-attente.component';
import { InfobulleAdditionnellesComponent } from './infobulles/components/infobulle-additionnelles/infobulle-additionnelles.component';
import { MenuVerticalComponent } from './menu-vertical/components/menu-vertical/menu-vertical.component';
import { MenuVerticalBlockComponent } from './menu-vertical/components/menu-vertical-block/menu-vertical-block.component';
import { RouterModule } from '@angular/router';
import { BoutonChoixMultiplesComponent } from './boutons/components/bouton-choix-multiples/bouton-choix-multiples.component';
import { BoutonsRadioLabelComponent } from './boutons-radio/components/boutons-radio-label/boutons-radio-label.component';
import { PopupConfirmationComponent } from './onglets/components/popup-confirmation/popup-confirmation.component';
import { ArborescenceComponent } from './arborescence/components/arborescence/arborescence.component';
import { ArborescenceChildrenComponent } from './arborescence/components/arborescence-children/arborescence-children.component';
import { ArborescenceCollapseComponent } from './arborescence/components/arborescence-collapse/arborescence-collapse.component';
import { ZoneLiensExternesComponent } from './liens-hypertextes/zone-liens-externes/zone-liens-externes.component';
import { ColonnesConfigPopupComponent } from './tableau/components/colonnes-config-popup/colonnes-config-popup.component';
import { DoubleListeModule } from '@acoss/double-liste-angular-intranet';
import { TextFormatPipe } from './utils/text-format/text-format.service';

const AG_GRID_FRAMEWORK_COMPONENTS: any[] = [
  InputFilterComponent,
  ColumnHeaderComponent,
  DateFilterComponent,
  DateRendererComponent,
  TextTooltipRendererComponent,
  ListFloatingFilterComponent,
  InputEditorComponent,
  SelectEditorComponent,
  DateEditorComponent,
  ActionRendererEditComponent,
  ActionRendererDeleteComponent,
];

const COMPONENTS_TO_EXPORT: any[] = [
  ListeDeroulanteComponent,
  NoteFlottanteComponent,
  NoteStatiqueComponent,
  ListeDeroulanteMultipleComponent,
  ListeDeroulanteHierarchiseeComponent,
  ChampDeSaisieComponent,
  ChampDeSaisieMultiligneComponent,
  DatePickerComponent,
  OngletComponent,
  TableauComponent,
  PaginationComponent,
  ChampDeSaisieDateIntervalleComponent,
  PopupComponent,
  ZonePliableDepliableComponent,
  ZoneInformationComponent,
  LabelValeurComponent,
  WizardComponent,
  ChampDeSaisieSeulComponent,
  ChampDeSaisieMultiligneSeulComponent,
  InterrupteurLitteralComponent,
  DateInputDirective,
  OngletHeaderContainerComponent,
  OngletHeaderComponent,
  NumberInputDirective,
  InfobulleAdditionnellesComponent,
  H0Component,
  ChampDeSaisieAutoCompletionComponent,
  MireAttenteComponent,
  MenuVerticalComponent,
  BoutonChoixMultiplesComponent,
  BoutonsRadioLabelComponent,
  ZoneLiensExternesComponent,
  ArborescenceComponent,
  TextFormatPipe
];

const PRIVATE_COMPONENTS = [
  ListeDeroulanteHierarchiseeFormComponent,
  NoteTemplateComponent,
  WizardStepComponent,
  MenuVerticalBlockComponent,
  PopupConfirmationComponent,
  ArborescenceChildrenComponent,
  ArborescenceCollapseComponent,
  ColonnesConfigPopupComponent
];

@NgModule({
  declarations: PRIVATE_COMPONENTS.concat(AG_GRID_FRAMEWORK_COMPONENTS).concat(COMPONENTS_TO_EXPORT),
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AngularSvgIconModule,
    AgGridModule,
    RouterModule,
    DoubleListeModule
  ],
  providers: [
    DatePipe,
    {provide: NgbDateParserFormatter, useClass: NgbDateFrParserFormatterDirective}
  ],
  exports: COMPONENTS_TO_EXPORT.concat(AG_GRID_FRAMEWORK_COMPONENTS)
})
export class FullstackComponentsModule { }
