var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/', function(req, res){
  var num = req.params.binaryNum
  res.send('proof of concept')
})

router.get('/:id', function(req,res){
  var num = Number(req.params.id)
  knex('profiles')
    .where('id', num)
    .then (function (bot) {
      res.render('indivProfile', bot[0])
    })
    .catch(logError)
})

module.exports = router;
