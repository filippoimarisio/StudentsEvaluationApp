import 'reflect-metadata'
import {createKoaServer} from "routing-controllers"
import setupDb from './db'
import BatchController from "./batches/controller"
import StudentController from "./students/controller"
import EvaluationController from "./evaluations/controller"
import TeacherController from "./teachers/controller"


const app = createKoaServer({
   controllers: [
     BatchController,
     StudentController,
     EvaluationController,
     TeacherController
   ]
})

setupDb()
  .then(_ =>
    app.listen(4000, () => console.log('Listening on port 4000'))
  )
  .catch(err => console.error(err))