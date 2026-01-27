---
marp: true
title: "MongoDB — 02. Modèle document (BSON)"
paginate: true
header: "[← Index MongoDB](https://antoine07.github.io/db_web2/mongodb_index.html)"
footer: "[← Index MongoDB](https://antoine07.github.io/db_web2/mongodb_index.html)"
---

# MongoDB — 02
## Modèle document (BSON)

---

## JSON vs BSON

- MongoDB stocke du **BSON** (Binary JSON)
- Types utiles : `ObjectId`, `Date`, `Decimal128`, `BinData`
- Attention : un `Date` ≠ une string

---

## Exemple de document

```js
{
  _id: ObjectId("..."),
  email: "alice@demo.test",
  created_at: ISODate("2025-01-01T10:00:00Z"),
  tags: ["vip", "newsletter"],
  address: { city: "Paris", country: "FR" }
}
```

---

## Lire / écrire dans `mongosh`

```js
use("shop");
db.customers.findOne();
```

Projection (choisir des champs) :

```js
db.customers.find({}, { email: 1, created_at: 1, _id: 0 });
```

---

## Table vs collection (intuitions)

- En SQL : lignes dans une table, schéma strict (en général)
- En MongoDB : documents, schéma flexible (mais on peut valider)
- Les documents peuvent contenir des **objets** et **tableaux**

---

## Identifiants

- Par défaut : `_id` de type `ObjectId()`
- Stable, indexé, pratique pour référencer un document

---

## À retenir

- Le modèle document encourage l’**agrégation** de données liées (embedding)
- Les types BSON comptent (dates, ids, nombres)
- `find(..., projection)` évite de ramener trop de données

---

## Exercices

- Exercices : `Exercices/mongodb_02_modele_document_bson.md`

