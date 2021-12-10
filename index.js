/* index.js filen bruges til at starte vores local server, og loade relevante filer. 
Gør så de øvrige filer i programmet kan snakke sammen.
Fordel fordi at man globalt kan gøre en gang at de snakker sammen, 
frem for at man skal binde filerne sammen en af gangen. */

const express = require("express");
const app = express();


const userController = require("./src/controller/user-controller");
const goodsController = require("./src/controller/goods-controller");

//Opretter PORT 
const PORT = process.env.PORT || 3000;


app.use(express.static("./src/views"));
app.use(express.json());

// Oprettes globalt
app.use("/users", userController);
app.use("/goods", goodsController);

// Serveren startes
app.listen(PORT, console.log("Server is running", PORT));

