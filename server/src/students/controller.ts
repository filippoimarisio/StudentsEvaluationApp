import {Get, JsonController, Param, Post, HttpCode, Body, Put, NotFoundError} from 'routing-controllers'
import Student from './entity'


@JsonController()
export default class StudentController {

    @Get('/students')
    async allStudents() {
        const students = await Student.find()
        return { students }
    }  

    @Get('/students/:id')
    getStudent(
        @Param('id') id: number
    ) {
        return Student.findOne(id)
    }

    // @Get('/students/batch/:id')
    // async getStudentsByBatchId(
    //     @Param('batch') batch: number
    // ) {
    //     const studentsByBatch =  await Student.findOne(batch)
    //     return {studentsByBatch}
    // }

    @Post('/students')
    @HttpCode(201)
    createStudent(
        @Body() student : Student
    ) {
        return student.save()
    }

    @Put('/students/:id')
    async updateStudent(
    @Param('id') id: number,
        @Body() update: Partial<Student>
    ) {
        const student = await Student.findOne(id)
        if (!student) throw new NotFoundError('Cannot find page')

        return Student.merge(student, update).save()
    }
}