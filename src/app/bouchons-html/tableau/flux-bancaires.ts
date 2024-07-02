export const FLUX_BANCAIRES = [
  {
    'dateIntegration': '2018-07-30T10:00:00.000Z',
    'dateExecution': '2018-07-30T10:00:00.000Z',
    'compteRemise': 'BNP URSSAF',
    'validation': 'Ok avec modif',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere aliquet auctor. ',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100000_117',
    'type': 'Télépaiement',
    'attendu': true,
    'nombreLignes': 1234567890,
    'montant': 123456789147258.25,
    'etat': 'Signalements',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'dateExecution': '2018-08-15T14:00:00.000Z',
    'compteRemise': 'BNP URSSAF',
    'validation': 'OK',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Aladin',
    'nomFichier': 'TELEDEP_TT12_20170913_100700_117',
    'type': 'Télépaiement',
    'attendu': false,
    'nombreLignes': 1000000,
    'montant': 2000000000,
    'etat': 'Validé',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'dateExecution': '2018-01-15T14:00:00.000Z',
    'compteRemise': 'BNP URSSAF',
    'nombreLignes': 8,
    'validation': 'OK',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100010_117',
    'type': 'Télépaiement',
    'attendu': true,
    'etat': 'Signalements',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'OK',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Fichier en doublon',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'ARA_BNP_20181110_060000',
    'type': 'ARA',
    'nombreLignes': 456,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'compteRemise': 'BRED RSI',
    'nombreLignes': 7895,
    'validation': 'Ok avec modif',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'IMP_PLV_BRED_0170802_072339_cam',
    'type': 'Impayé prélèvement',
    'attendu': true,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'Requise',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Fichier en doublon',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'IMP_CHQ_CIC_20170802_071535_cam',
    'type': 'Impayé chèque',
    'attendu': false,
    'nombreLignes': 8,
    'montant': 10000,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'OK',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Sherlock',
    'nomFichier': 'ARA_BRED_20181110_060000',
    'nombreLignes': 9855,
    'type': 'ARA',
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'dateExecution': '2017-02-06T00:00:00.000Z',
    'compteRemise': 'BNP URSSAF',
    'validation': 'Ok avec modif',
    'nombreLignes': 78554,
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100000_117',
    'type': 'Télépaiement',
    'attendu': true,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'OK',
    'compteRemise': 'BRED RSI',
    'dateExecution': '2017-07-30T00:00:00.000Z',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100700_117',
    'type': 'Télépaiement',
    'attendu': false,
    'nombreLignes': 1000000,
    'montant': 2000000000,
    'etat': 'Validé',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'Requise',
    'compteRemise': 'BNP URSSAF',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100010_117',
    'type': 'Télépaiement',
    'nombreLignes': 7896,
    'attendu': true,
    'etat': 'Signalements',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'Requise',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Fichier en doublon',
    'nombreLignes': 855,
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'ARA_BNP_20181110_060000',
    'type': 'ARA',
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'Ok avec modif',
    'compteRemise': 'BNP URSSAF',
    'nombreLignes': 96,
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'IMP_PLV_BRED_0170802_072339_cam',
    'type': 'Impayé prélèvement',
    'attendu': true,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'Non requise',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Fichier en doublon',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'IMP_CHQ_CIC_20170802_071535_cam',
    'type': 'Impayé chèque',
    'attendu': false,
    'nombreLignes': 8,
    'montant': 10000,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'OK',
    'compteRemise': 'BNP URSSAF',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'ARA_BRED_20181110_060000',
    'nombreLignes': 9456,
    'type': 'ARA',
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'Non requise',
    'compteRemise': 'BRED RSI',
    'nombreLignes': 844,
    'dateExecution': '2017-07-15T00:00:00.000Z',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'ATELEDEP_TT12_20170913_100000_117',
    'type': 'Télépaiement',
    'attendu': true,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'OK',
    'compteRemise': 'BNP URSSAF',
    'dateExecution': '2017-08-30T00:00:00.000Z',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100700_117',
    'type': 'Télépaiement',
    'attendu': false,
    'nombreLignes': 1000000,
    'montant': 2000000000,
    'etat': 'Validé',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'Non requise',
    'compteRemise': 'BNP URSSAF',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100010_117',
    'type': 'Télépaiement',
    'nombreLignes': 755,
    'attendu': true,
    'etat': 'Signalements',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'OK',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Fichier en doublon',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nombreLignes': 88,
    'nomFichier': 'ARA_BNP_20181110_060000',
    'type': 'ARA',
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'OK',
    'rejetMotif': 'Erreur de structure',
    'compteRemise': 'BRED RSI',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'nombreLignes': 8777,
    'emetteur': 'Banque',
    'nomFichier': 'IMP_PLV_BRED_0170802_072339_cam',
    'type': 'Impayé prélèvement',
    'attendu': true,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'Non requise',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Fichier en doublon',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'IMP_CHQ_CIC_20170802_071535_cam',
    'type': 'Impayé chèque',
    'attendu': false,
    'nombreLignes': 8,
    'montant': 10000,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'compteRemise': 'BRED RSI',
    'validation': 'Ok avec modif',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'ARA_BRED_20181110_060000',
    'nombreLignes': 844,
    'type': 'ARA',
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2018-07-30T10:00:00.000Z',
    'dateExecution': '2018-07-30T10:00:00.000Z',
    'compteRemise': 'BNP URSSAF',
    'validation': 'Ok avec modif',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100000_117',
    'type': 'Télépaiement',
    'attendu': true,
    'nombreLignes': 1234567890,
    'montant': 123456789147258.25,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'dateExecution': '2018-08-15T14:00:00.000Z',
    'compteRemise': 'BNP URSSAF',
    'validation': 'OK',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Aladin',
    'nomFichier': 'TELEDEP_TT12_20170913_100700_117',
    'type': 'Télépaiement',
    'attendu': false,
    'nombreLignes': 1000000,
    'montant': 2000000000,
    'etat': 'Validé',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'dateExecution': '2018-01-15T14:00:00.000Z',
    'compteRemise': 'BNP URSSAF',
    'nombreLignes': 8,
    'validation': 'OK',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100010_117',
    'type': 'Télépaiement',
    'attendu': true,
    'etat': 'Signalements',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'OK',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Fichier en doublon',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'ARA_BNP_20181110_060000',
    'type': 'ARA',
    'nombreLignes': 456,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'compteRemise': 'BRED RSI',
    'nombreLignes': 7895,
    'validation': 'Ok avec modif',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'IMP_PLV_BRED_0170802_072339_cam',
    'type': 'Impayé prélèvement',
    'attendu': true,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'Requise',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Fichier en doublon',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'IMP_CHQ_CIC_20170802_071535_cam',
    'type': 'Impayé chèque',
    'attendu': false,
    'nombreLignes': 8,
    'montant': 10000,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'OK',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Sherlock',
    'nomFichier': 'ARA_BRED_20181110_060000',
    'nombreLignes': 9855,
    'type': 'ARA',
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'dateExecution': '2017-02-06T00:00:00.000Z',
    'compteRemise': 'BNP URSSAF',
    'validation': 'Ok avec modif',
    'nombreLignes': 78554,
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100000_117',
    'type': 'Télépaiement',
    'attendu': true,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'OK',
    'compteRemise': 'BRED RSI',
    'dateExecution': '2017-07-30T00:00:00.000Z',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100700_117',
    'type': 'Télépaiement',
    'attendu': false,
    'nombreLignes': 1000000,
    'montant': 2000000000,
    'etat': 'Validé',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'Requise',
    'compteRemise': 'BNP URSSAF',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100010_117',
    'type': 'Télépaiement',
    'nombreLignes': 7896,
    'attendu': true,
    'etat': 'Signalements',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'Requise',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Fichier en doublon',
    'nombreLignes': 855,
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'ARA_BNP_20181110_060000',
    'type': 'ARA',
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'Ok avec modif',
    'compteRemise': 'BNP URSSAF',
    'nombreLignes': 96,
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'IMP_PLV_BRED_0170802_072339_cam',
    'type': 'Impayé prélèvement',
    'attendu': true,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'Non requise',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Fichier en doublon',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'IMP_CHQ_CIC_20170802_071535_cam',
    'type': 'Impayé chèque',
    'attendu': false,
    'nombreLignes': 8,
    'montant': 10000,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'OK',
    'compteRemise': 'BNP URSSAF',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'ARA_BRED_20181110_060000',
    'nombreLignes': 9456,
    'type': 'ARA',
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'Non requise',
    'compteRemise': 'BRED RSI',
    'nombreLignes': 844,
    'dateExecution': '2017-07-15T00:00:00.000Z',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'ATELEDEP_TT12_20170913_100000_117',
    'type': 'Télépaiement',
    'attendu': true,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'OK',
    'compteRemise': 'BNP URSSAF',
    'dateExecution': '2017-08-30T00:00:00.000Z',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100700_117',
    'type': 'Télépaiement',
    'attendu': false,
    'nombreLignes': 1000000,
    'montant': 2000000000,
    'etat': 'Validé',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'Non requise',
    'compteRemise': 'BNP URSSAF',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100010_117',
    'type': 'Télépaiement',
    'nombreLignes': 755,
    'attendu': true,
    'etat': 'Signalements',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'OK',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Fichier en doublon',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nombreLignes': 88,
    'nomFichier': 'ARA_BNP_20181110_060000',
    'type': 'ARA',
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'OK',
    'rejetMotif': 'Erreur de structure',
    'compteRemise': 'BRED RSI',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'nombreLignes': 8777,
    'emetteur': 'Banque',
    'nomFichier': 'IMP_PLV_BRED_0170802_072339_cam',
    'type': 'Impayé prélèvement',
    'attendu': true,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'Non requise',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Fichier en doublon',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'IMP_CHQ_CIC_20170802_071535_cam',
    'type': 'Impayé chèque',
    'attendu': false,
    'nombreLignes': 8,
    'montant': 10000,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'compteRemise': 'BRED RSI',
    'validation': 'Ok avec modif',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'ARA_BRED_20181110_060000',
    'nombreLignes': 844,
    'type': 'ARA',
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2018-07-30T10:00:00.000Z',
    'dateExecution': '2018-07-30T10:00:00.000Z',
    'compteRemise': 'BNP URSSAF',
    'validation': 'Ok avec modif',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100000_117',
    'type': 'Télépaiement',
    'attendu': true,
    'nombreLignes': 1234567890,
    'montant': 123456789147258.25,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'dateExecution': '2018-08-15T14:00:00.000Z',
    'compteRemise': 'BNP URSSAF',
    'validation': 'OK',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Aladin',
    'nomFichier': 'TELEDEP_TT12_20170913_100700_117',
    'type': 'Télépaiement',
    'attendu': false,
    'nombreLignes': 1000000,
    'montant': 2000000000,
    'etat': 'Validé',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'dateExecution': '2018-01-15T14:00:00.000Z',
    'compteRemise': 'BNP URSSAF',
    'nombreLignes': 8,
    'validation': 'OK',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100010_117',
    'type': 'Télépaiement',
    'attendu': true,
    'etat': 'Signalements',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'OK',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Fichier en doublon',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'ARA_BNP_20181110_060000',
    'type': 'ARA',
    'nombreLignes': 456,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'compteRemise': 'BRED RSI',
    'nombreLignes': 7895,
    'validation': 'Ok avec modif',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'IMP_PLV_BRED_0170802_072339_cam',
    'type': 'Impayé prélèvement',
    'attendu': true,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'Requise',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Fichier en doublon',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'IMP_CHQ_CIC_20170802_071535_cam',
    'type': 'Impayé chèque',
    'attendu': false,
    'nombreLignes': 8,
    'montant': 10000,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'OK',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Sherlock',
    'nomFichier': 'ARA_BRED_20181110_060000',
    'nombreLignes': 9855,
    'type': 'ARA',
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'dateExecution': '2017-02-06T00:00:00.000Z',
    'compteRemise': 'BNP URSSAF',
    'validation': 'Ok avec modif',
    'nombreLignes': 78554,
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100000_117',
    'type': 'Télépaiement',
    'attendu': true,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'OK',
    'compteRemise': 'BRED RSI',
    'dateExecution': '2017-07-30T00:00:00.000Z',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100700_117',
    'type': 'Télépaiement',
    'attendu': false,
    'nombreLignes': 1000000,
    'montant': 2000000000,
    'etat': 'Validé',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'Requise',
    'compteRemise': 'BNP URSSAF',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100010_117',
    'type': 'Télépaiement',
    'nombreLignes': 7896,
    'attendu': true,
    'etat': 'Signalements',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'Requise',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Fichier en doublon',
    'nombreLignes': 855,
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'ARA_BNP_20181110_060000',
    'type': 'ARA',
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'Ok avec modif',
    'compteRemise': 'BNP URSSAF',
    'nombreLignes': 96,
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'IMP_PLV_BRED_0170802_072339_cam',
    'type': 'Impayé prélèvement',
    'attendu': true,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'Non requise',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Fichier en doublon',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'IMP_CHQ_CIC_20170802_071535_cam',
    'type': 'Impayé chèque',
    'attendu': false,
    'nombreLignes': 8,
    'montant': 10000,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'OK',
    'compteRemise': 'BNP URSSAF',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'ARA_BRED_20181110_060000',
    'nombreLignes': 9456,
    'type': 'ARA',
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'Non requise',
    'compteRemise': 'BRED RSI',
    'nombreLignes': 844,
    'dateExecution': '2017-07-15T00:00:00.000Z',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'ATELEDEP_TT12_20170913_100000_117',
    'type': 'Télépaiement',
    'attendu': true,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'OK',
    'compteRemise': 'BNP URSSAF',
    'dateExecution': '2017-08-30T00:00:00.000Z',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100700_117',
    'type': 'Télépaiement',
    'attendu': false,
    'nombreLignes': 1000000,
    'montant': 2000000000,
    'etat': 'Validé',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'Non requise',
    'compteRemise': 'BNP URSSAF',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100010_117',
    'type': 'Télépaiement',
    'nombreLignes': 755,
    'attendu': true,
    'etat': 'Signalements',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'OK',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Fichier en doublon',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nombreLignes': 88,
    'nomFichier': 'ARA_BNP_20181110_060000',
    'type': 'ARA',
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'OK',
    'rejetMotif': 'Erreur de structure',
    'compteRemise': 'BRED RSI',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'nombreLignes': 8777,
    'emetteur': 'Banque',
    'nomFichier': 'IMP_PLV_BRED_0170802_072339_cam',
    'type': 'Impayé prélèvement',
    'attendu': true,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'Non requise',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Fichier en doublon',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'IMP_CHQ_CIC_20170802_071535_cam',
    'type': 'Impayé chèque',
    'attendu': false,
    'nombreLignes': 8,
    'montant': 10000,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'compteRemise': 'BRED RSI',
    'validation': 'Ok avec modif',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'ARA_BRED_20181110_060000',
    'nombreLignes': 844,
    'type': 'ARA',
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2018-07-30T10:00:00.000Z',
    'dateExecution': '2018-07-30T10:00:00.000Z',
    'compteRemise': 'BNP URSSAF',
    'validation': 'Ok avec modif',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100000_117',
    'type': 'Télépaiement',
    'attendu': true,
    'nombreLignes': 1234567890,
    'montant': 123456789147258.25,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'dateExecution': '2018-08-15T14:00:00.000Z',
    'compteRemise': 'BNP URSSAF',
    'validation': 'OK',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Aladin',
    'nomFichier': 'TELEDEP_TT12_20170913_100700_117',
    'type': 'Télépaiement',
    'attendu': false,
    'nombreLignes': 1000000,
    'montant': 2000000000,
    'etat': 'Validé',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'dateExecution': '2018-01-15T14:00:00.000Z',
    'compteRemise': 'BNP URSSAF',
    'nombreLignes': 8,
    'validation': 'OK',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100010_117',
    'type': 'Télépaiement',
    'attendu': true,
    'etat': 'Signalements',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'OK',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Fichier en doublon',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'ARA_BNP_20181110_060000',
    'type': 'ARA',
    'nombreLignes': 456,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'compteRemise': 'BRED RSI',
    'nombreLignes': 7895,
    'validation': 'Ok avec modif',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'IMP_PLV_BRED_0170802_072339_cam',
    'type': 'Impayé prélèvement',
    'attendu': true,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'Requise',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Fichier en doublon',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'IMP_CHQ_CIC_20170802_071535_cam',
    'type': 'Impayé chèque',
    'attendu': false,
    'nombreLignes': 8,
    'montant': 10000,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'OK',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Sherlock',
    'nomFichier': 'ARA_BRED_20181110_060000',
    'nombreLignes': 9855,
    'type': 'ARA',
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'dateExecution': '2017-02-06T00:00:00.000Z',
    'compteRemise': 'BNP URSSAF',
    'validation': 'Ok avec modif',
    'nombreLignes': 78554,
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100000_117',
    'type': 'Télépaiement',
    'attendu': true,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'OK',
    'compteRemise': 'BRED RSI',
    'dateExecution': '2017-07-30T00:00:00.000Z',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100700_117',
    'type': 'Télépaiement',
    'attendu': false,
    'nombreLignes': 1000000,
    'montant': 2000000000,
    'etat': 'Validé',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'Requise',
    'compteRemise': 'BNP URSSAF',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100010_117',
    'type': 'Télépaiement',
    'nombreLignes': 7896,
    'attendu': true,
    'etat': 'Signalements',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'Requise',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Fichier en doublon',
    'nombreLignes': 855,
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'ARA_BNP_20181110_060000',
    'type': 'ARA',
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'Ok avec modif',
    'compteRemise': 'BNP URSSAF',
    'nombreLignes': 96,
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'IMP_PLV_BRED_0170802_072339_cam',
    'type': 'Impayé prélèvement',
    'attendu': true,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'Non requise',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Fichier en doublon',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'IMP_CHQ_CIC_20170802_071535_cam',
    'type': 'Impayé chèque',
    'attendu': false,
    'nombreLignes': 8,
    'montant': 10000,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'OK',
    'compteRemise': 'BNP URSSAF',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'ARA_BRED_20181110_060000',
    'nombreLignes': 9456,
    'type': 'ARA',
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'Non requise',
    'compteRemise': 'BRED RSI',
    'nombreLignes': 844,
    'dateExecution': '2017-07-15T00:00:00.000Z',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'ATELEDEP_TT12_20170913_100000_117',
    'type': 'Télépaiement',
    'attendu': true,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'OK',
    'compteRemise': 'BNP URSSAF',
    'dateExecution': '2017-08-30T00:00:00.000Z',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100700_117',
    'type': 'Télépaiement',
    'attendu': false,
    'nombreLignes': 1000000,
    'montant': 2000000000,
    'etat': 'Validé',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'Non requise',
    'compteRemise': 'BNP URSSAF',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100010_117',
    'type': 'Télépaiement',
    'nombreLignes': 755,
    'attendu': true,
    'etat': 'Signalements',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'OK',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Fichier en doublon',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nombreLignes': 88,
    'nomFichier': 'ARA_BNP_20181110_060000',
    'type': 'ARA',
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'OK',
    'rejetMotif': 'Erreur de structure',
    'compteRemise': 'BRED RSI',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'nombreLignes': 8777,
    'emetteur': 'Banque',
    'nomFichier': 'IMP_PLV_BRED_0170802_072339_cam',
    'type': 'Impayé prélèvement',
    'attendu': true,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'Non requise',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Fichier en doublon',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'IMP_CHQ_CIC_20170802_071535_cam',
    'type': 'Impayé chèque',
    'attendu': false,
    'nombreLignes': 8,
    'montant': 10000,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'compteRemise': 'BRED RSI',
    'validation': 'Ok avec modif',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'ARA_BRED_20181110_060000',
    'nombreLignes': 844,
    'type': 'ARA',
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2018-07-30T10:00:00.000Z',
    'dateExecution': '2018-07-30T10:00:00.000Z',
    'compteRemise': 'BNP URSSAF',
    'validation': 'Ok avec modif',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100000_117',
    'type': 'Télépaiement',
    'attendu': true,
    'nombreLignes': 1234567890,
    'montant': 123456789147258.25,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'dateExecution': '2018-08-15T14:00:00.000Z',
    'compteRemise': 'BNP URSSAF',
    'validation': 'OK',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Aladin',
    'nomFichier': 'TELEDEP_TT12_20170913_100700_117',
    'type': 'Télépaiement',
    'attendu': false,
    'nombreLignes': 1000000,
    'montant': 2000000000,
    'etat': 'Validé',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'dateExecution': '2018-01-15T14:00:00.000Z',
    'compteRemise': 'BNP URSSAF',
    'nombreLignes': 8,
    'validation': 'OK',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100010_117',
    'type': 'Télépaiement',
    'attendu': true,
    'etat': 'Signalements',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'OK',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Fichier en doublon',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'ARA_BNP_20181110_060000',
    'type': 'ARA',
    'nombreLignes': 456,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'compteRemise': 'BRED RSI',
    'nombreLignes': 7895,
    'validation': 'Ok avec modif',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'IMP_PLV_BRED_0170802_072339_cam',
    'type': 'Impayé prélèvement',
    'attendu': true,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'Requise',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Fichier en doublon',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'IMP_CHQ_CIC_20170802_071535_cam',
    'type': 'Impayé chèque',
    'attendu': false,
    'nombreLignes': 8,
    'montant': 10000,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'OK',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Sherlock',
    'nomFichier': 'ARA_BRED_20181110_060000',
    'nombreLignes': 9855,
    'type': 'ARA',
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'dateExecution': '2017-02-06T00:00:00.000Z',
    'compteRemise': 'BNP URSSAF',
    'validation': 'Ok avec modif',
    'nombreLignes': 78554,
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100000_117',
    'type': 'Télépaiement',
    'attendu': true,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'OK',
    'compteRemise': 'BRED RSI',
    'dateExecution': '2017-07-30T00:00:00.000Z',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100700_117',
    'type': 'Télépaiement',
    'attendu': false,
    'nombreLignes': 1000000,
    'montant': 2000000000,
    'etat': 'Validé',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'Requise',
    'compteRemise': 'BNP URSSAF',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100010_117',
    'type': 'Télépaiement',
    'nombreLignes': 7896,
    'attendu': true,
    'etat': 'Signalements',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'Requise',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Fichier en doublon',
    'nombreLignes': 855,
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'ARA_BNP_20181110_060000',
    'type': 'ARA',
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'Ok avec modif',
    'compteRemise': 'BNP URSSAF',
    'nombreLignes': 96,
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'IMP_PLV_BRED_0170802_072339_cam',
    'type': 'Impayé prélèvement',
    'attendu': true,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'Non requise',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Fichier en doublon',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'IMP_CHQ_CIC_20170802_071535_cam',
    'type': 'Impayé chèque',
    'attendu': false,
    'nombreLignes': 8,
    'montant': 10000,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'OK',
    'compteRemise': 'BNP URSSAF',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'ARA_BRED_20181110_060000',
    'nombreLignes': 9456,
    'type': 'ARA',
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'Non requise',
    'compteRemise': 'BRED RSI',
    'nombreLignes': 844,
    'dateExecution': '2017-07-15T00:00:00.000Z',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'ATELEDEP_TT12_20170913_100000_117',
    'type': 'Télépaiement',
    'attendu': true,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'OK',
    'compteRemise': 'BNP URSSAF',
    'dateExecution': '2017-08-30T00:00:00.000Z',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100700_117',
    'type': 'Télépaiement',
    'attendu': false,
    'nombreLignes': 1000000,
    'montant': 2000000000,
    'etat': 'Validé',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'Non requise',
    'compteRemise': 'BNP URSSAF',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100010_117',
    'type': 'Télépaiement',
    'nombreLignes': 755,
    'attendu': true,
    'etat': 'Signalements',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'OK',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Fichier en doublon',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nombreLignes': 88,
    'nomFichier': 'ARA_BNP_20181110_060000',
    'type': 'ARA',
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'OK',
    'rejetMotif': 'Erreur de structure',
    'compteRemise': 'BRED RSI',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'nombreLignes': 8777,
    'emetteur': 'Banque',
    'nomFichier': 'IMP_PLV_BRED_0170802_072339_cam',
    'type': 'Impayé prélèvement',
    'attendu': true,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'Non requise',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Fichier en doublon',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'IMP_CHQ_CIC_20170802_071535_cam',
    'type': 'Impayé chèque',
    'attendu': false,
    'nombreLignes': 8,
    'montant': 10000,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'compteRemise': 'BRED RSI',
    'validation': 'Ok avec modif',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'ARA_BRED_20181110_060000',
    'nombreLignes': 844,
    'type': 'ARA',
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2018-07-30T10:00:00.000Z',
    'dateExecution': '2018-07-30T10:00:00.000Z',
    'compteRemise': 'BNP URSSAF',
    'validation': 'Ok avec modif',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100000_117',
    'type': 'Télépaiement',
    'attendu': true,
    'nombreLignes': 1234567890,
    'montant': 123456789147258.25,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'dateExecution': '2018-08-15T14:00:00.000Z',
    'compteRemise': 'BNP URSSAF',
    'validation': 'OK',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Aladin',
    'nomFichier': 'TELEDEP_TT12_20170913_100700_117',
    'type': 'Télépaiement',
    'attendu': false,
    'nombreLignes': 1000000,
    'montant': 2000000000,
    'etat': 'Validé',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'dateExecution': '2018-01-15T14:00:00.000Z',
    'compteRemise': 'BNP URSSAF',
    'nombreLignes': 8,
    'validation': 'OK',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100010_117',
    'type': 'Télépaiement',
    'attendu': true,
    'etat': 'Signalements',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'OK',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Fichier en doublon',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'ARA_BNP_20181110_060000',
    'type': 'ARA',
    'nombreLignes': 456,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'compteRemise': 'BRED RSI',
    'nombreLignes': 7895,
    'validation': 'Ok avec modif',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'IMP_PLV_BRED_0170802_072339_cam',
    'type': 'Impayé prélèvement',
    'attendu': true,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'Requise',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Fichier en doublon',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'IMP_CHQ_CIC_20170802_071535_cam',
    'type': 'Impayé chèque',
    'attendu': false,
    'nombreLignes': 8,
    'montant': 10000,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'OK',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Sherlock',
    'nomFichier': 'ARA_BRED_20181110_060000',
    'nombreLignes': 9855,
    'type': 'ARA',
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'dateExecution': '2017-02-06T00:00:00.000Z',
    'compteRemise': 'BNP URSSAF',
    'validation': 'Ok avec modif',
    'nombreLignes': 78554,
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100000_117',
    'type': 'Télépaiement',
    'attendu': true,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'OK',
    'compteRemise': 'BRED RSI',
    'dateExecution': '2017-07-30T00:00:00.000Z',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100700_117',
    'type': 'Télépaiement',
    'attendu': false,
    'nombreLignes': 1000000,
    'montant': 2000000000,
    'etat': 'Validé',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'Requise',
    'compteRemise': 'BNP URSSAF',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100010_117',
    'type': 'Télépaiement',
    'nombreLignes': 7896,
    'attendu': true,
    'etat': 'Signalements',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'Requise',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Fichier en doublon',
    'nombreLignes': 855,
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'ARA_BNP_20181110_060000',
    'type': 'ARA',
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'Ok avec modif',
    'compteRemise': 'BNP URSSAF',
    'nombreLignes': 96,
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'IMP_PLV_BRED_0170802_072339_cam',
    'type': 'Impayé prélèvement',
    'attendu': true,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'Non requise',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Fichier en doublon',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'IMP_CHQ_CIC_20170802_071535_cam',
    'type': 'Impayé chèque',
    'attendu': false,
    'nombreLignes': 8,
    'montant': 10000,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'OK',
    'compteRemise': 'BNP URSSAF',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'ARA_BRED_20181110_060000',
    'nombreLignes': 9456,
    'type': 'ARA',
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'Non requise',
    'compteRemise': 'BRED RSI',
    'nombreLignes': 844,
    'dateExecution': '2017-07-15T00:00:00.000Z',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'ATELEDEP_TT12_20170913_100000_117',
    'type': 'Télépaiement',
    'attendu': true,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'OK',
    'compteRemise': 'BNP URSSAF',
    'dateExecution': '2017-08-30T00:00:00.000Z',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100700_117',
    'type': 'Télépaiement',
    'attendu': false,
    'nombreLignes': 1000000,
    'montant': 2000000000,
    'etat': 'Validé',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'Non requise',
    'compteRemise': 'BNP URSSAF',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100010_117',
    'type': 'Télépaiement',
    'nombreLignes': 755,
    'attendu': true,
    'etat': 'Signalements',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'OK',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Fichier en doublon',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nombreLignes': 88,
    'nomFichier': 'ARA_BNP_20181110_060000',
    'type': 'ARA',
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'OK',
    'rejetMotif': 'Erreur de structure',
    'compteRemise': 'BRED RSI',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'nombreLignes': 8777,
    'emetteur': 'Banque',
    'nomFichier': 'IMP_PLV_BRED_0170802_072339_cam',
    'type': 'Impayé prélèvement',
    'attendu': true,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'Non requise',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Fichier en doublon',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'IMP_CHQ_CIC_20170802_071535_cam',
    'type': 'Impayé chèque',
    'attendu': false,
    'nombreLignes': 8,
    'montant': 10000,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'compteRemise': 'BRED RSI',
    'validation': 'Ok avec modif',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'ARA_BRED_20181110_060000',
    'nombreLignes': 844,
    'type': 'ARA',
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2018-07-30T10:00:00.000Z',
    'dateExecution': '2018-07-30T10:00:00.000Z',
    'compteRemise': 'BNP URSSAF',
    'validation': 'Ok avec modif',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100000_117',
    'type': 'Télépaiement',
    'attendu': true,
    'nombreLignes': 1234567890,
    'montant': 123456789147258.25,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'dateExecution': '2018-08-15T14:00:00.000Z',
    'compteRemise': 'BNP URSSAF',
    'validation': 'OK',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Aladin',
    'nomFichier': 'TELEDEP_TT12_20170913_100700_117',
    'type': 'Télépaiement',
    'attendu': false,
    'nombreLignes': 1000000,
    'montant': 2000000000,
    'etat': 'Validé',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'dateExecution': '2018-01-15T14:00:00.000Z',
    'compteRemise': 'BNP URSSAF',
    'nombreLignes': 8,
    'validation': 'OK',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100010_117',
    'type': 'Télépaiement',
    'attendu': true,
    'etat': 'Signalements',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'OK',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Fichier en doublon',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'ARA_BNP_20181110_060000',
    'type': 'ARA',
    'nombreLignes': 456,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'compteRemise': 'BRED RSI',
    'nombreLignes': 7895,
    'validation': 'Ok avec modif',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'IMP_PLV_BRED_0170802_072339_cam',
    'type': 'Impayé prélèvement',
    'attendu': true,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'Requise',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Fichier en doublon',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'IMP_CHQ_CIC_20170802_071535_cam',
    'type': 'Impayé chèque',
    'attendu': false,
    'nombreLignes': 8,
    'montant': 10000,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'OK',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Sherlock',
    'nomFichier': 'ARA_BRED_20181110_060000',
    'nombreLignes': 9855,
    'type': 'ARA',
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'dateExecution': '2017-02-06T00:00:00.000Z',
    'compteRemise': 'BNP URSSAF',
    'validation': 'Ok avec modif',
    'nombreLignes': 78554,
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100000_117',
    'type': 'Télépaiement',
    'attendu': true,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'OK',
    'compteRemise': 'BRED RSI',
    'dateExecution': '2017-07-30T00:00:00.000Z',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100700_117',
    'type': 'Télépaiement',
    'attendu': false,
    'nombreLignes': 1000000,
    'montant': 2000000000,
    'etat': 'Validé',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'Requise',
    'compteRemise': 'BNP URSSAF',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100010_117',
    'type': 'Télépaiement',
    'nombreLignes': 7896,
    'attendu': true,
    'etat': 'Signalements',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'Requise',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Fichier en doublon',
    'nombreLignes': 855,
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'ARA_BNP_20181110_060000',
    'type': 'ARA',
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'Ok avec modif',
    'compteRemise': 'BNP URSSAF',
    'nombreLignes': 96,
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'IMP_PLV_BRED_0170802_072339_cam',
    'type': 'Impayé prélèvement',
    'attendu': true,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'Non requise',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Fichier en doublon',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'IMP_CHQ_CIC_20170802_071535_cam',
    'type': 'Impayé chèque',
    'attendu': false,
    'nombreLignes': 8,
    'montant': 10000,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'OK',
    'compteRemise': 'BNP URSSAF',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nomFichier': 'ARA_BRED_20181110_060000',
    'nombreLignes': 9456,
    'type': 'ARA',
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'Non requise',
    'compteRemise': 'BRED RSI',
    'nombreLignes': 844,
    'dateExecution': '2017-07-15T00:00:00.000Z',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'ATELEDEP_TT12_20170913_100000_117',
    'type': 'Télépaiement',
    'attendu': true,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'OK',
    'compteRemise': 'BNP URSSAF',
    'dateExecution': '2017-08-30T00:00:00.000Z',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100700_117',
    'type': 'Télépaiement',
    'attendu': false,
    'nombreLignes': 1000000,
    'montant': 2000000000,
    'etat': 'Validé',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'Non requise',
    'compteRemise': 'BNP URSSAF',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Teledep',
    'nomFichier': 'TELEDEP_TT12_20170913_100010_117',
    'type': 'Télépaiement',
    'nombreLignes': 755,
    'attendu': true,
    'etat': 'Signalements',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-02T00:00:00.000Z',
    'validation': 'OK',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Fichier en doublon',
    'rejetDetail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'emetteur': 'Banque',
    'nombreLignes': 88,
    'nomFichier': 'ARA_BNP_20181110_060000',
    'type': 'ARA',
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'OK',
    'rejetMotif': 'Erreur de structure',
    'compteRemise': 'BRED RSI',
    'rejetDetail': 'Lorem ipsum dolor sit amet',
    'nombreLignes': 8777,
    'emetteur': 'Banque',
    'nomFichier': 'IMP_PLV_BRED_0170802_072339_cam',
    'type': 'Impayé prélèvement',
    'attendu': true,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'validation': 'Non requise',
    'compteRemise': 'BRED RSI',
    'rejetMotif': 'Fichier en doublon',
    'rejetDetail': 'Lorem ipsum dolor sit amet',
    'emetteur': 'Banque',
    'nomFichier': 'IMP_CHQ_CIC_20170802_071535_cam',
    'type': 'Impayé chèque',
    'attendu': false,
    'nombreLignes': 8,
    'montant': 10000,
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  },
  {
    'dateIntegration': '2017-08-01T00:00:00.000Z',
    'compteRemise': 'BRED RSI',
    'validation': 'Ok avec modif',
    'rejetMotif': 'Erreur de structure',
    'rejetDetail': 'Lorem ipsum dolor sit amet',
    'emetteur': 'Banque',
    'nomFichier': 'ARA_BRED_20181110_060000',
    'nombreLignes': 844,
    'type': 'ARA',
    'etat': 'Contrôle OK',
    'detail': [
      [
        '10 - Prélèvement bancaire',
        700000,
        1000000000
      ],
      [
        '14 - Carte bancaire',
        100000,
        500000000
      ],
      [
        '19 - Télérèglement',
        200000,
        500000000
      ]
    ]
  }
];

