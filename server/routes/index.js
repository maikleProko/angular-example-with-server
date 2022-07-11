var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var router = express.Router();
router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/brokers', function(req, res, next) {
  var brokers_json = JSON.parse(fs.readFileSync("./brokers.json"))
  console.log(brokers_json);
  res.json(brokers_json);
});

router.post('/brokers',(req)=>{
  var broker = req.body;
  console.log(broker);
  fs.writeFile("./brokers.json", JSON.stringify(broker),function(err, result) {
    if(err) console.log('error', err);
  });
});


router.get('/stocks', function(req, res, next) {
  var stocks_json = JSON.parse(fs.readFileSync("./stocks.json"))
  console.log(stocks_json);
  res.send(stocks_json);
});

router.post('/stocks',(req)=>{
  var stocks = req.body;
  console.log(stocks);
  fs.writeFile("./stocks.json", JSON.stringify(stocks),function(err, result) {
    if(err) console.log('error', err);
  });
});



router.get('/option', function(req, res, next) {
  var option_json = JSON.parse(fs.readFileSync("./option.json"))
  console.log(option_json);
  res.send(option_json);
});

router.post('/option',(req)=>{
  var option = req.body;
  console.log(option);
  fs.writeFile("./option.json", JSON.stringify(option),function(err, result) {
    if(err) console.log('error', err);
  });
});


module.exports = router;
