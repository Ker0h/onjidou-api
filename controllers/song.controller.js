const Errors = require('../../../vuejs/Studypedia API/errorHandling/errorcodes')

const Song = require('../models/schemas/song.schema').Song

let getAllSongs = (req, res) => {
    Song.find({})
    .then(songs => {
        res.status(200).json(songs).end()
    })
}

let getSongByTitle = (req, res) => {
    let title = req.params.title

    Song.findOne({title: title})
        .then(song => {
            res.status(200).json(song).end();
        })
        .catch(error => {
            let err = Errors.notFound()
            res.status(err.code).json(error).end();
        })
}

let createSong = (req, res) => {
    let title = req.body.title || ''

    const song = new Song ({
        title: title
    })

    song.save()
        .then(song => {
            res.status(201).json(song).end();
        })
        .catch(error => {
            let err = Errors.internalServerError()
            res.status(err.code).json(error).end();
        })
}

let updateSong = (req, res) => {
    let title = req.params.title || ''

    if (title == '') {
        let err = Errors.PreconditionFailed()
        res.status(err.code).json(err).end()
    }

    let newTitle = req.body.title || ''

    Song.findByOneAndUpdate({ title: title }, { title: newTitle }, (err, song) => {
        if (err) {
            res.json(err).end()
        } else {
            res.status(204).json(song).end()
        }
    })
}

let deleteSong = (req, res) => {

    let title = req.params.title || ''

    if (title == '') {
        let err = Errors.PreconditionFailed()
        res.status(err.code).json(err).end()
    }

    Song.findOneAndDelete({ title: title }, (err, song) => {
        if (err) {
            res.json(err).end()
        } else {
            res.status(204).json(`${song.title} deleted`).end()
        }
    })
}

module.exports = {
    getAllSongs,
    getSongByTitle,
    createSong,
    updateSong,
    deleteSong
}