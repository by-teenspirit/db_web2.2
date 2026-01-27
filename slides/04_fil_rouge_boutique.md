---
marp: true
title: "SQL (MySQL) — 04. Fil rouge : Boutique"
paginate: true
header: "[← Index des chapitres](https://antoine07.github.io/db_web2/#5)"
footer: "[← Index des chapitres](https://antoine07.github.io/db_web2/#5)"
---

# 04 — Fil rouge : "Boutique"

---

## Objectif

- Avoir un exemple concret qui revient tout le temps
- Savoir dire : "où est la vérité ?" (clients, commandes, produits…)

---

## Schéma UML 


![Ouvrir le SVG](https://antoine07.github.io/db_web2/assets/boutique_uml.svg)

---

## Tables (rôle)

- `customers` : informations client (référence)
- `orders` : événement "commande" (qui, quand, statut)
- `order_items` : lignes de commande (quoi, combien, prix au moment)
- `products` : catalogue (prix actuel, stock)
- `categories` : catégorie de produit

---

## Pourquoi `unit_price` est dans `order_items` ?

Parce qu'on veut garder le **prix au moment de l'achat** (même si le prix du catalogue change).

---

## Import 

```bash
mysql -u root -p < data/shop_schema.sql
mysql -u root -p < data/shop_seed.sql
mysql -u root -p shop
```

---

## À faire (exercices)

- Exercices : `Exercices/04_fil_rouge_boutique.md`
