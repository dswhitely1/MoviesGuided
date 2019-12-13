const Stars = require('../../../data/models/stars.model');

async function validateNewStar(req, res, next) {
    // req.body is an Object
    if (Object.keys(req.body).length !== 1) {
        return res.status(400).json({message: "Objects in the rear view mirror may appear closer than they are."})
    }
    // if (!!req.body.name || !!req.body.director || !!req.body.metascore) {
    //     return res.status(400).json({message: "Objects in the rear view mirror may appear closer than they are."})
    // }
    const star = await Stars.findBy({name: req.body.name})
    // star is an Array
    if (star.length > 0) {
        return res.status(400).json({message: `The ${req.body.name} is already in the system.`})
    }
    next();
}

async function validateUpdateStar(req, res, next) {
    if (!!req.body.name) {
    const star = await Stars.findBy({name: req.body.name})
    // star is an Array
    if (star.length > 0) {
        return res.status(400).json({message: `The ${req.body.name} is already in the system.`})
    }
}
    next();
}

module.exports = {validateNewStar, validateUpdateStar}