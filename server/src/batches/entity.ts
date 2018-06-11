import { Entity, Column, PrimaryColumn } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'

@Entity()
export default class Batch extends BaseEntity {

  @PrimaryColumn()
  id?: number

  @Column('date', {nullable:true})
  startDate: Date

  @Column('date', {nullable:true})
  endDate: Date
}