import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import Batch from '../batches/entity'

@Entity()
export default class Student extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @Column('text')
    firstName: string

    @Column('text')
    lastName: string

    @Column('text')
    photo: string

    @ManyToOne(_=> Batch, batch => batch.id)
    batch: Batch

}

