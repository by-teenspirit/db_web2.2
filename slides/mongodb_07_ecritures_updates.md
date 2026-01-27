---
marp: true
title: "MongoDB — 07. Écritures : insert/update, opérateurs, upsert"
paginate: true
header: "[← Index MongoDB](https://antoine07.github.io/db_web2/mongodb_index.html)"
footer: "[← Index MongoDB](https://antoine07.github.io/db_web2/mongodb_index.html)"
---

# MongoDB — 07
## Écritures : `insert`, `update`, opérateurs, upsert

---

## Insérer

```js
db.products.insertOne({
  sku: "NEW-001",
  name: "Produit démo",
  price: 9.99,
  stock: 5
});
```

---

## Mettre à jour (important : opérateurs)

```js
db.products.updateOne(
  { sku: "NEW-001" },
  { $set: { stock: 10 } }
);
```

---

## Opérateurs utiles

- `$set`, `$unset`
- `$inc` (compteurs)
- `$push`, `$pull` (tableaux)
- `$addToSet` (éviter doublons)

---

## Upsert

“Met à jour sinon crée”

```js
db.products.updateOne(
  { sku: "NEW-002" },
  { $set: { name: "Auto", price: 19.9, stock: 1 } },
  { upsert: true }
);
```

---

## Delete

```js
db.products.deleteOne({ sku: "NEW-001" });
```

---

## À retenir

- Sans opérateur (`$set`, …), `updateOne` remplace le document entier
- Upsert = pratique, mais à utiliser avec un filtre “stable” (ex: `sku`)

---

## Exercices

- Exercices : `Exercices/mongodb_07_ecritures_updates.md`

