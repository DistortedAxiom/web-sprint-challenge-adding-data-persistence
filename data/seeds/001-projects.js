
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, project_name: 'Create new plan', description: 'Default plan description'},
        {id: 2, project_name: 'Fix lawnmower', description: 'Fixing a broken lawnmower'},
        {id: 3, project_name: 'Cook food', description: 'Make some food to eat'}
      ]);
    });
};
