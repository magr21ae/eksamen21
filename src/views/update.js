//1. UPDATE USER FUNCTION

function editUser(){
  // Getting the email and password from local storage
  var email = localStorage.getItem("email");
  var password = localStorage.getItem("password");

  // Getting the new information from the changed user info
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
 

  // Creating a edited user object 
  const editedUser = {email, password};

  // Defining the request as patch and stringifying editedUser
  const options = {
      method: 'PATCH',
      headers: {
          "Content-type": "application/json"
      },
      body: JSON.stringify(editedUser),
  }

  // Fetching the user endpoint with the email and options
  fetch(`http://localhost:3000/user/${email}`, options)
};     




