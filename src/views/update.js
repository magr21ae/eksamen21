//1. UPDATE USER FUNCTION


function updateUser(){
  // Getting the email and password from local storage
  var oldEmail = localStorage.getItem("user");
  oldEmail = JSON.parse(oldEmail)
  

  // Getting the new information from the changed user info
  var email = document.getElementById("newEmail").value;
  var password = document.getElementById("newPassword").value;
 

  // Creating a edited user object 
  const updateUser = {email: email, password: password, oldEmail: oldEmail.email};
  const Update = {email: email, password: password};
  fetch("http://localhost:3000/users/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          localStorage.setItem("user", JSON.stringify(Update))
          location.href = "/index.html";
        }
      })
      .catch(() => {
        window.alert("Der skete en fejl");
      });
    };  
    

  






