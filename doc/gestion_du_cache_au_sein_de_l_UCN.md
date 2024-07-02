# Gestion du cache au sein de l'URSSAF Caisse National

Plusieurs applications Urssaf Caisse Nationale ont rencontré des problèmes de cache sur leur application Angular.
Ce petit guide a pour but de décrire comment est géré le cache au sein de l'entreprise, mais aussi donne quelques préconisations afin d'éviter de rencontrer ces problèmes.

## Les directives dans les entêtes HTTP

La **seule** directive qui est prise en compte/respectée par les équipements réseaux (et notamment par le netscaler) au sein de l'UCN est la directive 
"no-cache". Cette directive doit être positionnée dans le header **cache-control**.

> Ce fonctionnement est propre à l'Urssaf Caisse National

## La durée de mise en cache des fichiers

Tous les fichiers qui ne contiennent pas cette directive "NO CACHE", sont mis en cache. La durée de vie de ce cache dépend de
l'extension du fichier : 

* éléments mis en cache 15 minutes : 
  * Feuille de style : *.css
  * Images :  *.jpeg / *.jpg / *.gif / *.png / *.svg
* Elements mis en cache 30 secondes :
  * Javascript : *.js
* éléments non mis en cache : 
  * Fichier JSON : *json
  * URL contenant : captcha / recaptcha / main.*js / runtime.*js / deferredjs
  * Fichier avec Header : "max-age=0 / no-cache no-store"

> Attention : Il est déconseillé de mettre des informations de rétention dans les entêtes HTTP de vos fichiers. En effet, les équipements réseaux
> de l'UCN écraserons ces informations. Seuls les délais de rétention cités ci-dessus seront appliqués.

> En d'autres termes, si vous voulez que votre fichier ne soit pas mis en cache il faut mettre l'entête no-cache.
> Sinon, il ne faut rien mettre (max-age et les autres informations seront écrasées)

Notez par ailleurs que :

* le cache au niveau des netscalers est vidé à minuit et midi tous les jours.
* La configuration sur les netscalers de production et hors-production est strictement identique

## Éviter des problèmes de cache avec les applications Angular

Une SPA est lancée à partir d'un fichier index.html. Dans le cas d'Angular cette page HTML fait référence à plusieurs fichiers 
javascript.

On peut donc rencontrer un problème de mise en cache lors de livraison d'une nouvelle version si : 

* le fichier index.html est mis en cache 
* ou si les fichiers javascript appelés par cette page sont mis en cache.

Pour éviter ces problèmes, voici quelques préconisations : 

* Compiler votre application Angular en mode production. Vos fichiers javascript seront alors suffixés par un numéro unique.
* Ajouter dans le header de la page index.html la prérogative "max-age=0 / no-cache no-store" dans le header "cache-control"
     
      <meta http-equiv="cache-control" content="max-age=0, no-cache, no-store"/>

* Ajouter une configuration sur votre serveur HTTP pour ajouter les bons headers aux éléments que vous ne voulez pas mettre en cache. Exemple de configuration apache: 

      <LocationMatch "(\/(.*)\/|index\.(htm|html)|assets\/config\/(.*)\.json)$">
        Header set Cache-Control "max-age=0, no-cache, no-store, must-revalidate"
        Header set Pragma "no-cache"
        Header set Expires 0
      </LocationMatch>

Par défaut au sein de l'UCN, cette configuration va (ou va être) appliquée pour les applications Angular sur les plateforme HAWAI. Cette configuration
est réalisée sur les serveurs apache par l'équipe d'intégrateur HAWAI.

