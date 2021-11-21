//Når der er tjekket om en bruger er logget ind så låses der op for resten
const router = require("../controllers/user-controller"); 
  
document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

  });
