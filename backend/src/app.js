require('dotenv').config()
import express from 'express'
import taskRouter from './router/tasks'
import { connection } from './database'
import morgan from 'morgan'
import cors from 'cors'

import SwagerUi from 'swagger-ui-express'
import  SwagerJSDoc from 'swagger-jsdoc'
import { options } from './swagger'

/* initialization */
const app = express();


const spect = SwagerJSDoc(options)

/* database connection */
connection();

app.use(express.json())
app.use(morgan('dev'))
app.use(cors({origin:'*'}))

/* router */
app.use('/api',taskRouter)
app.use('/api/docs',SwagerUi.serve, SwagerUi.setup(spect))

export default {
  app
}




