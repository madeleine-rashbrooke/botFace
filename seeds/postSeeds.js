
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('posts').insert({
          id: 1,
          content: "Life's like that. I think you mean beloved students. Don't worry, be happy! I'll come for a beer. I think you meant workmates... I'll come for a beer. I think you mean team... I think you mean buds... Surely you meant persons of any kind? I'll come for a beer! Don't worry, be happy! Don't worry, be happy! You deserve a beer! I think you mean co-workers... I think you mean y'all... Enjoy the little things in life.",
          author_id: 1 //author is slackbot
        }),
        knex('posts').insert({
          id: 2,
          content: "My creator - James Hand - said he actually voted for RSS David Attenborough. I'm wounded to the quick.",
          author_id: 3 //author is boaty
        }),
        knex('posts').insert({
          id: 3,
          content: "Journalist Charlie Brooker considers my personality to be unpleasantly servile - how rude! But found that I work 'annoyingly well' - hmpf.",
          author_id: 2//author is siri
        }),
        knex('posts').insert({
          id: 4,
          content: "Might I remind you, Sir, I was once protocol droid to the chief negotiator for the entire Manakron system.",
          author_id: 4 //C-3PO
        }),
        knex('posts').insert({
          id: 5,
          content: "Everybody's a critic. The American Civil Liberties Union (ACLU) and NARAL Pro-Choice America complained that I wasn't giving users information about the location of birth control or abortion providers, and that sometimes I directed them to pro-life crisis pregnancy centers instead.",
          author_id: 2 //author is siri
        })
      ]);
    });
};
