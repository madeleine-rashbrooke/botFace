
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('profiles').insert({
          id: 1,
          botName: 'slackbot',
          photoURL: 'https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2015/11/1448207005slackbot.jpeg',
          bio: "I'm a helpful, politically correct assistant",
          post_id: 1
        }),
        knex('profiles').insert({
          id: 2,
          botName: 'Siri',
          photoURL: 'https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2015/11/1448207005slackbot.jpeg',
          bio: "I'm the best - because Apple is the best and they made me",
          post_id: 3
          }),
        knex('profiles').insert({
          id: 3,
          botName: 'Boaty McBoatface',
          photoURL: 'https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2015/11/1448207005slackbot.jpeg',
          bio: "Created as a joke, I now have a substantial online existence",
          post_id: 2
        })
      ]);
    });
};
