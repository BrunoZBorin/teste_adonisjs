import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'partidas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('team_a').unsigned().references('id').inTable('times').onDelete('CASCADE')
      table.integer('team_b').unsigned().references('id').inTable('times').onDelete('CASCADE')
      table.integer('goals_team_a')
      table.integer('goals_team_b')
      table.integer('cards_team_a')
      table.integer('cards_team_b')
      table.string('tipo')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
