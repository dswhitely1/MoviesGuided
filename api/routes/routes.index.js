const testRouter = require('express').Router();
const movieRouter = require('./movies/moviesRouter')
const starRouter = require('./stars/starsRouter');
const movieStarRouter = require('./movie-stars/movies-stars.router');

function testRoute(req, res) {
    res.json({api: 'it\'s working'})
}

testRouter.get('/', testRoute);

module.exports = server => {
    server.use('/', testRouter);
    server.use('/api/movies', movieRouter);
    server.use('/api/stars', starRouter);
    server.use('/api/movie-stars', movieStarRouter);
}