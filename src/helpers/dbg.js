var fs = require("fs");

const ABSOLUTE_PATH = __dirname + "/../../data";
const GOODS_FILE = "/goods.json";

class DBG {
    constructor() {
      this.good = this.openFile(GOODS_FILE);
    }
    
    saveFile(fileName, contentString) {
      fs.writeFileSync(ABSOLUTE_PATH + fileName, contentString);
    }
  
    openFile(fileName) {
      const file = fs.readFileSync(ABSOLUTE_PATH + fileName);
      return JSON.parse(file);
    }
  
    saveGoods(good) {
      this.good.push(good);
      this.saveFile(GOODS_FILE, JSON.stringify(this.good));
    }
  
    deleteUser(good) {
      this.good = this.good.filter((x) => x.category != good.category);
      this.saveFile(GOODS_FILE, JSON.stringify(this.good));
    }
  
    findUser(good) {
      return this.good.find((x) => good.category == x.category);
    }
  }
  module.exports = new DBG();