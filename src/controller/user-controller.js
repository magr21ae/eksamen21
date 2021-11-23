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
//Funktion OpdaterProfil()
router.put('/user/:id',(req,res) => {
  let userModel = req.params.id
  let user = users.find(function (u) { 
      return u.email==email;
  });

  if(user){
      let change =req.body;
      //Alt fra brugerenn kommer ind i det tomme objekt, også kommer alt det fra change ind i objektet
      let changedUser=userModel.assign({},user,change);
      res.send(changedUser);
  }else{

      res.send(404,'user not found');
  }

});


module.exports = router;