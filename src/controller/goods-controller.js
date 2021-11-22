const express = require("express");
const router = express.Router();
const goodsModel = require("../models/good");
const db = require("./../helpers/dbg");

router.post("/create", (req, res) => {
  const good = new goodsModel(req.body.category, req.body.price, req.body.picture);
  db.saveGoods(good);
  res.status(200).send(true);
});

module.exports = router;