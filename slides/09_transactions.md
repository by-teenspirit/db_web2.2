---
marp: true
title: "SQL (MySQL) — 09. Transactions"
paginate: true
header: "[← Index des chapitres](https://antoine07.github.io/db_web2/#5)"
footer: "[← Index des chapitres](https://antoine07.github.io/db_web2/#5)"
---

# 09 — Transactions
## Sécuriser des opérations multi-étapes

---

## Pourquoi une transaction ?

Une transaction regroupe plusieurs requêtes en **une seule opération logique** :
- soit **tout passe** (`COMMIT`)
- soit **on annule tout** (`ROLLBACK`)

Idéal pour éviter un état “à moitié mis à jour”.

---

## Syntaxe minimale

```sql
START TRANSACTION;

-- ... requêtes (INSERT/UPDATE/DELETE)

COMMIT;   -- valide
-- ROLLBACK; -- annule
```

---

## Savepoints (retour partiel)

```sql
START TRANSACTION;

SAVEPOINT step1;
-- ... requêtes

ROLLBACK TO SAVEPOINT step1; -- annule uniquement depuis step1
COMMIT;
```

---

## Exemple (à tester)

```sql
START TRANSACTION;

-- Point de sauvegarde
SAVEPOINT before_product;

-- 1) Suppression d’une commande (si votre FK est en ON DELETE CASCADE)
DELETE FROM orders WHERE id = 1;

-- Vérification dans la transaction
SELECT * FROM orders;
SELECT * FROM order_items;

-- 2) Tentative de suppression d’un produit référencé ailleurs
DELETE FROM products WHERE id = 42;
-- ❌ ERREUR FK si le produit est encore référencé

-- 3) Retour au SAVEPOINT
ROLLBACK TO SAVEPOINT before_product;

-- 4) Fin de transaction
COMMIT;
```

---

## Points à retenir (MySQL)

- Transactions = **InnoDB** (pas MyISAM)
- Beaucoup d’outils sont en **autocommit** par défaut
- Le `WHERE`/`JOIN` ne change rien ici : c’est la **validité** des contraintes (FK) qui peut provoquer un `ROLLBACK`

