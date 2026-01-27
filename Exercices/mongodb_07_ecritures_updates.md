# Exercices MongoDB — 07. Écritures : updates + upsert

Préparation :

```js
use("shop");
```

## Exercice 1 — `insertOne`

Insérez un nouveau produit :
- `sku`: `NEW-001`
- `name`: `Produit test`
- `price`: `9.99`
- `stock`: `3`

## Exercice 2 — `$set` et `$inc`

1) Mettez le stock de `NEW-001` à `10`  
2) Incrémentez le stock de `NEW-001` de `+2`

## Exercice 3 — Upsert

Créez (ou mettez à jour) un produit `NEW-002` avec `upsert: true`.

## Exercice 4 — Delete

Supprimez le produit `NEW-001`.

