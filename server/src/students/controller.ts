import {Get, JsonController, Param, Post, HttpCode, Body, Put, NotFoundError, Delete} from 'routing-controllers'
import Student from './entity'
import Batch from '../batches/entity'


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

    @Get('/students/batch/:batch')
    async getStudentsByBatch(
        @Param('batch') batch: number 
    ) {
        const studentsByBatch =  await Student.find({ where : {batch} })
        return {studentsByBatch, batch}
    }


    @Post('/students')
    @HttpCode(201)
    async createStudent(
        @Body() student : Student
    ) {
        const batch = (await Batch.findOne(student.batch))!
        student.batch = batch

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

    @Delete('/students/:id')
    async deleteStudent(
        @Param('id') id: number
    ) {
      const student = await Student.findOne(id)
  
      if (!student) throw new NotFoundError('This student is not registered!')
      if (student) student.remove()
      
      return 'Student Deleted.'
    }
}