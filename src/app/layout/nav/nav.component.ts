import { Component } from '@angular/core';
import { MenuVertical } from '@app/fullstack-components/menu-vertical/models/menu-vertical.models';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent {

  menuVertical: MenuVertical[] = [
    {route: '/accueil', label: 'Accueil - Welcome', activated: false},
    {route: '/arborescence', label: 'Arborescence - Treeview', activated: false},
    {route: '/badges', label: 'Badges - Badges', activated: false},
    {route: '/double-liste', label: 'Double liste - Double list', activated: false},
    {route: '/boutons', label: 'Boutons - Buttons', activated: false},
    {route: '/boutons-radio', label: 'Boutons radio - Radio button', activated: false},
    {route: '/case-a-cocher', label: 'Case à cocher - Checkbox', activated: false},
    {route: '/champ-de-saisie', label: 'Champ de saisie - Input', activated: false},
    {route: '/champ-de-saisie-date', label: 'Champ de saisie date - Input date', activated: false},
    {route: '/fil-ariane', label: 'Fil d\'Ariane - Breadcrumb', activated: false},
    {route: '/icones', label: 'Icônes - Icons', activated: false},
    {route: '/infobulles', label: 'Infobulles - Tooltips', activated: false},
    {route: '/interrupteur', label: 'Interrupteurs - Switches', activated: false},
    {route: '/liens-hypertextes', label: 'Liens hypertextes - Links', activated: false},
    {route: '/liste-deroulante', label: 'Liste déroulante - Select', activated: false},
    {route: '/menu-vertical', label: 'Menu vertical - Vertical menu', activated: false},
    {route: '/mire-attente', label: 'Mire d\'attente - Loader', activated: false},
    {route: '/notes', label: 'Notes - Toasts', activated: false},
    {route: '/onglets', label: 'Onglets - Tabs', activated: false},
    {route: '/popup', label: 'Popup', activated: false},
    {route: '/tableau', label: 'Tableau - Table', activated: false},
    {route: '/texte-et-label-valeur', label: 'Texte et label/valeur - Text and label/value', activated: false},
    {route: '/titres', label: 'Titres - Titles', activated: false},
    {route: '/wizard', label: 'Wizard', activated: false},
    {route: '/zone-information', label: 'Zone d\'information - Information area', activated: false},
    {route: '/zone-pliable-depliable', label: 'Zone pliable/dépliable - Accordion', activated: false},
    {splitter: true},
    {route: '/ecrans-pjd/liste-pjd', label: 'Écran PJD : Liste des pièces justificatives', activated: false},
    {route: '/ecrans-pjd/liste-pjd/detail-pjd', label: 'Écran PJD : Détail d\'une PJD', activated: false},
    {route: '/formulaire-gestion-erreurs', label: 'Formulaire et gestion des erreurs', activated: false},
    {splitter: true},
    {route: '/test-applirest', label: 'Utiliser l\'application blanche', activated: false},
    {route: '/simu-portail', label: 'Utiliser simu portail', activated: false},
    {route: '/demonstration-rem', label: 'Démonstration REM', activated: false},
  ];
}
