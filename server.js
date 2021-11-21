/* server.js filen bruges til at starte vores local server, og loade relevante filer. 
Gør så de øvrige filer i programmet kan snakke sammen.
Fordel fordi at man globalt kan gøre en gang at de snakker sammen, 
frem for at man skal binde filerne sammen en af gangen. */


const express = require("express");
const app = express();

//Opretter local server som programmet kan køres på
PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is listening on port:", PORT);
});

// Controllers
const userController = require("./src/controllers/user-controller");


app.use(express.json());