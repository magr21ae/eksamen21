//const { users } = require("../helpers/db");

document.addEventListener("DOMContentLoaded", (event) => {
  const user = localStorage.getItem("user");
  if (!user) {
    location.href = "/login.html";
  }

  document.getElementById("delete").addEventListener("submit", (event) => {
    event.preventDefault();

    const user = JSON.parse(localStorage.getItem("user")); // Javascript construct om til JSON object

// Ved fetch sættes delete fra user-controller igang, og fjener selv dataen lokalt fra local storage 
    fetch("http://localhost:3000/users/delete", {  
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user), // JSON object om til Javascript construct 
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          localStorage.removeItem("user"); // Fjerner data fra Local Storage 
          location.href = "/register.html"; 
        }
      })
      .catch(() => {
        window.alert("Der skete en fejl");
      });
  });
});
// Log ud funktion der rydder Local Storage 
 function logOutButton() {
  localStorage.clear();

 }
