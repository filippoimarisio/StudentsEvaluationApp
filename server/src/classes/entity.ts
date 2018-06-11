import { Entity, Column, PrimaryColumn } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'

@Entity()
export default class Class extends BaseEntity {

  @PrimaryColumn()
  id?: number

  @Column('text', {nullable:true})
  startDate: string

  @Column('text', {nullable:true})
  endDate: string
}