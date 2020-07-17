
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, description: 'Gather teammembers to a meeting room', notes: 'Get meeting started', project_id: 1},
        {id: 2, description: 'Discuss plan for a new idea', notes: 'Idea for new software', project_id: 1},
        {id: 3, description: 'Create a roadmap to achieve goals', notes: '6 months deadline', project_id: 1},
        {id: 4, description: 'Watch repair videos online', notes: 'Repairing lawnmower', project_id: 2},
        {id: 5, description: 'Attempt to repair using the parts', notes: 'None', project_id: 2},
        {id: 6, description: 'Prepare ingredients according to recipe', notes: 'Use fresh ingredients', project_id: 3},
        {id: 7, description: 'Follow instructions', notes: 'Cook according to recipe', project_id: 3}
      ]);
    });
};
