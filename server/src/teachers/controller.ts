import { JsonController, Post, Param, Get, Body, Authorized } from 'routing-controllers'
import Teacher from './entity';
// import { io } from '../index'

@JsonController()
export default class TeacherController {

  @Post('/teachers')
  async signup(
    @Body() data: Teacher
  ) {
    const {password, ...rest} = data
    const entity = Teacher.create(rest)
    await entity.setPassword(password)

    const teacher = await entity.save()

    // io.emit('action', {
    //   type: 'ADD_TEACHER',
    //   payload: entity
    // })

    return teacher
  }

  @Authorized()
  @Get('/teachers/:id([0-9]+)')
  getTeacher(
    @Param('id') id: number
  ) {
    return Teacher.findOne(id)
  }

  @Authorized()
  @Get('/teachers')
  allTeachers() {
    return Teacher.find()
  }
}
