---
marp: true
title: "MongoDB — 03. Collections & validation de schéma"
paginate: true
header: "[← Index MongoDB](https://antoine07.github.io/db_web2/mongodb_index.html)"
footer: "[← Index MongoDB](https://antoine07.github.io/db_web2/mongodb_index.html)"
---

# MongoDB — 03
## Collections & validation de schéma

---

## Collections

- Une collection regroupe des documents (ex: `products`)
- Pas de schéma obligatoire… mais on peut en imposer un

---

## Créer une collection “propre”

```js
use("shop");
db.createCollection("products");
```

---

## Validation JSON Schema (exemple)

```js
db.runCommand({
  collMod: "products",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "sku", "price"],
      properties: {
        name: { bsonType: "string" },
        sku: { bsonType: "string" },
        price: { bsonType: ["int", "long", "double", "decimal"] }
      }
    }
  }
});
```

---

## Pourquoi valider ?

- Éviter les documents incohérents
- Garder un modèle “compréhensible” dans la durée
- Faciliter les requêtes et les index

---

## Dates et nombres : pièges fréquents

- Stocker une date en string → tri/filtre difficiles
- Stocker des prix en float → attention aux arrondis
- Pour les montants : parfois `Decimal128`

---

## À retenir

- MongoDB est flexible, mais le **modèle** doit rester maîtrisé
- La validation est une option utile quand la base “grandit”

---

## Exercices

- Exercices : `Exercices/mongodb_03_collections_validation_schema.md`

