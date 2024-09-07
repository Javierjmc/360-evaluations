import { Router } from 'express'
import User from '../database/models/User.js'



const routerAuth = Router()


routerAuth.post('/register', async (req,res)=>{
    const {
        username,
        password,
        role
    } = req.body
    try{
        const user = await User.create({
            username,
            password,
            role
        })

        res.send({
            message:"Created!",
            data:user
        })
    } catch( e ) {
        res.send({
            message: e.message,
            data:null
        })
    }
})

routerAuth.post('/login', (req,res)=>{
    res.send('login')
})

routerAuth.get('/list-users', async (req, res) => {
    try{
        const users = await User.find({})
        res.send({
            message: `Find ${users.length} users`,
            data: users
        })
    } catch( e ) {
        res.send({
            message: e.message,
            data:null
        })
    }
    
})


export default routerAuth