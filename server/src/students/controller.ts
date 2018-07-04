import {Get, JsonController, Param, Post, HttpCode, Body, Put, NotFoundError, Delete, BadRequestError} from 'routing-controllers'
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

        await student.save()
        await Batch.findOne(student.batch)
        const studentsByBatch = await Student.find({ where : {batch} })
        return {studentsByBatch}
    }

    @Put('/students/:id')
    async updateStudent(
    @Param('id') id: number,
        @Body() update: Partial<Student>
    ) {
        console.log('in the put endpoint')

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

    // ALGORITHM

    @Get('/students/batch/randomstudent/:batch')
    async randomStudent(
        @Param('batch') batch: number 
    ) {


        //1. Get students from the the batch in an array.
        //2. Generate a random number between 1 and 100
        //3. Assign the number to a different color based on its range
        //4. Filter the students arry by lastEvaluation color.
        //5. If the array is empty, start from point 3 again.
        //6. Generate a random number between 0 and the array lenght
        //7. Pick the nth position of the array.
        //8. Return that student.


        //1.

        const studentsByBatch =  await Student.find({ where : {batch} })
        if (studentsByBatch.length == 0) throw new BadRequestError(`There are no students in this class`) 

        //2.

        const randomNumber = Math.floor((Math.random() * 100) + 1)
        console.log(randomNumber)

        //3

        let chosenColor = ''
        if (randomNumber <= 45) chosenColor = 'red'
        else if (randomNumber <= 80) chosenColor = 'yellow'
        else chosenColor = 'green'
        console.log(chosenColor)

        //4

        const filteredStudents = studentsByBatch.filter(student => {
             return student.lastEvaluation == chosenColor
        })
        console.log(filteredStudents)

        //5

        if (filteredStudents.length == 0) {
            console.log("no students with yellow") 
            return this.randomStudent(batch)
        }
        
        //6

        const randomNum = Math.floor(Math.random() * filteredStudents.length)
        console.log(filteredStudents.length)
        console.log(randomNum)

        //7

        const chosenStudent = filteredStudents[randomNum]
        console.log(chosenStudent)

        //8

        return {chosenStudent}
    }
}