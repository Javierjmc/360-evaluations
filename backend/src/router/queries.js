import { Router } from 'express'
import User from '../database/models/User.js'
import Assessment from '../database/models/Assessment.js'
import jwt from 'jsonwebtoken'

const routerQuery = Router()

routerQuery.get('/list-users', async (req, res) => {
    const [type, token] = req.headers.authorization.split(" ")
    try{
        const dataToken = jwt.verify( token, 'clavemagica')
        if( !dataToken ) throw new Error("Not Access")
        const users = await User.find({})
        res.json({
            error: false,
            message: `Find ${users.length} users`,
            data: users.filter( user => user._id.toString() !== dataToken.id)
        })
    } catch( e ) {
        res.json({
            error:true,
            message: e.message,
            data:[]
        })
    }    
})

routerQuery.get('/employees', (req,res)=>{
    res.send('lista de empleados Employee.find({})')
})

routerQuery.post('/evaluations', async (req,res)=>{
    const {
        usernameId,
        comunication,
        teamwork,
        problemSolving,
        leadership,
        adaptability,
        comments
    } = req.body
    try{
        const assessment = await Assessment.create({
            user: usernameId,
            comunication,
            teamwork,
            problemSolving,
            leadership,
            adaptability,
            comments
        })

        if(!assessment) throw new Error("Not create")
        res.send({
            error:false,
            message:"Created!",
            data:assessment
        })
    } catch( e ) {
        res.send({
            error:true,
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