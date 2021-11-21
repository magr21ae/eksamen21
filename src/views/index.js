const router = require("../controllers/user-controller");

//
document.addEventListener("DOMContentLoaded", (event) => { //Kan bruges alle steder hvor man gerne vil have at brugeren err logget ind 
  const user = localStorage.getItem("user");               //Tjekker - er bruger en bruger og er de logget ind
  if (!user) {
    location.href = "/login.html";
  }

//Når der er tjekket om en bruger er logget ind så låses der op for resten
  document.getElementById("delete").addEventListener("submit", (event) => {
    event.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    fetch("http://localhost:3000/users/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          localStorage.removeItem("user"); //Fjerner user den finder 
          location.href = "/register.html"; //Sender tilbage til register
        }
      })
      .catch(() => {
        window.alert("Der skete en fejl");
      });
  });
  

  
});