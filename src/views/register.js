document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    //Variabel der definere hvilke keys og values der gælder for en user
    const user = {
      email: email,
      password: password,
    };

    //Fetch http request - metode: POST
    fetch("http://localhost:3000/users/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          location.href = "/login.html";
        }
      })
      .catch(() => {
        window.alert("Kunne ikke oprette bruger");
      });
  });
});
