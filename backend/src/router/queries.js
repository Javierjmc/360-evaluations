import { Router } from 'express'
import { connect } from '../database/run.js'
import Employee from '../database/models/Employee.js'
import Assessment from '../database/models/Assessment.js'

const routerQuery = Router()

routerQuery.get('/employees', (req,res)=>{
    res.send('lista de empleados Employee.find({})')
})

routerQuery.post('/evaluations', async (req,res)=>{
    const {
        username,
        comunication,
        teamwork,
        problemSolving,
        leadership,
        adaptability,
        comments
    } = req.body
    try{
        const assessment = await Assessment.create({
            username,
            comunication,
            teamwork,
            problemSolving,
            leadership,
            adaptability,
            comments
        })

        res.send({
            message:"Created!",
            data:assessment
        })
    } catch( e ) {
        res.send({
            message: e.message,
            data:null
        })
    }
})

routerQuery.get('/evaluations/:id', (req,res)=>{
    res.send(`evaluacion con id get ${req.params.id}`)
})

routerQuery.put('/evaluations/:id', (req,res)=>{
    res.send(`Actualizar una evaluación con id put ${req.params.id}`)
})

export default routerQuery