# Exercices MongoDB — 05. Requêtes de base

Préparation :

```js
use("shop");
```

## Exercice 1 — Filtres simples

1) Produits avec `stock > 0`  
2) Produits dont `price` est entre 20 et 100  
3) Commandes au statut `paid`

## Exercice 2 — `IN` / `regex`

1) Produits dont `sku` est dans `["TOP-TS-001", "SHOE-SNK-001"]`  
2) Clients dont l’email se termine par `@demo.test` (via regex)

## Exercice 3 — Tri + pagination

1) 2 produits les plus chers (sans `_id`)  
2) 2 commandes les plus récentes

## Exercice 4 — Projections

Sur `orders`, affichez uniquement :
- `status`
- `ordered_at`
- `items.quantity` et `items.unit_price`
