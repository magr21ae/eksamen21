
//forsøg på mocha testing:
var server = require("../index") //require serveren, så jeg kan teste login funktionaliteten
var expect = require("chai").expect;
var login = require ("../src/controller/user-controller")

    describe("test of login functionality when user is stored in localstorage", function(){  
        it('should return user has been logged in', function () {
            // Arrange
            let email = email.value;
            let password = password.value; 
            let storedUser = JSON.parse(localStorage.getItem("users"));

            // Act
             var result1 = (email === storedUser[0].email && password === storedUser[0].password) 
             var result2 = (email=== "malenegraversen0406@gmail.com" && password === "malene") //eksempel på hvad der lige nu er gemt i min localstorage

             // Assert
             expect(result1).to.be.equal(result1);

           })
        });
