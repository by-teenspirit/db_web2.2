# Exercices — 10. JSON dans MySQL

## Préparation

Dans MySQL :
```sql
USE shop;
```

## Exercice 1 — Évolution JSON

1) Vérifiez si une colonne `attributes` existe déjà sur `products` :
```sql
SHOW COLUMNS FROM products LIKE 'attributes';
```

2) Si elle n’existe pas, appliquez l’évolution :
```bash
mysql -u root -p < data/shop_json_evolution.sql
```

## Exercice 2 — Lire des attributs

Écrivez une requête qui affiche :
- `id`, `name`
- `color` et `size` extraits de `attributes` (si présents)

## Exercice 3 — Filtrer

Filtrez les produits dont `attributes.color = 'black'`.

## Exercice 4 — Générer un document JSON

Générez un document JSON pour la commande `id = 1` qui contient :
- `order_id`, `status`, `ordered_at`
- un tableau `items` avec `product_id`, `quantity`, `unit_price`
