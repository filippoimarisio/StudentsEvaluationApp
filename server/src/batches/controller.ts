import {Get, JsonController, Param, Post, HttpCode, Body} from 'routing-controllers'
import Batch from './entity'


@JsonController()
export default class BatchController {

    @Get('/batches')
    async allBatches() {
        const batches = await Batch.find()
        return { batches }
    }  

    @Get('/batches/:id')
    getBatch(
        @Param('id') id: number
    ) {
        return Batch.findOne(id)
    }

    @Post('/batches')
    @HttpCode(201)
    createBatch(
        @Body() batch : Batch
    ) {
        return batch.save()
    }
}