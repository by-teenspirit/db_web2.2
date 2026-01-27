---
marp: true
title: "SQL (MySQL) — 10. JSON dans MySQL (SQL + NoSQL)"
paginate: true
header: "[← Index des chapitres](https://antoine07.github.io/db_web2/#5)"
footer: "[← Index des chapitres](https://antoine07.github.io/db_web2/#5)"
---

# 10 — JSON dans MySQL
## Quand un SGBD SQL fait aussi du “document”

---

## Objectif

- Comprendre quand utiliser une colonne `JSON`
- Savoir écrire / lire / filtrer du JSON
- Voir une **évolution du schéma** sur le fil rouge `shop`

---

## Pourquoi du JSON dans MySQL ?

Utile quand certaines propriétés :
- varient beaucoup selon le type d’objet (produits, événements…)
- changent souvent (schéma évolutif)

On garde le **cœur** en colonnes SQL (requêtes, contraintes, index), et le “reste” en JSON.

---

## Évolution du fil rouge `shop`

On ajoute une colonne `attributes` sur `products` et on remplit quelques exemples :

```bash
mysql -u root -p < data/shop_json_evolution.sql
```

Ou manuellement :
```sql
USE shop;

ALTER TABLE products
  ADD COLUMN attributes JSON NULL;
```

---

## Vérifier le résultat

```sql
SELECT id, name, attributes
FROM products
WHERE attributes IS NOT NULL
ORDER BY id;
```

---

## Écrire du JSON (`JSON_OBJECT`, `JSON_ARRAY`)

```sql
UPDATE products
SET attributes = JSON_OBJECT(
  'color', 'black',
  'size', 'M',
  'tags', JSON_ARRAY('cotton', 'basic')
)
WHERE id = 6;
```

---

## Modifier une clé (`JSON_SET`)

```sql
UPDATE products
SET attributes = JSON_SET(
  COALESCE(attributes, JSON_OBJECT()),
  '$.material', 'cotton'
)
WHERE id = 6;
```

---

## Lire / extraire des valeurs

```sql
SELECT
  id,
  name,
  attributes->>'$.color' AS color,
  attributes->>'$.size' AS size
FROM products
WHERE attributes IS NOT NULL;
```

---

## Filtrer sur du JSON

```sql
SELECT id, name
FROM products
WHERE attributes->>'$.color' = 'black';
```

---

## Produire un “document” JSON à partir de SQL

Exemple : retourner une commande avec ses lignes sous forme JSON :

```sql
SELECT JSON_OBJECT(
  'order_id', o.id,
  'status', o.status,
  'ordered_at', o.ordered_at,
  'items', JSON_ARRAYAGG(
    JSON_OBJECT(
      'product_id', oi.product_id,
      'quantity', oi.quantity,
      'unit_price', oi.unit_price
    )
  )
) AS order_doc
FROM orders o
JOIN order_items oi ON oi.order_id = o.id
WHERE o.id = 1
GROUP BY o.id;
```

---

## Indexer du JSON (optionnel)

Si vous filtrez souvent sur une clé JSON, indexez-la via une colonne générée :

```sql
ALTER TABLE products
  ADD COLUMN brand VARCHAR(100)
    GENERATED ALWAYS AS (attributes->>'$.brand') STORED,
  ADD INDEX idx_products_brand (brand);
```

---

## À retenir

- `JSON` rend le schéma plus flexible, mais ne remplace pas le relationnel
- Si une donnée est souvent filtrée/triée/jointe → colonne SQL (ou colonne générée + index)
- Le JSON est pratique pour des “extras” variables (attributs, metadata)
