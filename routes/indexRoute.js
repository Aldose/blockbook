var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/', (req,res,next)=>{
  // connect to the API
  // update contract
  // refresh page
})

module.exports = router;
