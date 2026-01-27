# Exercices MongoDB — 08. Agrégation (pipeline)

Préparation :

```js
use("shop");
```

## Exercice 1 — CA total (paid)

Calculez le chiffre d’affaires total des commandes `paid`.

Indice : `$unwind` + `$group` + `$sum` + `$multiply`.

## Exercice 2 — Quantités vendues par produit

Pour les commandes `paid`, calculez la quantité totale vendue par `product_id`.

## Exercice 3 — Top 3 produits (bonus)

Top 3 produits par quantité vendue (paid).

