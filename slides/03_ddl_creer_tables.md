---
marp: true
title: "SQL (MySQL) — 03. DDL : créer des tables"
paginate: true
header: "[← Index des chapitres](https://antoine07.github.io/db_web2/#5)"
footer: "[← Index des chapitres](https://antoine07.github.io/db_web2/#5)"
---

# 03 — DDL - création de tables

---

## DDL (Data Definition Language)

Le DDL sert à définir la structure :
- `CREATE TABLE`, `ALTER TABLE`, `DROP TABLE`
- types, contraintes, index

---

## Préparation 

Pour tester sans toucher à `shop`, utilisez une base dédiée :

```sql

CREATE DATABASE shop_demo 
  CHARACTER SET utf8mb4 
  COLLATE utf8mb4_unicode_ci;

USE shop_demo;
```

---

## Notion : contrainte

Une **contrainte** est une règle appliquée par MySQL pour garantir :
- **qualité** des données (`NOT NULL`, `UNIQUE`, `CHECK`)
- cohérence entre tables (vu au chapitre 06 modèle relationnel)

---

## colonne `id`

Dans ce chapitre, on utilise souvent une colonne `id` "technique" pour pouvoir insérer des lignes facilement.

Les notions **PK/FK** et les relations entre tables sont détaillées au chapitre 06 (modèle relationnel)

---

## Exemple : table simple (`id` + `NOT NULL`)

```sql
USE shop_demo;

DROP TABLE IF EXISTS customers; -- supprime la table si elle existe 

CREATE TABLE customers (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL
);
```

---

## Notion : `UNIQUE`

`UNIQUE` = contrainte anti-doublon (sur 1 colonne ou plusieurs) :
- une table peut avoir **plusieurs** contraintes `UNIQUE`
- différent d'une PK : `UNIQUE` peut accepter `NULL` (selon colonne), une PK non

---

## Ajouter `UNIQUE` (anti-doublon)

```sql
USE shop_demo;

DROP TABLE IF EXISTS customers;

CREATE TABLE customers (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL,
  CONSTRAINT uq_customers_email UNIQUE (email)
);
```

---

Testez:
```sql
USE shop_demo;

INSERT INTO customers (email) VALUES ('alice@exemple.com');
INSERT INTO customers (email) VALUES ('alice@exemple.com'); -- erreur attendue (UNIQUE)
```

---

## Notion : `DEFAULT`

`DEFAULT` définit une valeur automatique si on ne fournit pas la colonne à l'`INSERT`.

Exemple courant : timestamp de création.

---

## Exemple (`DEFAULT CURRENT_TIMESTAMP`)

```sql
USE shop_demo;

DROP TABLE IF EXISTS customers;

CREATE TABLE customers (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL UNIQUE,
  first_name VARCHAR(100) NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```

---

Testez :
```sql
INSERT INTO customers (email, first_name)
VALUES ('bob@exemple2.com', 'Bob');

SELECT id, email, created_at
FROM customers_realistic_demo
WHERE email = 'bob@exemple.com';
```

---

## Notion : `CHECK` (règle métier)

`CHECK` impose une règle (MySQL 8+).

```sql
USE shop_demo;

DROP TABLE IF EXISTS products;

-- La contrainte CHECK garantit côté base que le prix ne peut pas être négatif,
CREATE TABLE products (
  id INT PRIMARY KEY AUTO_INCREMENT,
  price DECIMAL(10,2) NOT NULL,
  CONSTRAINT chk_products_price CHECK (price >= 0)
);
```

---

Testez :
```sql
INSERT INTO products (price) VALUES (10);
INSERT INTO products (price) VALUES (-1); -- erreur attendue (CHECK)
```

---

## Contraintes nommées (maintenance plus facile)

Nommer une contrainte aide à :
- comprendre les erreurs (le nom ressort)
- la modifier/supprimer plus facilement

---

## `ALTER TABLE` 

`ALTER TABLE` sert à **modifier la structure d'une table existante** sans la recréer.

### Actions courantes

- ajouter / supprimer une colonne
- modifier un type ou une contrainte
- ajouter / supprimer une contrainte ou un index

---

### Modèle général

```sql
ALTER TABLE nom_table action;
```

### Exemple

```sql
ALTER TABLE customers
ADD CONSTRAINT uq_customers_email UNIQUE (email);
```

**À retenir**

>`ALTER TABLE` est l'outil standard pour faire évoluer un schéma en maintenance.

---

## Exemple : supprimer une contrainte nommée

Selon le type :

```sql
DROP TABLE IF EXISTS customers;

CREATE TABLE customers (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```

---

Ajout de la contrainte nommée, permet de la supprimer facilement si besoin.

```sql
ALTER TABLE customers
ADD CONSTRAINT uq_customers_email UNIQUE (email);

-- UNIQUE (en MySQL, c'est un index UNIQUE)
ALTER TABLE customers DROP INDEX uq_customers_email;
```

---

Même logique pour une autre contrainte nommée à supprimer.

```sql
-- CHECK (MySQL 8+)
ALTER TABLE products DROP CHECK chk_products_price;
```

---

## Vérifier les contraintes (à connaître)

Pour voir exactement ce qui a été créé (contraintes + index) :

```sql
SHOW CREATE TABLE customers\G
SHOW CREATE TABLE products\G
```

---

## Exercices 

Sur le dépôt 

- Exercices : `Exercices/03_ddl_creer_tables.md`
