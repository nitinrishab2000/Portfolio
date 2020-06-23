const express = require('express');
const router = express.Router();

const portfolioController = require('../controllers/portfolio');

router.get('/',portfolioController.getportFolio);

module.exports = router;