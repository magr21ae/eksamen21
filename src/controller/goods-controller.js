const express = require("express");
const router = express.Router();
const goodsModel = require("./../models/goods");
const db = require("./../helpers/db");

router.post("/goods/create", (req, res) => {
  const user = new goodsModel(req.body.name, req.body.price, req.body.imige);
  db.saveGoods(goods);
  res.status(200).send(true);
});

module.exports = router;