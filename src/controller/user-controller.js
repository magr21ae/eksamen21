const express = require("express");
const router = express.Router();
const userModel = require("./../models/user");
const db = require("./../helpers/db");
const dbg = require("./../helpers/dbg");
const { user } = require("./../helpers/db");

router.post("/create", (req, res) => {
  const user = new userModel(req.body.email, req.body.password);
  db.saveUser(user);
  res.status(200).send(true);
});

router.delete("/delete", (req, res) => {
  const user = new userModel(req.body.email, req.body.password);
  db.deleteUser(user);
  res.status(200).send(true);
});

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
router.patch("/:email", (req, res) =>{
  // Requesting the parameter to get an identifier
  const { email } = req.params;

  // Requesting the body to get the new changes
  const editedUser = req.body;

  // Using the patch function from storage
  patchingUser( email, editedUser );
  res.send('User has been updated');
});


module.exports = router;