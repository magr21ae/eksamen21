const express = require("express");
const router = express.Router();
const userModel = require("./../models/user");
const db = require("../database/db");
const { user } = require("../database/db");

//POST http - kalder saveUser funktion 
router.post("/create", (req, res) => {
  const user = new userModel(req.body.email, req.body.password);
  db.saveUser(user);
  res.status(200).send(true);
});

// POST - If statement (finder matchende bruger)
router.post("/login", (req, res) => {
  const user = new userModel(req.body.email, req.body.password);
  const found = db.findUser(user);
  if (found) {
    if (user.password == found.password) {
      res.status(200).send(true);
    } else {
      res.status(401).send(false);
    }
  } else {
    res.status(404).send(false);
  }
});

// DELETE - kalder deleteUser funktion
router.delete("/delete", (req, res) => {
  const user = new userModel(req.body.email, req.body.password);
  db.deleteUser(user);
  res.status(200).send(true);
});

// PUT - henter fra body og kalder updateUser funktion
router.put("/update", (req, res) => {
  const user = {email: req.body.email, password: req.body.password, oldEmail: req.body.oldEmail};
  db.updateUser(user);
  res.status(200).send(true);
});


module.exports = router;