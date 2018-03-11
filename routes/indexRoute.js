var express = require('express');
var router = express.Router();
var path = require('path');
/* GET home page. */
router.get('/', function(req, res, next) {
  // res.sendFile(path.resolve('views/index.html'))
  res.render('index');
  var sys   = require('util'),
    spawn = require('child_process').spawn,
    dummy  = spawn('python', [path.resolve('python/test.py')]);

    dummy.stdout.on('data', function(data) {
      result = data.toString();
        // console.log(data.toString());
        console.log(result[0])
    });
});

oliverClosesOff = 'WalletID';
smartContractAddress = 'SmartContract Address';

router.post('/', (req,res,next)=>{
  // connect to the API
  // update contract
  // refresh page
})

module.exports = router;
