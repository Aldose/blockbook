var express = require('express');
var router = express.Router();
var path = require('path');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.resolve('views/index.html'))
});

oliverClosesOff = 'WalletID';
smartContractAddress = 'SmartContract Address';

router.post('/', (req,res,next)=>{
  // connect to the API
  // update contract
  // refresh page
})

module.exports = router;
