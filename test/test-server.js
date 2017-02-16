process.env.NODE_ENV = 'test'
const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')
const server = require('../server/app')
const Movie = require('../server/models/movie')
const should = chai.should()

chai.use(chaiHttp)

describe('To check the functionality of populating the database', function () {

  it('should return conformation statement, when POST method is called with url', function (done) {
    const url = {
      'paramountProvider': 'https://movie-api-lyalzcwvbg.now.sh/paramount',
      'dreamworksProvider': 'https://movie-api-lyalzcwvbg.now.sh/dreamworks',
      'actors': 'https://movie-api-lyalzcwvbg.now.sh/actors'
    }
    chai.request(server)
      .post('/populate')
      .send(url)
      .end(function (err, res) {
        expect(res.text).to.be.eqls('populated database')
        done()
      })
  })
  it('should return conformation statement, when POST method is called with url', function (done) {
    let urlUndefined
    const url = {
      'paramountProvider': urlUndefined,
      'dreamworksProvider': 'https://movie-api-lyalzcwvbg.now.sh/dreamworks',
      'actors': 'https://movie-api-lyalzcwvbg.now.sh/actors'
    }
    chai.request(server)
      .post('/populate')
      .send(url)
      .end(function (err, res) {
        expect(res.text).to.be.eqls('/paramount url doesnt contain details')
        done()
      })
  })
  it('should return conformation statement, when POST method is called with url', function (done) {
    let urlUndefined
    const url = {
      'paramountProvider': 'https://movie-api-lyalzcwvbg.now.sh/paramount',
      'dreamworksProvider': urlUndefined,
      'actors': 'https://movie-api-lyalzcwvbg.now.sh/actors'
    }
    chai.request(server)
      .post('/populate')
      .send(url)
      .end(function (err, res) {
        expect(res.text).to.be.eqls('/dreamworks url doesnt contain details')
        done()
      })
  })
  it('should return conformation statement, when POST method is called with url', function (done) {
    let urlUndefined
    const url = {
      'paramountProvider': 'https://movie-api-lyalzcwvbg.now.sh/paramount',
      'dreamworksProvider': 'https://movie-api-lyalzcwvbg.now.sh/dreamworks',
      'actors': urlUndefined
    }
    chai.request(server)
      .post('/populate')
      .send(url)
      .end(function (err, res) {
        expect(res.text).to.be.eqls('/actors url doesnt contain details')
        done()
      })
  })
})

describe('To check the functionality of getting Movie details', function () {
  it('should list a SINGLE movie details, when get request is called with movie name', function (done) {
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
