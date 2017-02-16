const Sequelize = require('sequelize')
const database = (process.env.NODE_ENV === 'test') ? 'testmoviestore' : 'moviestore'
const sequelize = new Sequelize(`postgres://localhost:5432/${database}`)

module.exports = sequelize
