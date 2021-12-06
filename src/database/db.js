var fs = require("fs"); //node.js filesystem gør det muligt at læse, oprette, opdatere, slette filer
const User = require("../models/user");

const ABSOLUTE_PATH = __dirname + "/../../data";
const userFILE = "/users.json";


class DB {
  constructor() {
    this.users = this.openFile(userFILE);
  }

//Skaber en path til en fil
  openFile(fileName) {
    const file = fs.readFileSync(ABSOLUTE_PATH + fileName);
    return JSON.parse(file);
  }

//Gemmer data  
  saveFile(fileName, contentString) {
    fs.writeFileSync(ABSOLUTE_PATH + fileName, contentString);
  }
  
//Opretter data ved hjælp af push i JSON data fil 
  saveUser(user) {
    this.users.push(user);
    this.saveFile(userFILE, JSON.stringify(this.users));
  }

  deleteUser(user) {
    this.users = this.users.filter((x) => x.email != user.email);
    this.saveFile(userFILE, JSON.stringify(this.users));
  }

  findUser(user) {
    return this.users.find((x) => user.email == x.email);
  }

  updateUser(user) {
    for (let i = 0; i < this.users.length; i++) {
      console.log(this.users[i]);
      console.log(user);
      if (this.users[i].email == user.oldEmail) {
        this.users[i].email = user.email;
        this.users[i].password = user.password;
      }
    }
    this.saveFile(userFILE, JSON.stringify(this.users));
  }

  
}

module.exports = new DB();
