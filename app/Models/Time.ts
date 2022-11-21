import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Grupo from './Grupo'

export default class Time extends BaseModel {
  
  @column({columnName:'grupo_id'})
  public grupo_id: number

  @belongsTo(() => Grupo,{
    foreignKey:'grupo_id'
  })
  public grupos:BelongsTo<typeof Grupo>

  @column({ isPrimary: true })
  public id: number

  @column()
  public country: string

  @column()
  public continent: string

  @column()
  public points: number

  @column()
  public goals: number

  @column()
  public cards: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
