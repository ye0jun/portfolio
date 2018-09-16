var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'YEOJUN PORTFOLIO' });
});

router.get('/robots.txt', function (req, res) {
  res.type('text/plain');
  res.send("User-agent: *\nDisallow: /");
});

module.exports = router;
