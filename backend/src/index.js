import * as dotenv from 'dotenv' 
dotenv.config()
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

// app de express
const app = express();
// se crea router
const router = express.Router();

router.get('/ruta', (req, res) => {

    return res.json({message: 'Hello World'})
})
router.get('/ruta/:id', (req, res) => {

    return res.json({message: 'Hello World'})
})
router.post('/ruta', (req, res) => {
    const body = req.body
    return res.json({message: 'Hello World'})
})
router.put('/ruta/:id', (req, res) => {
    const id = req.params.id
    const body = req.body
    return res.json({message: 'Hello World'})
})
router.delete('/ruta/:id', (req, res) => {
    const id = req.params.id
    return res.json({message: 'Hello World'})
})


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use( cors() )
app.use( router )

app.listen(process.env.PORT, ()=>{
    console.log(`init in port ${process.env.PORT}`)
})