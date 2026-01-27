# Cours SQL (MySQL) — Slides Marp + Exercices

## Contenu

- Slides (Marp) : `slides/`
- Scripts SQL “fil rouge Boutique” : `data/`
- Exercices par chapitre : `Exercices/`
- TPs : `TPs/`
- (Nouveau) Cours MongoDB : `index_mongodb.md` + `slides/mongodb_*.md`

## Installation MySQL (recommandé)

Pour le cours, on recommande **MAMP** (macOS + Windows) pour des raisons pédagogiques : tout le monde a le même setup, et MAMP fournit un **environnement de dev** prêt à l’emploi (MySQL + outils).

Alternatives :
- macOS : **Homebrew** (installation “native”)
- tous OS : **Docker** (portable / isolé)

## Démarrage rapide (base `shop`)

Importer le schéma + les données :
```bash
mysql -u root -p < data/shop_schema.sql
mysql -u root -p < data/shop_seed.sql
mysql -u root -p shop
```

Si vous êtes sur MAMP (port MySQL souvent `8889`), ajoutez `-h 127.0.0.1 -P 8889` à chaque commande.

Optionnel (partie JSON) :
```bash
mysql -u root -p < data/shop_json_evolution.sql
```

## Démarrage rapide MongoDB (base `shop`)

Dans `mongosh`, depuis la racine du repo :

```js
load("data/shop_mongodb_seed.js");
use("shop");
db.orders.findOne();
```

## Rendu des slides (Marp)

### Option 1 — VS Code

- Installer l’extension “Marp for VS Code”
- Ouvrir un fichier dans `slides/`
- Prévisualiser / exporter (PDF/HTML) depuis l’extension

### Option 2 — Marp CLI

Installer :
```bash
npm i -g @marp-team/marp-cli
```

Exporter un PDF :
```bash
marp slides/index.md --pdf -o exports/index.pdf
```

Exporter tous les decks :
```bash
mkdir -p exports
marp slides/*.md --pdf -o exports/
```

## MySQL via Docker (option)

```bash
docker run --name mysql8 \
  -e MYSQL_ROOT_PASSWORD=root \
  -p 3306:3306 \
  -d mysql:8

docker exec -i mysql8 mysql --default-character-set=utf8mb4 -uroot -proot < data/shop_schema.sql
docker exec -i mysql8 mysql --default-character-set=utf8mb4 -uroot -proot < data/shop_seed.sql

docker exec -it mysql8 mysql --default-character-set=utf8mb4 -uroot -proot shop

SHOW VARIABLES LIKE 'character_set%';

SET time_zone = 'Europe/Paris';
```
