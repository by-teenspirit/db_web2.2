# Exercices MongoDB — 02. Modèle document (BSON)

Préparation :

```js
use("shop");
```

## Exercice 1 — Projection

Listez les clients avec uniquement :
- `email`
- `created_at`

Sans `_id`.

## Exercice 2 — Champs imbriqués

1) Trouvez les clients dont `address.city` vaut `Paris`  
2) Affichez seulement `email` + `address.city`

## Exercice 3 — Tableaux

1) Trouvez les clients qui ont le tag `newsletter`  
2) Trouvez les clients qui ont **à la fois** `vip` et `newsletter`

## Exercice 4 — Dates (bonus)

Trouvez les commandes dont `ordered_at` est après le `2025-01-11`.

