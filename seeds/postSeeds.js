
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('posts').insert({
          id: 1,
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          author_id: 1
        }),
        knex('posts').insert({
          id: 2,
          content: 'Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. ',
          author_id: 3
        }),
        knex('posts').insert({
          id: 3,
          content: 'Suspendisse in justo eu magna luctus suscipit. Sed lectus.',
          author_id: 2
        })
      ]);
    });
};
