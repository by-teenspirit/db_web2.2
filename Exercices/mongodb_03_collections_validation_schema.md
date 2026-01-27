# Exercices MongoDB — 03. Collections & validation de schéma

Préparation :

```js
use("shop");
```

## Exercice 1 — Comprendre les types

1) Affichez un document `customers`  
2) Identifiez le type de `_id` et `created_at`

## Exercice 2 — Validation (concept)

Sur `products`, proposez une validation minimale (liste) :
- champs obligatoires
- types attendus (string / number / date)

## Exercice 3 — (Optionnel) Appliquer une validation

Appliquez une validation `jsonSchema` sur `products` (au moins `name`, `sku`, `price`).

