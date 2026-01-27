---
marp: true
title: "MongoDB — 05. Requêtes de base"
paginate: true
header: "[← Index MongoDB](https://antoine07.github.io/db_web2/mongodb_index.html)"
footer: "[← Index MongoDB](https://antoine07.github.io/db_web2/mongodb_index.html)"
---

# MongoDB — 05
## `find`, filtres, tri, pagination

---

## Préparation

```js
use("shop");
```

---

## Trouver des documents

```js
db.products.find();
db.products.find({ stock: { $gt: 0 } });
```

---

## Projection (choisir les champs)

```js
db.products.find(
  { stock: { $gt: 0 } },
  { sku: 1, name: 1, price: 1, _id: 0 }
);
```

---

## Tri + pagination

```js
db.products.find({}, { name: 1, price: 1 })
  .sort({ price: -1 })
  .limit(5);
```

---

## Opérateurs courants

- Comparaisons : `$eq`, `$ne`, `$gt`, `$gte`, `$lt`, `$lte`
- Ensembles : `$in`, `$nin`
- Texte : `$regex` (avec prudence)
- Tableaux : `$all`, `$elemMatch`

---

## Filtres sur champs imbriqués

```js
db.customers.find({ "address.city": "Paris" });
```

---

## À retenir

- `find(query, projection)` + `sort/limit/skip` = base du “SELECT”
- Toujours limiter/projeter si besoin (perf + réseau)

---

## Exercices

- Exercices : `Exercices/mongodb_05_requetes_de_base.md`

