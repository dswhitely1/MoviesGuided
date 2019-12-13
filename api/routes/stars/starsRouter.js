const starRouter = require('express').Router();
const Stars = require('../../../data/models/stars.model');
const validateStars = require('./validateInputs')

async function getAllStars(req, res) {
    try {
        const stars = await Stars.find();
        res.json(stars);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

async function getStarById(req, res) {
    try {
        const star = await Stars.findBy({id: req.params.id})
        res.json(star[0])
    } catch (error) {
        res.status(500).json(error);
    }
}

async function addNewStar(req, res) {
    try {
        const star = await Stars.addStar(req.body);
        res.status(201).json(star[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

async function updateStar(req, res) {
    try {
        const star = await Stars.updateStar(req.params.id, req.body);
        res.json(star[0]);
    } catch (error) {
        res.status(500).json(error);
    }
}

async function deleteStar(req, res) {
    try {
        const count = await Stars.deleteStar(req.params.id);
        res.json(count);
    } catch (error) {
        res.status(500).json(error);
    }
}

starRouter
    .get('/', getAllStars)
    .get('/:id', getStarById)
    .post('/', validateStars.validateNewStar, addNewStar)
    .put('/:id', validateStars.validateUpdateStar, updateStar)
    .delete('/:id', deleteStar)

module.exports = starRouter;