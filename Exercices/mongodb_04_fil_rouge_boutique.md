# Exercices MongoDB — 04. Fil rouge : Boutique (modélisation)

Préparation :

```js
use("shop");
```

## Exercice 1 — Lire le modèle actuel

1) Affichez un produit (champs clés)  
2) Affichez une commande (items + customer_id)

## Exercice 2 — Embedding vs references

Pour chacun des besoins suivants, choisissez **embedding** ou **references** et justifiez :

1) Afficher une commande avec son contenu (front)  
2) Mettre à jour le nom d’un produit partout  
3) Faire un reporting “top produits vendus”

## Exercice 3 — Mini refacto (papier)

Proposez une alternative de schéma pour `orders.items` :
- version très “normalisée”
- version très “dénormalisée”

