var config = require('./knexfile').development
var knex = require('knex')(config)

knex.from ('posts')
    .innerJoin('profiles', 'profiles.post_id', 'posts.author_id' )
    .then (function (data) {
      //console.log("I got the tables to join!", data)
      })
    .catch(logError)

    function logError (err) {
      console.log('Bother: ', err)
    }
