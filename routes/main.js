var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'CSS Layout' });
});
router.get('/page-two', function(req, res, next) {
  res.render('page-two', { title: 'Page Two' });
});

module.exports = router;
