const express = require("express");
const router = express.Router();
const goodModel = require("./../models/good");
const db = require("../database/dbg");
const { good, goods } = require("../database/dbg");
//const { users } = require("../database/db");


router.post("/create", (req, res) => {
  const good = new goodModel(req.body.category, req.body.price, req.body.picture, req.body.email);
  db.saveGood(good);
  res.status(200).send(true);
});

router.delete("/delete", (req, res) => {
  const good = new goodModel(req.body.category, req.body.price, req.body.picture);
  db.deleteGood(good);
  res.status(200).send(true);
});

router.put("/update", (req, res) => {
  const good = {category: req.body.category, price: req.body.price, picture: req.body.picture, oldCategory: req.body.oldCategory};
  db.updateGood(good);
  res.status(200).send(true);
});

// GET http request - se alle varer 
router.get("/returner_alle_varer/:email", (req, res) => {

  res.status(200).json(db.findGood(req.params.email));
});


module.exports = router;