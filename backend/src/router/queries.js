import { Router } from 'express'
import { connect } from '../database/run.js'

const routerQuery = Router()


routerQuery.get('/employees', (req,res)=>{
    res.send('lista de empleados Employee.find({})')
})

routerQuery.post('/evaluations', (req,res)=>{
    res.send('nueva')
})

routerQuery.get('/evaluations/:id', (req,res)=>{
    res.send(`evaluacion con id get ${req.params.id}`)
})

routerQuery.put('/evaluations/:id', (req,res)=>{
    res.send(`Actualizar una evaluación con id put ${req.params.id}`)
})

export default routerQuery