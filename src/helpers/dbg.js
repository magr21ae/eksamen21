var fs = require("fs"); //node.js filesystem gør det muligt at læse, oprette, opdatere, slette filer
const Good = require("../models/good");

const ABSOLUTE_PATH = __dirname + "/../../data";
const GOODS_FILE = "/goods.json";

class DBG {
  constructor() {
    this.goods = this.openFile(GOODS_FILE);
  }
  
  saveFile(fileName, contentString) {
    fs.writeFileSync(ABSOLUTE_PATH + fileName, contentString);
  }

  openFile(fileName) {
    const file = fs.readFileSync(ABSOLUTE_PATH + fileName);
    return JSON.parse(file);
  }

  saveGood(good) {
    this.goods.push(good);
    this.saveFile(GOODS_FILE, JSON.stringify(this.goods));
  }

  deleteGood(good) {
    this.goods = this.goods.filter((x) => x.category != good.category);
    this.saveFile(GOODS_FILE, JSON.stringify(this.goods));
  }

  findGood(good) {
    return this.goods.find((x) => user.category == x.category);
  }

  updateGood(good) {
    this.goods.push(good);
    this.saveFile(GOODS_FILE, JSON.stringify(this.goods));
  }

  
}

module.exports = new DBG();