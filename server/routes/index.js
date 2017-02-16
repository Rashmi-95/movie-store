const express = require('express')
const router = express.Router()
const Movie = require('../models/movie')

router.get('/', function (req, res, next) {
  res.send('Movie Store!')
})

router.get('/movie/:movieName', findMovieByName)
router.post('/populate', populateDatabase)

function findMovieByName(req, res) {
  Movie.getMovieDetails(req.params.movieName)
    .then(function (movie) {
      console.log(movie)
      if(movie.length === 0) {
        res.send(`movie name doesnt exist`)
        return 0
      }
      const movieDetails = {}
      movieDetails.movieName = movie[0].movie_name
      movieDetails.releaseDate = movie[0].release_date
      console.log(movieDetails)
      Movie.getActorDetails(req.params.movieName)
        .then(function (actor) {
          const actorArray = []
          actor.forEach(function (arrayItem) {
            actorArray.push(arrayItem.actor_name)
          })
          console.log(actorArray)
          movieDetails.actors = actorArray
          movieDetails.studio = movie[0].studio
          res.json(movieDetails)
        })
        .catch(function (err) {
          res.json({ 'ERROR': err })
        })
    })
    .catch(function (err) {
      console.log(err)
      res.json({ 'ERROR': err })
    })
}

function populateDatabase(req, res) {
  const newUrls = {
    paramount: req.body.paramountProvider,
    dreamworks: req.body.dreamworksProvider,
    actors: req.body.actors
  }
  console.log(newUrl)
  if (newUrls.paramount === undefined) {
    return '/paramount url doesnt contain details'
  }
  if (newUrls.dreamworks === undefined) {
    return '/dreamworks url doesnt contain details'
  }
  if (newUrls.actors === undefined) {
    return '/actors url doesnt contain details'
  }
  Movie.populate(newUrls)
    .then(function (data) {
      res.json(data)
    })
    .catch(function (err) {
      res.json({ 'ERROR': err })
    })
}

module.exports = router
