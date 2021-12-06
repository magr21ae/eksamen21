
// Test af login funktionalitet

const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should()

chai.use(chaiHttp);

describe('login', () => {
  describe('POST /login', () => {
    it('should return a 200 response if the user is logged in', function(done){
      chai
      .request('http://localhost:3000/users')
      .post("/login")
      .send({email:"malenegraversen0406@gmail.com", password:"malene"})
      .end((err, res) => {
        res.should.have.status(200)
        done()
      })
      describe('login', () => {
        describe('POST /login', () => {
      it('should return a 401 response if the user is not logged in', function(done){
        chai
        .request('http://localhost:3000/users')
        .post("/login")
        .send({email:"malenegraversen0406@gmail.com", password:"hejhej"})
        .end((err, res) => {
          res.should.have.status(401)
          done()
        })})})
        describe('login', () => {
          describe('POST /login', () => {
        it('should return a 404 response if the user does not exist in the database', function(done){
          chai
          .request('http://localhost:8000/users')
          .post("/login")
          .send({email:"malenegraversen0406@gmail.com", password:"farvel"})
          .end((err, res) => {
            res.should.have.status(404);
            done()
          })})})

    });
  })
  })})})