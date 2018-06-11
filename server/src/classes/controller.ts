import {Get, JsonController, Param} from 'routing-controllers'
import Class from './entity'


@JsonController()
export default class ClassController {

    @Get('/classes')
    async allClasses() {
        const classes = await Class.find()
        return { classes }
    }  

    @Get('/classes/:id')
    getPage(
        @Param('id') id: number
    ) {
        return Class.findOne(id)
    }
}