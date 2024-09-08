import { Router } from 'express'
import jwt from 'jsonwebtoken'
import User from '../database/models/User.js'



const routerAuth = Router()


routerAuth.post('/register', async (req,res)=>{
    const {
        username,
        email,
        password,
        role
    } = req.body
    try{
        console.log( req.body )
        const user = await User.create({
            username,
            name: username,
            email,
            password,
            role
        })

        if( !user ) throw new Error("Not Create")

        res.redirect(process.env.FRONT_URI)
    } catch( e ) {
        console.log( e.message )
        res.redirect(`${process.env.FRONT_URI}/singup`)
    }
})

routerAuth.post('/login', async (req,res)=>{
    const {
        username,
        password
    } = req.body

    try{
        const user = await User.findOne({
            username,
            password
        })

        if(!user) throw new Error("Not found");

        const token = jwt.sign({
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role
        }, 'clavemagica')

        res.json({
            error: false,
            message: "Success",
            data:{
                user: {
                    id: user._id,
                    username: user.username,
                    email: user.email,
                    role: user.role
                },
                token
            }
        })
    }catch(e){
        res.json({
            error: true,
            message: e.message,
            data:null
        })
    }
})





export default routerAuth