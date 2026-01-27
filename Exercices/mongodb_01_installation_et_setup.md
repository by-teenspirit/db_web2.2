# Exercices MongoDB — 01. Installation et setup

## Objectif

Être capable de se connecter à MongoDB et de charger le fil rouge `shop`.

## Exercice 1 — Se connecter avec `mongosh`

1) Lancez `mongosh` (local, Docker ou Atlas)  
2) Affichez la version : `mongosh --version`

## Exercice 2 — Charger les données `shop`

Dans `mongosh`, depuis la racine du repo :

```js
load("data/shop_mongodb_seed.js");
use("shop");
show collections;
```

## Exercice 3 — Vérifications rapides

1) Affichez un client (`findOne`)  
2) Comptez le nombre de produits  
3) Comptez le nombre de commandes

## Exercice 4 — Explorer un document

Récupérez une commande et identifiez :
- le `customer_id`
- le tableau `items`
- le champ `ordered_at` (type attendu ?)

