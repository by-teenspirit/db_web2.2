---
marp: true
title: "Cours MongoDB — Plan"
description: "Plan du cours MongoDB + fil rouge + exercices"
paginate: true
---

# Cours MongoDB

---

## Objectifs

- Installer/accéder à MongoDB (local, Docker, Atlas)
- Comprendre le modèle **document** (BSON, collections)
- Faire du CRUD (`find`, `insert`, `update`, `delete`)
- Modéliser des relations : **embedding** vs **references** (+ `$lookup`)
- Produire des indicateurs avec l’**agrégation** (pipeline)
- Indexer correctement et éviter les pièges de perf

---

## Fil rouge (utilisé dans tous les chapitres)

Base `shop` (e-commerce) :
- `customers` (clients)
- `products` (produits)
- `orders` (commandes)
- `categories` (catégories)

Données de départ : `data/shop_mongodb_seed.js`

---

## Démarrage rapide (fil rouge `shop`)

Dans un `mongosh` :

```js
load("data/shop_mongodb_seed.js");
use("shop");
db.customers.findOne();
```

---

## Chapitres

1. [MongoDB — 01 — Installation](https://antoine07.github.io/db_web2/mongodb_01_installation_mongodb.html)
2. [MongoDB — 02 — Modèle document (BSON)](https://antoine07.github.io/db_web2/mongodb_02_modele_document_bson.html)
3. [MongoDB — 03 — Collections & validation de schéma](https://antoine07.github.io/db_web2/mongodb_03_collections_validation_schema.html)
4. [MongoDB — 04 — Fil rouge : Boutique (modélisation)](https://antoine07.github.io/db_web2/mongodb_04_fil_rouge_boutique.html)
5. [MongoDB — 05 — Requêtes de base](https://antoine07.github.io/db_web2/mongodb_05_requetes_de_base.html)
6. [MongoDB — 06 — Relations : `$lookup`](https://antoine07.github.io/db_web2/mongodb_06_relations_lookup.html)
7. [MongoDB — 07 — Écritures : updates + upsert](https://antoine07.github.io/db_web2/mongodb_07_ecritures_updates.html)
8. [MongoDB — 08 — Agrégation (pipeline)](https://antoine07.github.io/db_web2/mongodb_08_aggregation_pipeline.html)
9. [MongoDB — 09 — Indexation & performance](https://antoine07.github.io/db_web2/mongodb_09_indexation_performance.html)
10. [MongoDB — 10 — Bonnes pratiques](https://antoine07.github.io/db_web2/mongodb_10_bonnes_pratiques.html)

