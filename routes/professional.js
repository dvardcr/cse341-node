const express = require('express');
const router = express.Router();
const mainController = require('../controllers/professional');

router.get('/', mainController.getData);

module.exports = router;