---
marp: true
title: "MongoDB — 08. Agrégation (pipeline)"
paginate: true
header: "[← Index MongoDB](https://antoine07.github.io/db_web2/mongodb_index.html)"
footer: "[← Index MongoDB](https://antoine07.github.io/db_web2/mongodb_index.html)"
---

# MongoDB — 08
## Agrégation (pipeline)

---

## Pourquoi l’agrégation ?

- “GROUP BY”, calculs, transformations
- Reporting (CA, panier moyen, top produits…)

---

## Structure d’un pipeline

```js
db.orders.aggregate([
  { $match: { status: "paid" } },
  { $unwind: "$items" },
  { $group: { _id: "$items.product_id", qty: { $sum: "$items.quantity" } } }
]);
```

---

## Étapes courantes

- `$match` : filtre
- `$project` : sélectionner/calculer des champs
- `$unwind` : “déplier” un tableau
- `$group` : agrégation
- `$sort`, `$limit`

---

## Exemple : CA total (paid)

```js
db.orders.aggregate([
  { $match: { status: "paid" } },
  { $unwind: "$items" },
  {
    $group: {
      _id: null,
      revenue: { $sum: { $multiply: ["$items.quantity", "$items.unit_price"] } }
    }
  }
]);
```

---

## À retenir

- L’agrégation est puissante, mais peut coûter cher sans index
- Toujours commencer par `$match` (réduire le volume tôt)

---

## Exercices

- Exercices : `Exercices/mongodb_08_aggregation_pipeline.md`

