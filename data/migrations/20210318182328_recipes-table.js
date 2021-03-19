
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments('recipe_id')
        tbl.string('recipe_name').notNullabbel()
    })

    .createTable('steps', tbl => {
        tbl.increments('step_id')
        tbl.string('step_text').notNullabbel()
    })

    .createTable('ingredients', tbl => {
        tbl.increments('ingredient_id')
        tbl.string('ingredient_name').notNullabbel()
    })

    .createTable('step_ingredients', tbl => {
        tbl.increments('step_ingredients_id')
        tbl.integer('recipe_id').references('recipe_id').notNullabbel()
        tbl.integer('recipe_id').references('recipe_id').notNullabbel()
        tbl.integer('')
        tbl.integer('recipe_id').references('recipe_id').notNullabbel()
    })
};

exports.down = function(knex) {
  
};
