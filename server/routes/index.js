const express = require('express')
const router = express.Router()
const Movie = require('../models/movie')
const axios = require('axios')

router.get('/', function (req, res, next) {
  res.send('Movie Store!')
})

router.get('/movie/:movieName', findMovieByName)
router.post('/populate', populateDatabase)

const getJson = (url) => axios.get(url)

function findMovieByName(req, res) {
  Movie.getMovieDetails(req.params.movieName)
    .then(function (movie) {
      if (movie.length === 0) {
        res.send(`movie name doesnt exist`)
        return 0
      }
      const movieDetails = {}
      movieDetails.movieName = movie[0].movie_name
      movieDetails.releaseDate = movie[0].release_date
      Movie.getActorDetails(req.params.movieName)
        .then(function (actor) {
          const actorArray = []
          actor.forEach(function (arrayItem) {
            actorArray.push(arrayItem.actor_name)
          })
          movieDetails.actors = actorArray
          movieDetails.studio = movie[0].studio
          res.json(movieDetails)
        })
        .catch(function (err) {
          res.json({ 'ERROR': err })
        })
    })
    .catch(function (err) {
      res.json({ 'ERROR': err })
    })
}

function populateDatabase(req, res) {
  const newUrls = {
    paramount: req.body.paramountProvider,
    dreamworks: req.body.dreamworksProvider,
    actors: req.body.actors
  }
  if (newUrls.paramount === undefined) {
    res.send('/paramount url doesnt contain details')
    return 0
  }
  if (newUrls.dreamworks === undefined) {
    res.send('/dreamworks url doesnt contain details')
    return 0
  }
  if (newUrls.actors === undefined) {
    res.send('/actors url doesnt contain details')
    return 0
  }

  getJson(newUrls.paramount, 'paramount')
    .then(function (response) {
      Movie.populateMovie(response.data, 'paramount')
    })
    .catch(function (response) {
      res.send('no data')
    })

  getJson(newUrls.dreamworks)
    .then(function (response) {
      Movie.populateMovie(response.data, 'dreamworks')
    })
    .catch(function (response) {
      res.send(response.data)
    })

  getJson(newUrls.actors)
    .then(function (response) {
      Movie.populateActor(response.data)
    })
    .catch(function (response) {
      res.send(response.data)
    })
}

module.exports = router
