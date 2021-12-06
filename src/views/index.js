//const { users } = require("../helpers/db");

document.addEventListener("DOMContentLoaded", (event) => {
  const user = localStorage.getItem("user");
  if (!user) {
    location.href = "/login.html";
  }

  document.getElementById("delete").addEventListener("submit", (event) => {
    event.preventDefault();

    const user = JSON.parse(localStorage.getItem("user")); //Her laves javascript construct om til JSON object

//Ved fetch sættes delete fra user-controller igang, og fjener selv dataen lokalt fra local storage 
    fetch("http://localhost:3000/users/delete", {  
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user), //Her laves JSON object om til Javascript construct 
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          localStorage.removeItem("user");
          location.href = "/register.html";
        }
      })
      .catch(() => {
        window.alert("Der skete en fejl");
      });
  });
});

 function logOutButton() {
  localStorage.clear();

 }
