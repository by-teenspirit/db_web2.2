---
marp: true
title: "Cours SQL — Plan"
description: "Plan du cours SQL (MySQL) + fil rouge + exercices"
paginate: true
---

# Cours SQL (MySQL)

---

## Objectifs 

- Installer MySQL et importer une base d'exemple
- Comprendre SQL vs NoSQL (grands modèles)
- Créer des tables (DDL) simplement
- Interroger des données (`SELECT`, filtres, tri, pagination)
- Comprendre le relationnel (PK/FK) et croiser des tables (jointures)
- Produire des indicateurs (agrégation)

---

## Fil rouge (utilisé dans tous les chapitres)

Base `shop` (fil rouge e-commerce) :
- `customers` (clients)
- `products` (produits)
- `orders` (commandes)
- `order_items` (lignes de commande)
- `categories` (catégories)

Objectif : savoir interroger et faire évoluer ce schéma proprement.

---

## Schéma UML

![Schéma UML Boutique](https://antoine07.github.io/db_web2/assets/boutique_uml.svg)

---

## Chapitres 

- [Installation MySQL](https://antoine07.github.io/db_web2/01_installation_mysql.html)
- [Bases de données : SQL vs NoSQL](https://antoine07.github.io/db_web2/02_bases_de_donnees_sql_vs_nosql.html)
- [DDL : créer des tables](https://antoine07.github.io/db_web2/03_ddl_creer_tables.html)
- [Fil rouge : Boutique (schéma)](https://antoine07.github.io/db_web2/04_fil_rouge_boutique.html)
- [Requêtes de base](https://antoine07.github.io/db_web2/05_requetes_de_base.html)
- [Modèle relationnel](https://antoine07.github.io/db_web2/06_modele_relationnel.html)
- [Jointures](https://antoine07.github.io/db_web2/07_jointures.html)
- [Agrégation](https://antoine07.github.io/db_web2/08_aggregation.html)
- [Sous-requêtes (requêtes imbriquées)](https://antoine07.github.io/db_web2/11_sous_requetes.html)
- [Transactions](https://antoine07.github.io/db_web2/09_transactions.html)

---

## Bonus — Cours MongoDB

- Plan : https://antoine07.github.io/db_web2/mongodb_index.html
