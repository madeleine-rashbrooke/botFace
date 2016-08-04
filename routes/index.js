var express = require('express');
var router = express.Router();
var config = require('../knexfile').development
var knex = require('knex')(config)

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

function logError (err) {
  console.log('Bother: ', err)
}

// displays the main list of bots
router.get('/botprofiles', function(req, res) {
  knex('profiles')
    .then (function (data){
    res.render('botprofiles', {profiles: data})
    })
    .catch(logError)
})

//this is the bit for getting the list of posts page
router.get('/posts', function(req, res) {
  knex.from ('posts')
    .innerJoin('profiles', 'profiles.post_id', 'posts.author_id' )
    .then (function (data){
    res.render('botposts', {posts: data})
    })
    .catch(logError)
})

//shows the 'add a new post' page
router.get('/new', function(req, res) {
  res.render('newpost')
  })

//posts the new post data to the table, then redirects to the posts list
router.post('/posts', function(req,res){
  var newPost = {
    content: req.body.content,
    author_id: req.body.author
    }
  knex('posts')
    .insert(newPost)
    // .insert([{content: req.body.content}, {author_id: req.body.author}])
    .then (function() {
      console.log("this is the new post: ", newPost)
      })
    .catch(logError)
  res.redirect('/posts')
  })

module.exports = router;
