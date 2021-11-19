const express = require("express");
const app = express();

//Opretter local server som programmet kan køres på
PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is listening on port:", PORT);
});



app.use(express.json());