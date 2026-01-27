# Exercices MongoDB — 09. Indexation & performance

Préparation :

```js
use("shop");
```

## Exercice 1 — Index unique

Vérifiez qu’un index unique existe sur `products.sku`.

## Exercice 2 — Explain

Sur la requête :

```js
db.orders.find({ status: "paid" }).sort({ ordered_at: -1 });
```

1) Lancez `explain("executionStats")`  
2) Vérifiez si un index est utilisé

## Exercice 3 — Index composé (bonus)

Ajoutez l’index le plus logique si nécessaire, puis relancez `explain`.

