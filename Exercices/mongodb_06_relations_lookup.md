# Exercices MongoDB — 06. Relations & `$lookup`

Préparation :

```js
use("shop");
```

## Exercice 1 — Joindre une commande à son client

Avec un pipeline `aggregate` + `$lookup` :

1) Prenez les commandes `paid`  
2) Ajoutez le client correspondant  
3) Sortez `email` + `ordered_at` + `status`

## Exercice 2 — Joindre des items à des produits (bonus)

Objectif : enrichir les items avec les infos du produit (`sku`, `name`).

Indice : `$unwind` puis `$lookup` puis `$group`.

