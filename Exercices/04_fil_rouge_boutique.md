# Exercices — 04. Fil rouge : Boutique (schéma)

## Préparation

```sql
USE shop;
```

## Exercice 1 — Explorer le schéma

1) Affichez la liste des tables :
```sql
SHOW TABLES;
```

2) Regardez la structure de chaque table :
```sql
DESCRIBE customers;
DESCRIBE orders;
DESCRIBE order_items;
DESCRIBE products;
DESCRIBE categories;
```

Questions :
- Quel est le rôle de chaque table (en 1 phrase) ?
- Quelles colonnes vous semblent être des "identifiants" ?
- Quelles colonnes vous semblent "relier" des tables entre elles ?

## Exercice 2 — Comprendre le "prix au moment T"

1) Où se trouve le prix "catalogue" ?  
2) Où se trouve le prix "au moment de la commande" ?  
3) Pourquoi garder les deux ?

## Exercice 4 — Index (observation)

Utilisez :
```sql
SHOW INDEX FROM orders;
```

Questions :
- Quels champs sont indexés ?
- À quelles requêtes ça peut servir ?
