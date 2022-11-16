const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId

var songSchema = new Schema({
  title: {type: String, required: true}
})

const Song = mongoose.model('Song', songSchema)

module.exports = {
  Song,
  songSchema
}