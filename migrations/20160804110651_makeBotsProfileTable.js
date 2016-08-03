
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('profiles', function (table) {
   table.increments('id').primary()
   table.string('botName')
   table.string('photoURL')
   table.string('bio')
   table.integer('post_id').references('posts.id')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('profiles')
};
