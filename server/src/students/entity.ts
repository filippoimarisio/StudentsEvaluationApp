import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import Batch from '../batches/entity'
import Evaluation from '../evaluations/entity'
import { IsIn, IsOptional } from 'class-validator';
import { colors } from '../logic';

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

    @IsOptional()
    @Column('text', {nullable:true})
    @IsIn(colors)
    lastEvaluation: string

    @ManyToOne(_=> Batch, batch => batch.id, { onDelete: 'CASCADE', cascade: true } )
    batch: Batch

    @OneToMany(_=> Evaluation, evaluation => evaluation.student, {eager:true} )
    evaluation: Evaluation[];
}

