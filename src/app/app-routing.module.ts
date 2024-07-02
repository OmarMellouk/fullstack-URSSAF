import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './not-found.component';
import { CallbackComponent, AuthImplicitGuard } from '@acoss/prisme-angular-intranet';

// routes principales
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full'
  },
  {
    path: 'accueil',
    loadChildren: () => import('./core/accueil/accueil.module').then(m => m.AccueilModule)
  },
  {
    path: 'test-applirest',
    loadChildren: () => import('./core/test-applirest/test-applirest.module').then(m => m.TestApplirestModule)
  },
  {
    path: 'simu-portail',
    loadChildren: () => import('./core/simu-portail/simu-portail.module').then(m => m.SimuPortailModule)
  },
  // Route utilisée par la mire PSS lors que l'authantification est validée
  {
    path: 'retour_pss',
    component: CallbackComponent,
    canActivate: [AuthImplicitGuard]
  },
  {
    path: 'boutons',
    loadChildren: () => import('./core/boutons/boutons.module').then(m => m.BoutonsModule)
  },
  {
    path: 'champ-de-saisie',
    loadChildren: () => import('./core/champ-de-saisie/champ-de-saisie.module').then(m => m.ChampDeSaisieModule)
  },
  {
    path: 'case-a-cocher',
    loadChildren: () => import('./core/case-a-cocher/case-a-cocher.module').then(m => m.CaseACocherModule)
  },
  {
    path: 'boutons-radio',
    loadChildren: () => import('./core/boutons-radio/boutons-radio.module').then(m => m.BoutonsRadioModule)
  },
  {
    path: 'champ-de-saisie-date',
    loadChildren: () => import('./core/champ-de-saisie-date/champ-de-saisie-date.module').then(m => m.ChampDeSaisieDateModule)
  },
  {
    path: 'titres',
    loadChildren: () => import('./core/titres/titres.module').then(m => m.TitresModule)
  },
  {
    path: 'fil-ariane',
    loadChildren: () => import('./core/fil-ariane/fil-ariane.module').then(m => m.FilArianeModule)
  },
  {
    path: 'liste-deroulante',
    loadChildren: () => import('./core/liste-deroulante/liste-deroulante.module').then(m => m.ListeDeroulanteModule)
  },
  {
    path: 'notes',
    loadChildren: () => import('./core/notes/notes.module').then(m => m.NotesModule)
  },
  {
    path: 'liens-hypertextes',
    loadChildren: () => import('./core/liens-hypertextes/liens-hypertextes.module').then(m => m.LiensHypertextesModule)
  },
  {
    path: 'onglets',
    loadChildren: () => import('./core/onglets/onglets.module').then(m => m.OngletsModule)
  },
  {
    path: 'tableau',
    loadChildren: () => import('./core/tableau/tableau.module').then(m => m.TableauModule)
  },
  {
    path: 'popup',
    loadChildren: () => import('./core/popup/popup.module').then(m => m.PopupModule)
  },
  {
    path: 'zone-pliable-depliable',
    loadChildren: () => import('./core/zone-pliable-depliable/zone-pliable-depliable.module').then(m => m.ZonePliableDepliableModule)
  },
  {
    path: 'zone-information',
    loadChildren: () => import('./core/zone-information/zone-information.module').then(m => m.ZoneInformationModule)
  },
  {
    path: 'wizard',
    loadChildren: () => import('./core/wizard/wizard.module').then(m => m.WizardModule)
  },
  {
    path: 'badges',
    loadChildren: () => import('./core/badges/badges.module').then(m => m.BadgesModule)
  },
  {
    path: 'interrupteur',
    loadChildren: () => import('./core/interrupteur/interrupteur.module').then(m => m.InterrupteurModule)
  },
  {
    path: 'double-liste',
    loadChildren: () => import('./core/double-liste/double-liste.module').then(m => m.DoubleListeModule)
  },
  {
    path: 'texte-et-label-valeur',
    loadChildren: () => import('./core/texte-et-label-valeur/texte-et-label-valeur.module').then((m) => m.TexteEtLabelValeurModule)
  },
  {
    path: 'infobulles',
    loadChildren: () => import('./core/infobulles/infobulles.module').then((m) => m.InfobullesModule)
  },
  {
    path: 'ecrans-pjd',
    loadChildren: () => import('./core/ecrans-pjd/ecrans.module').then((m) => m.EcransModule)
  },
  {
    path: 'mire-attente',
    loadChildren: () => import('./core/mire-attente/mire-attente.module').then((m) => m.MireAttenteModule)
  },
  {
    path: 'icones',
    loadChildren: () => import('./core/icones/icones.module').then((m) => m.IconesModule)
  },
  {
    path: 'menu-vertical',
    loadChildren: () => import('./core/menu-vertical/menu-vertical.module').then((m) => m.MenuVerticalModule)
  },
  {
    path: 'formulaire-gestion-erreurs',
    loadChildren: () => import('./core/formulaire-gestion-erreurs/formulaire-gestion-erreurs.module')
      .then((m) => m.FormulaireGestionErreursModule)
  },
  {
    path: 'arborescence',
    loadChildren: () => import('./core/arborescence/arborescence.module')
      .then((m) => m.ArborescenceModule)
  },
  {
    path: 'demonstration-rem',
    loadChildren: () => import('./core/demonstration-rem/demonstration-rem.module')
      .then((m) => m.DemonstrationEmModule)
  },
  {
    path: 'liste-pjd',
    redirectTo: 'ecrans-pjd'
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy', scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
