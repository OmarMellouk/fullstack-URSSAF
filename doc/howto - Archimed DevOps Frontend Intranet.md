  [![Fulstack2](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/zone-ressources/images-bt/raw/master/Fullstacklarge.png)](https://recouv.sharepoint.com/sites/bureautechniquedsi-sded/SitePages/Socle-FullStack.aspx) 
                                                         
[![Normes et docs](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/zone-ressources/images-bt/raw/master/sharepoint-35.png)](https://recouv.sharepoint.com/:f:/r/sites/bureautechniquedsi-sded/Documents%20partages/Architecture%20et%20Expertise%20Applicative/Norme%20Frontend%20Angular%20-%20Bootstrap)  
 [![Sources Fullstack](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/zone-ressources/images-bt/raw/master/gitlab-35.png)](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/fullstack/fullstack-spa-intranet)
  [![Redmine Fullstack](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/zone-ressources/images-bt/raw/master/redmine-35.png)](http://redmine.altair.recouv/projects/devintrafront/issues)
  [![Yammer](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/zone-ressources/images-bt/raw/master/yammer-35.png)](https://www.yammer.com/recouv.fr/#/threads/inGroup?type=in_group&feedId=16003777&view=all)
  [![Contact](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/zone-ressources/images-bt/raw/master/email-35.png)](mailto:ac750-dsi-sded-bt-aea@acoss.fr)

Archimed DevOps Frontend Intranet
=========================================

# En deux mots …

Pour pouvoir utiliser la mire de connexion standard URSSAF Archimed (PSS) l'URI de votre application Frontend doit être déclarée en liste blanche.

Cela peut être réalisé via des demandes Redmine à l'équipe Archimed ou via l'usage du pluggin DevOps Frontend Intranet Archimed.

L'usage du mode DevOps est recommandé par l'équipe Archimed car il simplifie la mise en place sur les divers environnements.


# Documentations liées

Documentation Archimed : https://readthedocs.cnp.recouv/docs/documentation-archimed/fr/latest/

Documentation DevOps Frontend Archimed : https://readthedocs.cnp.recouv/docs/documentation-archimed/fr/latest/Developpeurs/GuidesTechnique/installeurDevopsFrontend.html

# Configuration

Le composant DevOps Frontend est pré-configuré au sein de Fullstack SPA Intranet.

Il vous suffit donc de réaliser les changements suivants : 
1. /devops/configuration/conf_frontend-intranet_FULLSTACK_001.json
* Renommer le fichier en utilisant le nom de votre application (1)
* Modifier le Client ID de votre application
* Configurer les URL de redirection spécifiques à votre application
> Fullstack prévoit deux redirections : Une pour l'envrionnement HAWAI et une pour l'envrionnement PFS.
> Il est probable qu'un seul host suffise à votre application et donc que la ligne "@@fullstack.hostpfs@@/fullstack_fe/retour_pss" soit à supprimer

2. /Archimedfile
* Mettre à jour le nom de fichier précédement renommé (1)
* Renseigner au besoin des variables pré-configurées par environnement (host, clientidfc et clientsecretfc)
> Il est probable qu'un seul host suffise à votre application et donc que la ligne "hostpfs": "http://fullstackfe-gidn.dev.k8s.recouv", soit à supprimer

# Création et installation du Bundle

Le step de publication et d'installation du Bundle DevOps a été intégré au pipeline Jenkins.

Pour réaliser l'installation il suffit donc de lancer un build en cochant :
* UPLOAD_INTEGRATION
* INSTALL_FE_ASSEMBLAGE

Pour vérifier la bonne installation du Bundle il est possible de consulter les logs d'exécution du job Jenkins.

Ils doivent inclure la ligne : [main] INFO fr.acoss.mediation.archimed.tools.ArchimedFrontendInstaller - Installation terminée.
Sans erreur spécifiques affichées.

L'installation est réalisée en mode synchrone afin d'afficher d'éventuelles erreurs.