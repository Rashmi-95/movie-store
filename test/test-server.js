process.env.NODE_ENV = 'dfgd'
const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')
const server = require('../server/app')
const Movie = require('../server/models/movie')
const should = chai.should()

chai.use(chaiHttp)

describe('Movie Store', function () {
  it('should list a SINGLE movie details, when /movie/<movie name> ', function (done) {
    const movieName = 'Movie3'
    chai.request(server)
      .get('/movie/' + movieName)
      .end(function (err, res) {
        console.log(res.body)
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
  it('should return movie name doesnt exist, when movie name doesnt exist', function (done) {
    const movieName = 'Movie10'
    chai.request(server)
      .get('/movie/' + movieName)
      .end(function (err, res) {
         expect(res.text).to.be.eqls('movie name doesnt exist')
        done()
      })
  })
  it('should return movie doesnt exist, when movie name is undefined', function (done) {
    let movieName
    chai.request(server)
      .get('/movie/' + movieName)
      .end(function (err, res) {
         expect(res.text).to.be.eqls('movie name doesnt exist')
        done()
      })
  })

  it('should return movie doesnt exist, when movie name is not string', function (done) {
    let movieName
    chai.request(server)
      .get('/movie/' + movieName)
      .end(function (err, res) {
         expect(res.text).to.be.eqls('movie name doesnt exist')
        done()
      })
  })

})
