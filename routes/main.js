var express = require('express');
var router = express.Router();

router.get('/', function(_req, res, _next) {
  res.render('index', { title: 'CSS Layout' });
});
router.get('/flexbox', function(_req, res, _next) {
  res.render('flexbox', { title: 'Flexbox' });
});
router.get('/grid', function(_req, res, _next) {
  res.render('grid', { title: 'Grid' });
});
router.get('/media-queries', function(_req, res, _next) {
  res.render('media-queries', { title: 'Media Queries' });
});
router.get('/scrolling', function(_req, res, _next) {
  res.render('scrolling', { title: 'Scrolling' });
});
router.get('/tabs', function(_req, res, _next) {
  res.render('tabs', { title: 'Tabs' });
});

module.exports = router;
