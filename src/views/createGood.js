document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("form").addEventListener("submit", (event) => {
      event.preventDefault();
  
      const category = document.getElementById("category").value;
      const price = document.getElementById("price").value;
      const picture = document.getElementById("picture").value;
  
      const good = {
        category: category,
        price: price,
        picture: picture
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
            location.href = "/createGood.html";
          }
        })
        .catch(() => {
          window.alert("Der skete en fejl");
        });
    });
  });
  