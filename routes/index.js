var express = require('express');
var router = express.Router();
var config = require('../knexfile').development
var knex = require('knex')(config)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

function logError (err) {
  console.log('Bother: ', err)
}

// displays the main list of bots
router.get('/botprofiles', function(req, res) {
  // res.send("testing router")
  knex('profiles')
    .then (function (data){
    res.render('botprofiles', {profiles: data})
    })
    .catch(logError)
})

router.get('/posts', function(req, res) {
  //res.send("testing router")
  knex.from ('posts')
    .innerJoin('profiles', 'profiles.post_id', 'posts.author_id' )
    .then (function (data){
    res.render('botposts', {posts: data})
    })
    .catch(logError)
})


module.exports = router;
