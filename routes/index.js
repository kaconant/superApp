var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let dataForTemplate = {
    title: 'Express',
    myName: 'krissy conant',
    cats: ['oakley', 'milla']
  };
  
  res.render('index', dataForTemplate);
});

module.exports = router;
