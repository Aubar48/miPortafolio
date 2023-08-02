var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  return res.render('index', { title: 'Comisión21' });
});

router.get('/about', function (req, res, next) {
  res.render('about', { title: 'Express' });
});

module.exports = router;
