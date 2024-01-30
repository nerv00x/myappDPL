var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'I LOVE Bananas' });
});

router.get('/col', function(req, res, next) {
  res.send("It is not the richer who has the most but the one who needs the least");
});

module.exports = router;
