---
marp: true
title: "MongoDB — 09. Indexation & performance"
paginate: true
header: "[← Index MongoDB](https://antoine07.github.io/db_web2/mongodb_index.html)"
footer: "[← Index MongoDB](https://antoine07.github.io/db_web2/mongodb_index.html)"
---

# MongoDB — 09
## Indexation & performance

---

## Pourquoi indexer ?

- Accélérer les filtres (`match`) et les tris (`sort`)
- Réduire le “scan” (lecture inutile)

---

## Créer des index

```js
db.products.createIndex({ sku: 1 }, { unique: true });
db.orders.createIndex({ status: 1, ordered_at: -1 });
```

---

## Index composés (ordre important)

Règle simple :

- filtre (`status`) puis tri (`ordered_at`)

```js
db.orders.find({ status: "paid" }).sort({ ordered_at: -1 });
```

---

## Vérifier avec `explain`

```js
db.orders.find({ status: "paid" })
  .sort({ ordered_at: -1 })
  .explain("executionStats");
```

---

## Attention aux `$regex`

- Peut empêcher l’usage d’index (selon le pattern)
- Préférer : `text index` (selon les besoins) ou un champ normalisé

---

## À retenir

- Indexer les champs utilisés en filtre/tri/join (`$lookup`)
- Mesurer avec `explain()` (pas au feeling)

---

## Exercices

- Exercices : `Exercices/mongodb_09_indexation_performance.md`

