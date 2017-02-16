const dbConnection = require('../dbConfig.js')

function getMovieDetails(movieName) {
  const query = `select movie_name, to_char(release_date,'Mon-DD-YYYY') as release_date, studio from movie where movie_name =:movieName;`
  return dbConnection.query(query,
    {
      replacements: { movieName },
      type: dbConnection.QueryTypes.SELECT
    })
}

function getActorDetails(movieName) {
  const query = `select actor_name from actor where movie_name =:movieName;`
  return dbConnection.query(query,
    {
      replacements: { movieName },
      type: dbConnection.QueryTypes.SELECT
    })
}

function populateMovie(movieObject, studio) {
  console.log(movieObject)
  movieObject.forEach(function (item) {
    const name = item.movieName
    const date = item.releaseDate
    dbConnection.query('insert into movie values(:name,:date,:studio);',
      {
        replacements: { name, date, studio },
        type: dbConnection.QueryTypes.INSERT
      })
  })
}

function populateActor(actorObject) {
  console.log(actorObject)
  actorObject.forEach(function (item) {
    const name = item.actorName
    const movies = item.movies
    movies.forEach(function (movieitem) {
      console.log(name, movieitem)
      dbConnection.query(`insert into actor values(:name, :movieitem);`,
        {
          replacements: { name, movieitem },
          type: dbConnection.QueryTypes.INSERT
        })
    })
  })
}

module.exports = {
  getMovieDetails,
  getActorDetails,
  populateMovie,
  populateActor
}
