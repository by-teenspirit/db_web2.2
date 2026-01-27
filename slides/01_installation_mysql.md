---
marp: true
title: "SQL (MySQL) — 01. Installation MySQL (MAMP / Homebrew / Docker)"
paginate: true
header: "[← Index des chapitres](https://antoine07.github.io/db_web2/#5)"
footer: "[← Index des chapitres](https://antoine07.github.io/db_web2/#5)"
--- 

# 01 — Installation MySQL
## macOS / Windows / Docker

---

## Objectif

- Installer MySQL Server (8.x)
- Savoir se connecter en CLI (`mysql`)
- Importer la base `shop` (schéma + données `seed`)

---

## Choix recommandé (cours)

- **1) MAMP (macOS + Windows)** : le plus simple pour démarrer ensemble
- **2) Homebrew (macOS)** : alternative “native” si vous êtes à l'aise
- **3) Docker (tous OS)** : alternative portable / isolée

---

## Pourquoi MAMP ?

- Même environnement pour toute la promo 
- Démarrage/arrêt en 1 clic (pas de services système à configurer)
- Fournit un **environnement de dev** : MySQL + outils (ex: phpMyAdmin/adminer) + web server si besoin
- Permet de se concentrer sur le SQL, pas sur l'installation

---

## Installer MAMP (macOS / Windows)

- Installer MAMP : https://www.mamp.info/  
- Ouvrir MAMP et démarrer **MySQL**  
- Vérifier le port MySQL dans les préférences :
- soit **3306** (recommandé pour le cours)
- soit **8889** (valeur par défaut fréquente)

Identifiants (souvent) :
- user : `root`
- password : `root`

---

## Se connecter en CLI (MAMP)

Si MySQL écoute sur `8889` :
```bash
mysql -h 127.0.0.1 -P 8889 -u root -p
# mot de passe : root
```

Si MySQL écoute sur `3306` (recommandé) :
```bash
mysql -h 127.0.0.1 -P 3306 -u root -p
```

Si la commande `mysql` n'est pas trouvée, utilisez le binaire de MAMP :
```bash
/Applications/MAMP/Library/bin/mysql -h 127.0.0.1 -P 8889 -u root -p
```

---

## macOS — Homebrew (alternative)

```bash
brew install mysql
brew services start mysql
```

Connexion root (selon config) :
```bash
mysql -u root
# ou
mysql -u root -p
```

---

## Vérifier que MySQL répond

Dans le client MySQL :
```sql
SELECT VERSION();
SHOW DATABASES;
```

---

## Importer la base "shop"

Depuis la racine du [repo](https://github.com/Antoine07/db_web2) dossier data:
```bash
mysql -u root -p < data/shop_schema.sql
mysql -u root -p < data/shop_seed.sql
```

Puis :
```bash
mysql -u root -p shop
```

Si vous êtes sur MAMP (port `8889`), ajoutez `-h 127.0.0.1 -P 8889` à chaque commande.

---

## Docker 

Utile si vous ne voulez pas installer MySQL localement.

```bash
docker run --name mysql8 \
  -e MYSQL_ROOT_PASSWORD=root \
  -p 3306:3306 \
  -d mysql:8
```

Connexion :
```bash
mysql -h 127.0.0.1 -P 3306 -u root -p
# mot de passe : root
```

---

Charger les données (UTF-8) :

```bash
docker exec -i mysql8 mysql --default-character-set=utf8mb4 -uroot -proot < data/shop_schema.sql

docker exec -i mysql8 mysql --default-character-set=utf8mb4 -uroot -proot < data/shop_seed.sql

docker exec -it mysql8 mysql --default-character-set=utf8mb4 -uroot -proot shop
```

Vérifier l'encodage (optionnel) :
```sql
SHOW VARIABLES LIKE 'character_set%';
```
