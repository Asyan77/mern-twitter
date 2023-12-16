var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Frankie dooodie is on my lap, i love her so much');
});

module.exports = router;
