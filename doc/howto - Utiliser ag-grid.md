  [![Fulstack2](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/zone-ressources/images-bt/raw/master/Fullstacklarge.png)](https://recouv.sharepoint.com/sites/bureautechniquedsi-sded/SitePages/Socle-FullStack.aspx) 
                                                         
[![Normes et docs](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/zone-ressources/images-bt/raw/master/sharepoint-35.png)](https://recouv.sharepoint.com/:f:/r/sites/bureautechniquedsi-sded/Documents%20partages/Architecture%20et%20Expertise%20Applicative/Norme%20Frontend%20Angular%20-%20Bootstrap)  
 [![Sources Fullstack](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/zone-ressources/images-bt/raw/master/gitlab-35.png)](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/fullstack/fullstack-spa-intranet)
  [![Redmine Fullstack](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/zone-ressources/images-bt/raw/master/redmine-35.png)](http://redmine.altair.recouv/projects/devintrafront/issues)
  [![Yammer](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/zone-ressources/images-bt/raw/master/yammer-35.png)](https://www.yammer.com/recouv.fr/#/threads/inGroup?type=in_group&feedId=16003777&view=all)
  [![Contact](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/zone-ressources/images-bt/raw/master/email-35.png)](mailto:ac750-dsi-sded-bt-aea@acoss.fr)


# Première utilisation de ag-grid

[**ag-grid**](https://www.ag-grid.com) est une librairie permettant de réaliser des tableaux avec des fonctionnalités complexes

La liste des fonctionnalités est disponible [**ici**](https://www.ag-grid.com/features-overview/)

Si c'est la première fois que vous utilisez cette librairie nous vous conseillons de commencer par ce [**tutoriel**](https://www.ag-grid.com/angular-getting-started/)

Ensuite vous pouvez consulter [**la documentation officielle**](https://www.ag-grid.com/documentation-main/documentation.php) pour l'utilisation des autres fonctionnalités

# Licence "enterprise" pour les fonctionnalités avancées

**/!\ Aggrid ne peut être utilisé que pour les applications internes (les intranets) Nous ne disposons pas de la licence pour l'utiliser sur internet.**

Certaines fonctionnalités de la librairie sont conditionnées par l'utilisation d'une licence "Enterprise". 

La liste de ces fonctionnalités est disponible [**ici**](https://www.ag-grid.com/javascript-grid-set-license/) 

Le bureau technique dispose de licences qui peuvent être fournies pour les projets.

Vous pouvez nous contacter [**ici**](mailto:ac750-dsi-sded-bt-aea@acoss.fr) pour plus de détails

La licence doit ensuite être déclarée dans votre application dans le fichier `main.ts`: 

```
import {LicenseManager} from 'ag-grid-enterprise';

// Licence pour Ag-Grid
LicenseManager.setLicenseKey('Evaluation_License_Valid_Until__zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz');
```

Vous trouverez un exemple [**ici**](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/fullstack/fullstack-spa-intranet/blob/3f61af0adced9985c9f0f40ce65ed11580103734/src/main.ts)

La documentation officielle pour la mise en place de la licence est disponible à [**cette adresse**](https://www.ag-grid.com/javascript-grid-set-license/#setting-the-license-key)


# Personnaliser le thème des tableaux

ag-grid propose différents thèmes graphique pour ces tableaux, liste est disponible [**ici**](https://www.ag-grid.com/javascript-grid-themes-provided/)

Ces différents thèmes peuvent être étendus pour une personnalisation plus importante, [**par exemple en modifiant certaines variables**](https://www.ag-grid.com/javascript-grid-themes-provided/#customizing-sass-variables)

Le bureau technique met à disposition la feuille de style [**theme-ag-grid.scss**](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/fullstack/fullstack-spa-intranet/blob/61098d773c2b7331e1d7b311ec827eb6ecdd405d/src/styles/theme-ag-grid.scss) qui est un exemple de thème personnalisé et basé sur la charte graphique. 

# Exemple d'utilisation de ag-grid

L'application fullstack-spa-intranet met en oeuvre plusieurs [**exemples de tableaux**](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/fullstack/fullstack-spa-intranet/tree/master/src/app/views/elements-complexes/tableau-ag-grid-exemples) illustrant les possibilités d'ag-grid

Vous trouverez [**ici**](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/fullstack/fullstack-spa-intranet/tree/master/src/app/ui-components/tableau-complexe) les composants qui sont communs aux différents exemples.

# Support sur ag-grid

En cas de problème lors de l'utilisation des tableaux il est important d'identifier si le bug se situe au niveau d'ag-grid ou des composants supplémentaires proposés par le Bureau Technique.

Voici la méthode à suivre :

1.  Vérifier si le problème survient sur un tabelau ag-grid de base sans composant personnalisé

Il faut d'abord mettre à jour ag-grid dans la dernière version supportée par la licence.

Si le problème est toujours présent, nous disposons d'un accès au support d'ag-grid. La procédure à suivre est disponible sous [**teams**](https://teams.microsoft.com/l/channel/19%3a36c049b5ae4c41a9bd8356596292c6b2%40thread.skype/Support%2520Aggrid?groupId=a9e186fd-447b-4c7f-aab8-d71ecbed4cbd&tenantId=12b674a1-3497-4997-b4ab-2a40bf0e5139)

2.  Le bug est au niveau des composants proposés par le BT pour personnaliser ag-grid

Créer un ticket [**Redmine**](http://redmine.altair.recouv/projects/devintrafront?jump=welcome) en décrivant le problème et une méthode simple pour reproduire le problème


