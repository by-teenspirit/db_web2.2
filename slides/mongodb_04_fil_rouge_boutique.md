---
marp: true
title: "MongoDB — 04. Fil rouge : Boutique (modélisation)"
paginate: true
header: "[← Index MongoDB](https://antoine07.github.io/db_web2/mongodb_index.html)"
footer: "[← Index MongoDB](https://antoine07.github.io/db_web2/mongodb_index.html)"
---

# MongoDB — 04
## Fil rouge : Boutique (modélisation)

---

## Les collections

- `customers`
- `products`
- `categories`
- `orders`

Seed : `data/shop_mongodb_seed.js`

---

## Exemple : commande (order)

Objectif : une commande “autonome” (total calculable, items, client)

```js
db.orders.findOne({}, { items: 1, customer_id: 1, status: 1 });
```

---

## Embedding vs references

### Embedding (données incluses)

- + lecture simple (1 requête)
- - duplication (ex: nom du produit)

### References (ids)

- + données normalisées
- - parfois plusieurs requêtes ou `$lookup`

---

## Choix pour `orders.items`

Courant : mix “pragmatique”

- `product_id` (référence)
- + **snapshot** utile : `unit_price`, `product_name`

---

## Idée de document “product”

```js
{
  _id: ObjectId("..."),
  sku: "TOP-TS-001",
  name: "T-shirt basique noir",
  price: 14.0,
  stock: 120,
  category_id: ObjectId("...")
}
```

---

## À retenir

- Le “bon” schéma MongoDB dépend des requêtes les plus fréquentes
- Modéliser = choisir où mettre la duplication (et pourquoi)

---

## Exercices

- Exercices : `Exercices/mongodb_04_fil_rouge_boutique.md`
