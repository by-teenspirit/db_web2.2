// Mini API HTTP Node (sans Express) — fournie pour le TP.
// Objectif : donner des endpoints simples au client React.
//
// Démarrage :
//   npm i
//   npm run dev
//
// Endpoints :
//   GET /api/pg/customers
//   GET /api/pg/orders
//   GET /api/pg/orders?customerId=1

import http from "node:http";
import { URL } from "node:url";
import { Pool } from "pg";

const port = Number(process.env.PORT || 4000);

// Par défaut, Postgres est exposé en 5433 (docker-compose.yml : 5433:5432)
const pool = new Pool({
  connectionString:
    process.env.PG_CONNECTION_STRING ||
    "postgresql://postgres:postgres@localhost:5433/shop",
});

http
  .createServer(async (req, res) => {
    res.setHeader("access-control-allow-origin", "*");
    res.setHeader("access-control-allow-methods", "GET, OPTIONS");
    res.setHeader("access-control-allow-headers", "content-type");

    if (req.method === "OPTIONS") {
      res.writeHead(204);
      res.end();
      return;
    }

    const url = new URL(req.url || "/", "http://localhost");

    if (req.method === "GET" && url.pathname === "/api/pg/customers") {
      try {
        const result = await pool.query(
          "SELECT id, email, first_name, last_name, phone, created_at FROM customers ORDER BY id;"
        );
        res.writeHead(200, { "content-type": "application/json; charset=utf-8" });
        res.end(JSON.stringify(result.rows));
      } catch (e) {
        res.writeHead(500, { "content-type": "application/json; charset=utf-8" });
        res.end(
          JSON.stringify({ error: e instanceof Error ? e.message : String(e) })
        );
      }
      return;
    }

    if (req.method === "GET" && url.pathname === "/api/pg/orders") {
      const rawCustomerId = url.searchParams.get("customerId");
      const customerId = rawCustomerId ? Number(rawCustomerId) : null;

      if (rawCustomerId && !Number.isFinite(customerId)) {
        res.writeHead(400, { "content-type": "application/json; charset=utf-8" });
        res.end(JSON.stringify({ error: "customerId must be a number" }));
        return;
      }

      try {
        const result = await pool.query(
          `
            SELECT
              c.id AS customer_id,
              c.email AS customer_email,
              o.id AS order_id,
              o.ordered_at,
              o.status,
              p.id AS product_id,
              p.name AS product_name,
              oi.quantity,
              oi.unit_price::float8 AS unit_price
            FROM orders o
            JOIN customers c ON c.id = o.customer_id
            JOIN order_items oi ON oi.order_id = o.id
            JOIN products p ON p.id = oi.product_id
            WHERE ($1::int IS NULL OR o.customer_id = $1)
            ORDER BY o.ordered_at DESC, o.id DESC, p.id ASC;
          `,
          [customerId]
        );
        res.writeHead(200, { "content-type": "application/json; charset=utf-8" });
        res.end(JSON.stringify(result.rows));
      } catch (e) {
        res.writeHead(500, { "content-type": "application/json; charset=utf-8" });
        res.end(
          JSON.stringify({ error: e instanceof Error ? e.message : String(e) })
        );
      }
      return;
    }

    res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    res.end("not found");
  })
  .listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API listening on http://localhost:${port}`);
  });
