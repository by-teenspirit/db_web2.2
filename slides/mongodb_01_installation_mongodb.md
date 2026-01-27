---
marp: true
title: "MongoDB — 01. Installation MongoDB (local/Docker/Atlas)"
paginate: true
header: "[← Index MongoDB](https://antoine07.github.io/db_web2/mongodb_index.html)"
footer: "[← Index MongoDB](https://antoine07.github.io/db_web2/mongodb_index.html)"
---

# MongoDB — 01
## Installation / accès (local, Docker, Atlas)

---

## Ce qu'on va utiliser

- `mongosh` : shell MongoDB (CLI)
- (optionnel) MongoDB Compass : UI
- une base de fil rouge : `shop`

---

## MongoDB local

- Installer MongoDB Community Server
- Démarrer le service
- Vérifier :

```bash
mongosh --version
mongosh
```

---

##  Docker (simple pour le cours)

```bash
docker run --name mongodb \
  -p 27017:27017 \
  -d mongo:7

mongosh "mongodb://localhost:27017"
```

---

## MongoDB Atlas (cloud)

- Créer un cluster (gratuit)
- Créer un user + autoriser votre IP
- Récupérer l'URI de connexion
- Se connecter :

```bash
mongosh "mongodb+srv://<user>:<pass>@<cluster>/"
```

---

## Notions de base

- **Database** : `shop`
- **Collections** : `customers`, `products`, `orders`, `categories`
- **Documents** : objets BSON (proche JSON, mais avec des types)

---

## Importer le fil rouge (`shop`)

Dans `mongosh`, depuis la racine du repo :

```js
load("data/shop_mongodb_seed.js");
use("shop");
show collections;
```

---

## 3 commandes indispensables

```js
use("shop");
db.customers.findOne();
db.orders.countDocuments();
```

---

## À retenir

- MongoDB = base orientée **documents**
- On manipule surtout des **documents** dans des **collections**
- On démarre avec `mongosh` + un seed pour pratiquer vite

---

## Exercices

- Exercices : `Exercices/mongodb_01_installation_et_setup.md`

