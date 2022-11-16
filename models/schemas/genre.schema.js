const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId

var genreSchema = new Schema({
  name: {type: String, required: true},
  albums: [{type: String, ref: 'album', required: false}]
})

const Genre = mongoose.model('Genre', genreSchema)

module.exports = {
  Genre,
  genreSchema
}