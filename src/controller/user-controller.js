
const express = require("express");
const router = express.Router();
const userModel = require("./../models/user"); //Tager bruger vi har diffineret i anden fil og bruger her
const db = require("./../helpers/db"); 



//Denne reagerer når den får et input der matcher den diffination vi har på en user
router.post("/create", (req, res) => { 
  const user = new userModel(req.body.email, req.body.password);
  db.saveUser(user); //Her aktiveres selve saveUser funktion fra db.js, som gemmer user i users.json 
  res.status(200).send(true); //statuskode på success 
});

router.delete("/delete", (req, res) => {
  const user = new userModel(req.body.email, req.body.password);
  db.deleteUser(user);
  res.status(200).send(true);
});

router.post("/login", (req, res) => {
  const user = new userModel(req.body.email, req.body.password); //const (construct) er en filtype javascript 
  const found = db.findUser(user);
  if (found) {
    if (user.password == found.password) { //Hvis bruger er fundet og adgangskoden passer, vil den sende true
      res.status(200).send(true);
    } else {
      res.status(401).send(false); //Hvis adgangskoden ikke passer vil den sende false 
    }
  } else {
    res.status(404).send(false); //Hvis der ikke findes en bruger, så false
  }
});
/*
//UPDATE (put)
router.put('/update', controller.user_update);





router.put("/update", (req, res) => {
  //Hvilket id/index har jeg?
  const user = new userModel (req.body.email, req.body.password); //eget id hentes fra token
  const update = db.updateUser(user); //finder user i database
 
  //Hvad vil jeg opdatere?
  const user = req.body.email;
  const user = req.body.password;
 
  updateUser(); //opdateres i databasen

  res.send(update);
});

*/

module.exports = router;
