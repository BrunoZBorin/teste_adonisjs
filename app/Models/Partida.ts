import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Time from './Time'

export default class Partida extends BaseModel {
  @column({columnName:'team_a'})
  public team_a: number

  @belongsTo(() => Time,{
    foreignKey:'team_a'
  })
  public times:BelongsTo<typeof Time>
  @column({columnName:'team_b'})
  public team_b: number

  @belongsTo(() => Time,{
    foreignKey:'team_b'
  })
  public time:BelongsTo<typeof Time>

  @column({ isPrimary: true })
  public id: number

  @column()
  public goals_team_a: number

  @column()
  public goals_team_b: number

  @column()
  public cards_team_a: number

  @column()
  public cards_team_b: number

  @column()
  public tipo: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
