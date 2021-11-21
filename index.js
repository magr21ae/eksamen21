/* server.js filen bruges til at starte vores local server, og loade relevante filer. 
Gør så de øvrige filer i programmet kan snakke sammen.
Fordel fordi at man globalt kan gøre en gang at de snakker sammen, 
frem for at man skal binde filerne sammen en af gangen. */

const express = require("express");
const app = express();

// Controllers
const userController = require("./src/controller/user-controller");


// Start server
const PORT = 8080;
app.listen(PORT, () => {
    console.log('Listening on PORT:', PORT);
});

// Middleware - endnu et fedt term
app.use(express.static("./src/views"));
// Kommer som string -> JSON
app.use(express.json());

// Routes
app.use("/users", userController);

