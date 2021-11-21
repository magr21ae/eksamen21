document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("form").addEventListener("submit", (event) => {
      event.preventDefault();
  
      const name = document.getElementById("name").value;
      const price = document.getElementById("price").value;
      const imige = document.getElementById("imige").value;
  
      const goods = {
        name: name,
        price: price,
        imige: imige
      };
  
      fetch("http://localhost:3000/goods/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(goods),
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
  });
  