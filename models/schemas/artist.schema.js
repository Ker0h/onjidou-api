const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId

var artistSchema = new Schema({
  name: {type: String, required: true},
  albums: [{type: String, ref: 'album', required: false}]
})

const Artist = mongoose.model('Artist', artistSchema)

module.exports = {
  Artist,
  artistSchema
}