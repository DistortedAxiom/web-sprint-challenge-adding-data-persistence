
exports.up = function(knex) {
    return knex.schema
        .createTable("projects", tbl => {
            tbl.increments('id')
            tbl.string('project_name', 300)
                .unique()
                .notNullable()
            tbl.string('description');
            tbl.boolean('finished')
                .defaultTo(false)
        })

        .createTable("resources", tbl => {
            tbl.increments('id')
            tbl.string('resource_name', 128)
                .unique()
                .notNullable()
            tbl.string('description')
        })

        .createTable("project_resources", tbl => {
            tbl.increments('id')
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
            tbl.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('resources')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
        })

        .createTable('tasks', tbl => {
            tbl.increments('id')
            tbl.string('description')
                .notNullable();
            tbl.string('notes')
            tbl.boolean('completed')
                .defaultTo(false)
            tbl.integer('project_id')
                .notNullable()
                .references('id')
                .inTable('projects')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })

};

exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists("tasks")
      .dropTableIfExists("project_resources")
      .dropTableIfExists("resources")
      .dropTableIfExists("projects");
};
