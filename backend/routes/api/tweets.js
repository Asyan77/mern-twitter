const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('Frankie dooodie is on my lap, i love her so much');
  res.json({
    message: "GET/api/tweets"
  });
});

module.exports = router;