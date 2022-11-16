const routes = require('express').Router()
const song_routes = require('./song.route')

routes.get('/', (req, res) => res.status(200).json({"messsage": "Hello World!"}))
routes.use('/songs', song_routes)
routes.use('*', (req, res) => res.status(404).json({"message": "Not found"}).end())

module.exports = routes