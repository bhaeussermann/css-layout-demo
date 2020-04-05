var express = require('express');
var router = express.Router();

router.get('/', function(_req, res, _next) {
  res.render('index', { title: 'CSS Layout' });
});
router.get('/scrolling', function(_req, res, _next) {
  res.render('scrolling', { title: 'Scrolling' });
});

module.exports = router;
