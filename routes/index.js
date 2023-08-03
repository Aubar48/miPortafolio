var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexControllers')

/* GET home page. */
router.get('/', indexController.index);

router.get('/about', indexController.about);

module.exports = router;
