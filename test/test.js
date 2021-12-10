
// Test af login funktionalitet
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should()

chai.use(chaiHttp);

// Test - Er bruger logget ind? 
describe('login', () => {
  describe('POST /login', () => {
    it('should return a 200 response if the user is logged in', function(done){
      chai
      .request('http://localhost:3000/users')
      .post("/login")
      .send({email:"magr21ae@student.cbs.dk", password:"ko"})
      .end((err, res) => {
        res.should.have.status(200)
        done()
      })
      // Test - Stemmer e-mail men ikke password? 
      describe('login', () => {
        describe('POST /login', () => {
      it('should return a 401 response if the password is not correct', function(done){
        chai
        .request('http://localhost:3000/users')
        .post("/login")
        .send({email:"magr21ae@student.cbs.dk", password:"hej"})
        .end((err, res) => {
          res.should.have.status(401)
          done()
        })})})
        // Test - Stemmer hverken e-mail eller password? 
        describe('login', () => {
          describe('POST /login', () => {
        it('should return a 404 response if the user does not exist in the database', function(done){
          chai
          .request('http://localhost:3000/users')
          .post("/login")
          .send({email:"ko@mail.dk", password:"ko"})
          .end((err, res) => {
            res.should.have.status(404);
            done()
          })})})

    });
  })
  })})})