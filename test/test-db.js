process.env.DEV_ENV = 'test'
const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')
const server = require('../server/app')
const should = chai.should()

chai.use(chaiHttp)

describe('To check the functionality of getting movie details', function () {
  it('sshould return movie details, when movie name is passed', function (done) {
    const movieName = 'Movie 3'
    chai.request(server)
      .get('/movie/' + movieName)
      .end(function (err, res) {
        res.should.have.status(200)
        res.should.be.json
        res.body.should.be.a('object')
        res.body.should.have.property('movieName')
        res.body.should.have.property('releaseDate')
        res.body.should.have.property('studio')
        res.body.should.have.property('actors')
        res.body.movieName.should.equal(movieName)
        done()
      })
  })
  it('should return no movie exist, when invalid movie name is passed', function (done) {
    const movieName = 'Movie10'
    chai.request(server)
      .get('/movie/' + movieName)
      .end(function (err, res) {
        expect(res.text).to.be.eqls('movie name doesnt exist')
        done()
      })
  })
  it('should return no movie exist, when movie name is passed', function (done) {
    let movieName
    chai.request(server)
      .get('/movie/' + movieName)
      .end(function (err, res) {
        expect(res.text).to.be.eqls('movie name doesnt exist')
        done()
      })
  })
})
