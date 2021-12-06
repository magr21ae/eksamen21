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
          location.href = "/index.html";
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

  function updateGood(){
    // Getting the email and password from local storage
    var oldCategory = localStorage.getItem("good");
    oldCategory = JSON.parse(oldCategory)
    
  
    // Getting the new information from the changed user info
    var category = document.getElementById("category").value;
    var price = document.getElementById("price").value;
    var picture = document.getElementById('picture').value;
   
  
    // Creating a edited user object 
    const updateGood = {category: category, price: price, oldCategory: oldCategory.category};
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
            location.href = "/index.html";
          }
        })
        .catch(() => {
          window.alert("Der skete en fejl");
        });
      }; 

    });