import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import Student from '../students/entity'

@Entity()
export default class Batch extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('integer', {nullable:true})
  batchNumber: number

  @Column('date', {nullable:true})
  startDate: Date

  @Column('date', {nullable:true})
  endDate: Date

  @OneToMany(_=> Student, student => student.batch)
  students: Student[];
}


