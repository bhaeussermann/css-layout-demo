var express = require('express');
var router = express.Router();

router.get('/', function(_req, res, _next) {
  res.render('index', { title: 'CSS Layout' });
});
router.get('/scrolling', function(_req, res, _next) {
  res.render('scrolling', { title: 'Scrolling' });
});
router.get('/media-queries', function(_req, res, _next) {
  res.render('media-queries', { title: 'Media Queries' });
});

module.exports = router;
