
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('posts', function (table) {
   table.increments('id').primary()
   table.string('content')
   table.timestamps()
   table.integer('author_id').references('profiles.id')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts')
};
