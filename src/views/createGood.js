const { report } = require("../controller/user-controller");

document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const category = document.getElementById("category").value;
    const price = document.getElementById("price").value;
    const picture = document.getElementById("picture").value;

    
    const good = {
      category: category,
      price: price,
      picture: picture,
    };

    fetch("http://localhost:3000/goods/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(good),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          localStorage.setItem("good", JSON.stringify(good));
          window.alert("Varen er oprettet");
        }
      })
      .catch(() => {
        window.alert("Der skete en fejl");
      });
  });


  document.getElementById("delete").addEventListener("submit", (event) => {
    event.preventDefault();

    const good = JSON.parse(localStorage.getItem("good"));

    fetch("http://localhost:3000/goods/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((response) => {
        if (response) {
          localStorage.removeItem("good");
          window.alert("Vare er slettet")
        }
      })
      .catch(() => {
        window.alert("Der skete en fejl");
      });
  });
});

function updateGood(){
  // Henter user fra local storage og sætter til at være gamle e-mail
  var oldCategory = localStorage.getItem("good");
  oldCategory = JSON.parse(oldCategory)
  
  // Henter den nye information fra den ændrede bruger information
  var category = document.getElementById("category").value;
  var price = document.getElementById("price").value;
  var picture = document.getElementById("picture").value;
 

  // Creating a edited user object 
  const updateGood = {category: category, price: price, picture: picture, oldCategory: oldCategory.category};
  const Update = {category: category, price: price, picture: picture};

  fetch("http://localhost:3000/goods/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateGood),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          localStorage.setItem("good", JSON.stringify(Update))
          window.alert("Varen er opdateret");
        }
      })
      .catch(() => {
        window.alert("Der skete en fejl");
      });
    };  


  