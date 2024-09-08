import { config } from 'dotenv' 
config()
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { connect } from './database/run.js'

connect()

import routerAuth from './router/auth.js'
import routerQuery from './router/queries.js'

// app de express
const app = express()
// se crea router

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use( cors() )

const checkToken = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ error: 'No credentials sent!' });
    }
    next();
}

app.use( '/api/auth', routerAuth)
app.use( '/api', checkToken, routerQuery )

app.listen(process.env.PORT, ()=>{
    console.log(`init in port ${process.env.PORT}`)
})
