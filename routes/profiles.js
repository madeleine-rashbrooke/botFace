var express = require('express');
var router = express.Router();
var config = require('../knexfile').development
var knex = require('knex')(config)

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.send({'hi':'hi'});
// });

function logError (err) {
  console.log('Bother: ', err)
}

//this is the bit for getting the list of profiles page
router.get('/', function(req, res) {
  knex('profiles')
    .then (function (data){
    res.render('botprofiles', {profiles: data})
    })
    .catch(logError)
})

//shows the 'add a new profile' page
router.get('/new', function(req, res) {
  res.render('newProfile')
  })

//saving the new rant into the posts table, then displays the rant list page
router.post('/', function(req,res){
  var newProfile = {
    botName: req.body.name,
    photoURL: req.body.photo,
    bio: req.body.bio
    }
  knex('profiles')
    .insert(newProfile)
    // .then (function() {
    // })
    .catch(logError)
  res.redirect('/profiles')
  })

router.delete('/:id', function(req, res, next) {
  knex('profiles')
  .where("id", req.params.id)
  .del()
  .catch(logError)
});

module.exports = router;
