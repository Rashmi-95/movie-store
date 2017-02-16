const dbConnection = require('../dbConfig.js')

function getMovieDetails (movieName) {
  const query = `select movie_name, to_char(release_date,'Mon-DD-YYYY') as release_date, studio from movie where movie_name =:movieName;`
  return dbConnection.query(query,
    {
      replacements: {movieName},
      type: dbConnection.QueryTypes.SELECT
    })
}

function getActorDetails (movieName) {
  const query = `select actor_name from actor where movie_name =:movieName;`
  return dbConnection.query(query,
    {
      replacements: {movieName},
      type: dbConnection.QueryTypes.SELECT
    })
}

function populateMovie (movieName, releaseDate, studio) {
  const query = `insert into movie values(:movieName,:releaseDate,:studio);`
  return dbConnection.query(query,
    {
      replacements: {movieName, releaseDate, studio},
      type: dbConnection.QueryTypes.INSERT
    })
}

function populateActor (movieName, actorName) {
  const query = `insert into actor values(:movieName, :actorName);`
  return dbConnection.query(query,
    {
      replacements: {movieName, actorName},
      type: dbConnection.QueryTypes.INSERT
    })
}

module.exports = {
  getMovieDetails,
  getActorDetails,
  populateMovie,
  populateActor
}
