# db_web2.2 — cours bases de données

Support du cours bases de données : slides Marp, exercices par chapitre,
diagrammes et TPs. Deux parcours en parallèle, **SQL** (MySQL / PostgreSQL) et
**MongoDB**, sur le même fil rouge : une boutique.

## Contenu

| Dossier | Contenu |
|---|---|
| `slides/` | les decks Marp, un par chapitre, plus `index.md` et `mongodb_index.md` |
| `docs/` | les mêmes chapitres rendus en HTML, prêts à ouvrir dans un navigateur |
| `Exercices/` | les exercices, 11 chapitres SQL et 10 chapitres MongoDB |
| `diagrams/` | les schémas PlantUML : modèle de la boutique, ordre d'exécution SQL, jointures, normalisation, niveaux d'agrégation |
| `TPs/` | l'installation de Docker, le TP client, et `app-project-starter` |
| `tp-app-project/` | le projet de TP : Postgres + MongoDB + Adminer, une mini API Node et un client React |

## Le parcours

**SQL** — installation, SQL contre NoSQL, DDL et création de tables, le fil
rouge boutique, les requêtes de base, le modèle relationnel, les jointures,
l'agrégation, la normalisation, les transactions, JSON, les sous-requêtes.

**MongoDB** — installation, modèle document et BSON, collections et validation
de schéma, le même fil rouge boutique, les requêtes, les relations et `$lookup`,
les écritures, le pipeline d'agrégation, l'indexation et la performance, les
bonnes pratiques.

## Le TP

`tp-app-project/` (et son starter dans `TPs/app-project-starter/`) monte les
bases dans Docker, puis une API Node sans framework et un client React :

```bash
docker compose up -d
docker compose exec postgres psql -U postgres -d shop -v ON_ERROR_STOP=1 -f /shared/postgres/seed.sql
cd api && npm i && npm run dev
cd ../client && npm i && npm run dev
```

`shared/` contient les scripts de seed Postgres et MongoDB. Le client démarre en
`fetch` simple, à refactorer ensuite avec TanStack Query.

## Rendre les slides

Avec l'extension **Marp for VS Code**, ou en ligne de commande :

```bash
npm i -g @marp-team/marp-cli
marp slides/index.md --pdf -o exports/index.pdf
marp slides/*.md --pdf -o exports/
```

Les chapitres déjà rendus sont dans `docs/`, il n'y a rien à installer pour les
lire.

## À savoir

Le dossier `data/`, auquel renvoyaient les commandes de démarrage rapide
(`shop_schema.sql`, `shop_seed.sql`, `shop_mongodb_seed.js`), n'est pas dans ce
dépôt. Pour monter la base de la boutique, passer par les seeds de
`tp-app-project/shared/`.
