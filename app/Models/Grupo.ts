import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Time from './Time'

export default class Grupo extends BaseModel {
  
  @hasMany(()=> Time, {
    foreignKey:'grupo_id'
  })

  public time:HasMany<typeof Time>

  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
