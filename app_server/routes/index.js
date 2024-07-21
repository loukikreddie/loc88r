var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'location-list' });
});

router.get('/location-info', function(req, res, next) {
  res.render('index', { title: 'location-info' });
});

router.get('/location-info/review', function(req, res, next) {
  res.render('index', { title: 'review page' });
});

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'about us' });
});

module.exports = router;

