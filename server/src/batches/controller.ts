import {Get, JsonController, Param, Post, HttpCode, Body, Delete, NotFoundError} from 'routing-controllers'
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
    async createBatch(
        @Body() batch : Batch
    ) {
        await batch.save()
        const batches = await Batch.find()
        return {batches}
    }

    @Delete('/batches/:id')
    async deleteBatch(
        @Param('id') id: number
    ) {
        const batch = await Batch.findOne(id)
  
        if (!batch) throw new NotFoundError('This batch doesnt exist!')
        if (batch) await batch.remove()
      
        const batches = await Batch.find()
        return {batches}
    }
}