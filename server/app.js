const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const http = require('http')

const routes = require('./routes/index.js')

const app = express()

const config = require('./dbConfig.js')

app.use(bodyParser.json())

app.use('/', routes)

const server = http.createServer(app)
server.listen(3009, function () {
  console.log('Node server running on http://localhost:3009')
})

module.exports = app
