const express = require('express');
const ShortestController = require('../controllers/ShortestController');

const routes = express.Router();

routes.get('/decode', ShortestController.shorted);

routes.post('/encode', ShortestController.create);

module.exports = routes;