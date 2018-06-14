import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import Student from '../students/entity'
import User from '../users/entity'
import { IsIn } from 'class-validator';
import { colors } from '../logic';


@Entity()
export default class Evaluation extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @Column('text')
    @IsIn(colors)
    color: string

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    date: string;

    @Column('text', {nullable: true})
    remark: string

    @ManyToOne(_=>Student, student => student.id)
    student: Student

    @ManyToOne(_=>User, user => user.id)
    user: User
}


