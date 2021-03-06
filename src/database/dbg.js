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
    this.goods = this.goods.filter((x) => x.email != good.email);
    this.saveFile(GOODS_FILE, JSON.stringify(this.goods));
  }
  //Finder varer ud fra brugers e-mail
  findGood(email) {
    const goods = [];
    
    for (let i = 0; i < this.goods.length; i++) {
      if (this.goods[i].email == email) {
        goods.push(this.goods[i])
      } 
    }
    return goods;
  }

  updateGood(good) {
    for (let i = 0; i < this.goods.length; i++) {
      console.log(this.goods[i]);
      console.log(good);
      if (this.goods[i].category == good.oldCategory) {
        this.goods[i].category = good.category;
        this.goods[i].price = good.price;
        this.goods[i].picture = good.picture;
      }
    }
    this.saveFile(GOODS_FILE, JSON.stringify(this.goods));
  }
  
}

module.exports = new DBG();