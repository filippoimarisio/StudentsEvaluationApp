import {Get, JsonController, Param, Post, HttpCode, Body, Put, NotFoundError} from 'routing-controllers'
import Evaluation from './entity'


@JsonController()
export default class EvaluationController {

    @Get('/evaluations')
    async allEvaluations() {
        const evaluation = await Evaluation.find()
        return { evaluation }
    }  

    @Get('/evaluations/:id')
    getEvaluation(
        @Param('id') id: number
    ) {
        return Evaluation.findOne(id)
    }

    @Post('/evaluations')
    @HttpCode(201)
    createEvaluation(
        @Body() evaluation : Evaluation
    ) {
        return evaluation.save()
    }

    @Put('/evaluations/:id')
    async updateEvaluation(
    @Param('id') id: number,
        @Body() update: Partial<Evaluation>
    ) {
        const evaluation = await Evaluation.findOne(id)
        if (!evaluation) throw new NotFoundError('Cannot find page')

        return Evaluation.merge(evaluation, update).save()
    }
}