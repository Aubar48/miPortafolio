/* requerimos express y router*/
var express = require('express');
var router = express.Router();
/* requerimos en una constante controller para utilizarla en las rutas*/
const indexController = require('../controllers/indexControllers')

/* llamamos a indexController.index - . about para cada ruta */
router.get('/', indexController.index);

router.get('/about', indexController.about);

/* exportamos las rutas*/
module.exports = router;
