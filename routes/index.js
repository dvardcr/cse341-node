const routes = require('express').Router();
const lessonOneController = require('../controllers/lesson1');

routes.get('/', lessonOneController.indexRoute);

module.exports = routes;