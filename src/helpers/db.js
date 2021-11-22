var fs = require("fs"); //node.js filesystem gør det muligt at læse, oprette, opdatere, slette filer
const User = require("../models/user");

const ABSOLUTE_PATH = __dirname + "/../../data";
const USER_FILE = "/users.json";
const GOODS_FILE = "/goods.json";

class DB {
  constructor() {
    this.users = this.openFile(USER_FILE);
  }
  
  saveFile(fileName, contentString) {
    fs.writeFileSync(ABSOLUTE_PATH + fileName, contentString);
  }

  openFile(fileName) {
    const file = fs.readFileSync(ABSOLUTE_PATH + fileName);
    return JSON.parse(file);
  }

  saveUser(user) {
    this.users.push(user);
    this.saveFile(USER_FILE, JSON.stringify(this.users));
  }

  deleteUser(user) {
    this.users = this.users.filter((x) => x.email != user.email);
    this.saveFile(USER_FILE, JSON.stringify(this.users));
  }

  findUser(user) {
    return this.users.find((x) => user.email == x.email);
  }
  
  //Update user
  writeUserData() { 
    fs.writeFile('./data/users.json', JSON.stringify(this.user));
  };
}

module.exports = new DB();
