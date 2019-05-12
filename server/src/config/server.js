const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const port = 3003
const request = require('request');
const http = require('http')
const routes = require('./routes')

const model = require('../controller/mercado')


server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)


server.get('/api/items/:id', function(req, res, rep) {
  routes.getId(req.params.id, function(response) {
    res.write(response)
    res.end()
  })
})

server.get('/', function(req, res, rep) {
  routes.getProduto(function(response) {
    res.write(response)    
    res.end()
  })
})

server.get('/api/items/:id/:description', function(req, res, rep) {
  
})




server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server