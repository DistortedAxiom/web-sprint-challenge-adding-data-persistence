
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, resource_name: 'Meeting room', description: 'A meeting room'},
        {id: 2, resource_name: 'Repair parts', description: 'Repair parts needed for repair'},
        {id: 3, resource_name: 'Food ingredients', description: 'Ingredients for cooking'}
      ]);
    });
};
