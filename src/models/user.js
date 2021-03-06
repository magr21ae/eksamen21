
// Definition af hvilke parametre en bruger skal have

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
}

module.exports = User;
  

/* Da man har så få brugere, kan man nøjes med at have en simpel diffinition
På trods af at det er ineffektivt når man skal søge i databasen, generelt ville man arbejde med algoritmer. */