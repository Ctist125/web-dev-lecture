const express = require("express");

const db = require("../data/database");

const router = express.Router();

router.get("/create-reivew", async function (req, res) {
  const [products] = await db.query("SELECT * FROM products");

  res.render("review", { products: products });
});

router.post("/create-review", async function (req, res) {
  const reviewData = [req.body.product_name, req.body.rating, req.body.review];

  await db.query("INSERT INTO reviews (item_name, rating, text) VALUES (?)", [
    reviewData,
  ]);

  res.redirect("/");
});

router.get("/buy", async function (req, res) {
  const [buyLists] = await db.query("SELECT * FROM buy");

  res.render("buy", { buyLists: buyLists });
});

router.get("/product-detail/:id", async function (req, res) {
  const id = req.params.id;

  const [products] = await db.query("SELECT * FROM products WHERE id = ?", [
    id,
  ]);
  const [reviews] = await db.query("SELECT * FROM reviews");

  if (products.length === 0) {
    return res.status(404).render("404");
  }

  res.render("product-detail", { products: products, id: id, reviews });
});

router.post("/product-detail/:id", async function (req, res) {
  const [productInformations] = await db.query(
    "SELECT * FROM products WHERE id = ?",
    [req.params.id]
  );
  const [buyLists] = await db.query("SELECT * FROM buy WHERE name_en = ?", [
    productInformations[0].name_en,
  ]);

  if (buyLists.length === 0) {
    const buyInformation = [
      productInformations[0].name,
      productInformations[0].name_en,
      productInformations[0].price,
      req.body.count,
      productInformations[0].price * req.body.count,
    ];

    await db.query(
      "INSERT INTO buy (name, name_en, price, count, individual_total) VALUES (?)",
      [buyInformation]
    );

    return res.redirect("/buy");
  } else {
    const buyUpdateInformation = [
      buyLists[0].count + +req.body.count,
      (buyLists[0].count + +req.body.count) * buyLists[0].price,
      buyLists[0].name_en,
    ];

    await db.query(
      "UPDATE buy SET count = ?, individual_total = ? WHERE name_en= ?",
      [
        buyUpdateInformation[0],
        buyUpdateInformation[1],
        buyUpdateInformation[2],
      ]
    );

    return res.redirect("/buy");
  }
});

module.exports = router;
