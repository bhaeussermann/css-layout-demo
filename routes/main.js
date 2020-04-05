var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.redirect('/page-one');
});
router.get('/page-one', function(req, res, next) {
  res.render('page-one', { title: 'Page One' });
});
router.get('/page-two', function(req, res, next) {
  res.render('page-two', { title: 'Page Two' });
});

module.exports = router;
