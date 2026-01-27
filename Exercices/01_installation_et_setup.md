# Exercices — 01. Installation et setup MySQL

## Objectif

- Installer MySQL (ou lancer un MySQL via Docker)
- Importer la base “Boutique”
- Vérifier que tout fonctionne

## Exercice 1 — Vérification MySQL

1) Connectez-vous en CLI :
- `mysql -u root -p`

Si vous êtes sur MAMP (port MySQL souvent `8889`) :
- `mysql -h 127.0.0.1 -P 8889 -u root -p` (mdp souvent `root`)

2) Exécutez :
```sql
SELECT VERSION();
SHOW DATABASES;
```

## Exercice 2 — Import du schéma + données

Depuis la racine du repo :
```bash
mysql -u root -p < data/shop_schema.sql
mysql -u root -p < data/shop_seed.sql
```

Si vous êtes sur MAMP (port `8889`), ajoutez `-h 127.0.0.1 -P 8889` à chaque commande.

Puis :
```bash
mysql -u root -p shop
```

## Exercice 3 — Explorer la base

Dans MySQL :
```sql
USE shop;
SHOW TABLES;
DESCRIBE customers;
DESCRIBE orders;
DESCRIBE order_items;
```

Questions :
- Quelles colonnes sont `NOT NULL` ?
- Quelles colonnes sont `UNIQUE` ?
- Quelles tables existent dans `shop` ?

## Exercice 4 — Première requête

1) Affichez tous les produits (`id`, `name`, `price`)  
2) Affichez tous les clients (`id`, `email`)  
3) Affichez toutes les commandes (`id`, `status`, `ordered_at`)

## Exercice 5 — Sauver une session

Créez un fichier `mes_requetes.sql` (où vous voulez) qui contient :
- une commande `USE shop;`
- 3 requêtes de votre choix
