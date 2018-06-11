import 'reflect-metadata'
import {createKoaServer} from "routing-controllers"
import ClassController from "./classes/controller"
import setupDb from './db'

const app = createKoaServer({
   controllers: [
     ClassController
   ]
})

setupDb()
  .then(_ =>
    app.listen(4000, () => console.log('Listening on port 4000'))
  )
  .catch(err => console.error(err))