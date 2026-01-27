---
marp: true
title: "MongoDB — 06. Relations : embedding, references, $lookup"
paginate: true
header: "[← Index MongoDB](https://antoine07.github.io/db_web2/mongodb_index.html)"
footer: "[← Index MongoDB](https://antoine07.github.io/db_web2/mongodb_index.html)"
---

# MongoDB — 06
## Relations : embedding, references, `$lookup`

---

## Pattern 1 — Embedding

Ex : le panier (items) **dans** la commande :

```js
db.orders.findOne({}, { items: 1, _id: 0 });
```

---

## Pattern 2 — References

Ex : `orders.customer_id` référence `customers._id`

```js
db.orders.findOne({}, { customer_id: 1 });
```

---

## `$lookup` (équivalent “join”)

```js
db.orders.aggregate([
  { $match: { status: "paid" } },
  {
    $lookup: {
      from: "customers",
      localField: "customer_id",
      foreignField: "_id",
      as: "customer"
    }
  },
  { $unwind: "$customer" }
]);
```

---

## Quand utiliser `$lookup` ?

- Lecture “back-office” (reporting, admin)
- Cas où la duplication serait trop coûteuse
- À éviter en boucle sur des gros volumes sans index

---

## À retenir

- MongoDB n’interdit pas les relations : il propose plusieurs patterns
- `embedding` simplifie la lecture, `references` simplifie la mise à jour

---

## Exercices

- Exercices : `Exercices/mongodb_06_relations_lookup.md`

