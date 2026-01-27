# App Project — Starter TP

Ce dossier est un starter à copier pour le TP.

- `docker-compose.yml` : Postgres + MongoDB + Adminer
- `shared/` : scripts de seed (Postgres + MongoDB) + fichiers source (MySQL)
- `api/` : mini API Node (sans Express) — fournie et commentée
- `client/` : squelette React (fetch) — à refactorer ensuite avec TanStack Query

## Démarrage rapide

```bash
docker compose up -d
docker compose exec postgres psql -U postgres -d shop -v ON_ERROR_STOP=1 -f /shared/postgres/seed.sql
cd api && npm i && npm run dev
cd ../client && npm i && npm run dev
```

