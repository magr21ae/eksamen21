var fs = require("fs");

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
}

class DB1 {
  constructor() {
    this.goods = this.openFile(GOODS_FILE);
  }
openFile(fileName) {
    const file = fs.readFileSync(ABSOLUTE_PATH + fileName);
    return JSON.parse(file);
  }

saveGoods(goods) {
  this.users.push(goods);
  this.saveFile(GOODS_FILE, JSON.stringify(this.goods));
  }
}


module.exports = new DB();
module.exports = new DB1();