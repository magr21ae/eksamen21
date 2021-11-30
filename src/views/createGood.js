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
});

document.addEventListener("DOMContentLoaded", (event) => {
  const good = localStorage.getItem("good");
  

  document.getElementById("delete").addEventListener("submit", (event) => {
    event.preventDefault();

    const good = JSON.parse(localStorage.getItem("good"));

    fetch("http://localhost:3000/goods/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(good),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          localStorage.removeItem("good");
          window.alert('Vare er slettet')
        }
      })
      .catch(() => {
        window.alert("Der skete en fejl");
      });
  });
});


  