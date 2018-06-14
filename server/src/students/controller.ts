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
        //2. Create an array with 45 'red', 35 'yellows' and 20 'greens'
        //3. Generate a random number between 0 and 99
        //4. Pick the nth position in the colors array.
        //5. Filter the students arry by lastEvaluation color.
        //6. If the array is empty, start from point 3 again.
        //7. If there is, pull out all the stuents with lastEv == chosen color in an array.
        //8. Generate a random number between 0 and the array lenght
        //9. Pick the nth position of the array.
        //10. Return that student.


        //1.

        const studentsByBatch =  await Student.find({ where : {batch} })

        //2.

        const weightedArray = ['red','red','red','red','red','red','red','red','red','red',
        'red','red','red','red','red','red','red','red','red','red','red','red','red','red',
        'red','red','red','red','red','red','red','red','red','red','red','red','red','red',
        'red','red','red','red','red','red','red','yellow','yellow','yellow','yellow','yellow',
        'yellow','yellow','yellow','yellow','yellow','yellow','yellow','yellow','yellow','yellow',
        'yellow','yellow','yellow','yellow','yellow','yellow','yellow','yellow','yellow','yellow',
        'yellow','yellow','yellow','yellow','yellow','yellow','yellow','yellow','yellow','yellow',
        'green','green','green','green','green','green','green','green','green','green','green',
        'green','green','green','green','green','green','green','green','green',]
        console.log(weightedArray.length)

        //3

        const randomNumber = Math.floor(Math.random() * 100)
        console.log(randomNumber)

        //4

        const chosenColor = weightedArray[randomNumber]
        console.log(chosenColor)

        //5
        const filteredStudents = studentsByBatch.filter(student => {
             return student.lastEvaluation == chosenColor
        })
        console.log(filteredStudents)

        //6

        if (filteredStudents.length == 0) {
            console.log("no students with yellow") 
            return this.randomStudent(batch)
        }
        


        return {studentsByBatch, batch}
    }
}