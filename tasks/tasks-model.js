const db = require('../data/db-config.js')

module.exports = {
    find,
    findById,
    add
}

function find() {
    return db('tasks')
            .select('tasks.id', 'tasks.project_id', 'projects.project_name', 'projects.description', 'tasks.description', 'tasks.notes', 'tasks.completed')
            .join('projects', 'tasks.project_id', 'projects.id' )
}

function findById(id) {
    return db('tasks')
    .where({id})
    .first()
}

function add(task) {
    return db('tasks')
        .insert(task, 'id')
        .then((ids) => {
            return findById(ids)
        })
}
