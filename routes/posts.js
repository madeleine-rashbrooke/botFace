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

//saving the new post into the posts table, then displays the post list page
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
