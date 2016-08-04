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

//this is the bit for getting the list of posts page
router.get('/', function(req, res) {
  knex.from ('posts')
    .innerJoin('profiles', 'profiles.post_id', 'posts.author_id' )
    .then (function (data){
    res.render('botposts', {posts: data})
    })
    .catch(logError)
})

//shows the 'add a new post' page
router.get('/new', function(req, res) {
  res.render('newRant')
  })

//saving the new rant into the posts table, then displays the rant list page
router.post('/', function(req,res){
  var newPost = {
    content: req.body.content,
    author_id: req.body.author
    }
  knex('posts')
    .insert(newPost)
    .catch(logError)
  res.redirect('/rants')
  })

module.exports = router;
