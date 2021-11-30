const express = require("express");
const router = express.Router();
const goodModel = require("./../models/good");
const db = require("./../helpers/dbg");
const { good } = require("./../helpers/dbg");

router.post("/create", (req, res) => {
  const good = new goodModel(req.body.category, req.body.price, req.body.picture);
  db.saveGood(good);
  res.status(200).send(true);
});

router.delete("/delete", (req, res) => {
  const good = new goodModel(req.body.email, req.body.password, req.body.picture);
  db.deleteGood(good);
  res.status(200).send(true);
});

router.put("/update", (req, res) => {
  const good = new goodModel(req.body.category, req.body.price, req.body.picture);
  db.updateGood(good);
  res.status(200).send(true);
});


module.exports = router;