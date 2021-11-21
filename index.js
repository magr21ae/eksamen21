/* server.js filen bruges til at starte vores local server, og loade relevante filer. 
Gør så de øvrige filer i programmet kan snakke sammen.
Fordel fordi at man globalt kan gøre en gang at de snakker sammen, 
frem for at man skal binde filerne sammen en af gangen. */

const express = require("express");
const app = express();

// Controllers
const userController = require("./src/controller/user-controller");
const goodsController = require("./src/controller/goods-controller");

const PORT = process.env.PORT || 3000;

// Middleware - endnu et fedt term
app.use(express.static("./src/views"));
// Kommer som string -> JSON
app.use(express.json());

// Routes
app.use("/users", userController);
app.use("/goods", goodsController);

// Start server
app.listen(PORT, console.log("Server is running", PORT));

