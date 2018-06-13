import { JsonController, Post, Param, Get, Body, Authorized } from 'routing-controllers'
import Teacher from './entity';

@JsonController()
export default class TeacherController {

  @Post('/signup')
  async signup(
    @Body() data: Teacher
  ) {
    const {password, ...rest} = data
    const entity = Teacher.create(rest)
    await entity.setPassword(password)

    const teacher = await entity.save()

    return teacher
  }

  @Get('/teachers/:id([0-9]+)')
  getTeacher(
    @Param('id') id: number
  ) {
    return Teacher.findOne(id)
  }

  @Get('/teachers')
  allTeachers() {
    return Teacher.find()
  }
}
