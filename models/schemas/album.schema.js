const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId

var albumSchema = new Schema({
  name: {type: String, required: true},
  artist: {type: String, ref: 'artist', required: true},
  songs: [{type: String, ref: 'song', required: true}],
  genre: {type: String, ref: 'genre', required: false},
  releaseDate: {type: Date, required: true}
})

const Album = mongoose.model('Album', albumSchema)

module.exports = {
  Album,
  albumSchema
}