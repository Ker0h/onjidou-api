const routes = require('express').Router()
const controller = require('../controllers/song.controller')

routes.get('/', controller.getAllSongs)
routes.get('/:title', controller.getSongByTitle)
routes.post('/', controller.createSong)
routes.put('/:title', controller.updateSong)
routes.delete('/:title', controller.deleteSong)

module.exports = routes