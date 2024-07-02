import { Component } from '@angular/core';
import { MenuVertical } from '@app/fullstack-components/menu-vertical/models/menu-vertical.models';

@Component({
  selector: 'app-menu-vertical-sample',
  templateUrl: './menu-vertical.component.html',
  styleUrls: ['./menu-vertical.component.scss']
})
export class MenuVerticalComponent {
  menuVertical: MenuVertical[] = [
    { label: 'ACCUEIL ENTREPRISE', icon: 'assets/icones-projets/PORA/m_home.svg', route: '/menu-vertical/menu-1', activated: false},
    { label: 'LISTE DES ÉTABLISSEMENTS', icon: 'assets/icones-projets/PORA/m_liste_etablissements.svg',
      route: '/menu-vertical/menu-2', activated: false
    },
    { label: 'SYNTHÈSE COMPTABLE', icon: 'assets/icones-projets/PORA/m_synthese_comptable.svg',
      route: '/menu-vertical/menu-3', activated: false
    },
    { label: 'EFFECTIFS CALCULÉS', icon: 'assets/icones-projets/PORA/m_effectif_calcule.svg',
      route: '/menu-vertical/menu-4', activated: false
    },
    { label: 'MESURES ET TAUX APPLICABLES', icon: 'assets/icones-projets/PORA/m_mesures_taux.svg',
      children: [
        { label: 'Bonus Malus', route: '/menu-vertical/sous-menu-1', activated: false },
        { label: 'OETH', route: '/menu-vertical/sous-menu-2', activated: false }
      ],
    },
    { label: 'DSN', icon: 'assets/icones-projets/PORA/m_dsn.svg', route: '/menu-vertical/menu-5', activated: false},
    { label: 'VIE COTISANT', icon: 'assets/icones-projets/PORA/m_vie_cotisant.svg', route: '/menu-vertical/menu-6', activated: false},
    { label: 'DOCUMENT ARCHIVES', icon: 'assets/icones-projets/PORA/m_doc_archivees.svg', route: '/menu-vertical/menu-7', activated: false},
    { label: 'LIASSES CFE', icon: 'assets/icones-projets/PORA/m_liasse_cfe.svg', route: '/menu-vertical/menu-8', activated: false},
    { label: 'CONTRÔLE', icon: 'assets/icones-projets/PORA/m_controle.svg', route: '/menu-vertical/menu-9', activated: false},
    { label: 'CORRESPONDANTS GESABEL', icon: 'assets/icones-projets/PORA/m_correspondant_gesabel.svg',
      route: '/menu-vertical/menu-10', activated: false
    },
    { label: 'ATTESTATIONS / OPPOSITIONS', icon: 'assets/icones-projets/PORA/m_attestations_oppositions.svg',
      children: [
        { label: 'Génération d\'attestations', route: '/menu-vertical/sous-menu-3', activated: false },
        { label: 'Historique des demandes', route: '/menu-vertical/sous-menu-4', activated: false },
        { label: 'Oppositions', route: '/menu-vertical/sous-menu-5', activated: false }
      ],
    },
    { label: 'RAF ET RECOURS', icon: 'assets/icones-projets/PORA/m_raf.svg',
      children: [
        { label: 'Synthèse', route: '/menu-vertical/sous-menu-6', activated: false },
        { label: 'Solde débiteur', route: '/menu-vertical/sous-menu-7', activated: false },
        { label: 'Demandes et contestations', splitter: true },
        { label: 'Délais', route: '/menu-vertical/sous-menu-8', activated: false },
        { label: 'Remises', route: '/menu-vertical/sous-menu-9', activated: false },
        { label: 'Recours', route: '/menu-vertical/sous-menu-10', activated: false },
        { label: 'Processus de gestion', route: '/menu-vertical/sous-menu-11', activated: false },
        { label: 'Procédures collectives', route: '/menu-vertical/sous-menu-12', activated: false },
        { label: 'Admissions en non valeur', route: '/menu-vertical/sous-menu-13', activated: false },
        { label: 'Garanties', splitter: true },
        { label: 'Divers', route: '/menu-vertical/sous-menu-14', activated: false }
      ],
    },
    { label: 'ACTIVITÉS', icon: 'assets/icones-projets/PORA/m_activites.svg', route: '/menu-vertical/menu-11', activated: false}
  ];
}
