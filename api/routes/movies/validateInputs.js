const Movies = require('../../../data/models/movies.model');

async function validateNewMovie(req, res, next) {
    // req.body is an Object
    if (Object.keys(req.body).length !== 3) {
        return res.status(400).json({message: "Objects in the rear view mirror may appear closer than they are."})
    }
    if (!req.body.title || !req.body.director || !req.body.metascore) {
        return res.status(400).json({message: "Objects in the rear view mirror may appear closer than they are."})
    }
    const movie = await Movies.findBy({title: req.body.title})
    // movie is an Array
    if (movie.length > 0) {
        return res.status(400).json({message: `The ${req.body.title} is already in the system.`})
    }
    next();
}

async function validateUpdateMovie(req, res, next) {
    if (!!req.body.title) {
    const movie = await Movies.findBy({title: req.body.title})
    // movie is an Array
    if (movie.length > 0) {
        return res.status(400).json({message: `The ${req.body.title} is already in the system.`})
    }
}
    next();
}

module.exports = {validateNewMovie, validateUpdateMovie}