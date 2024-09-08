import { createContext, useEffect, useState, useContext } from "react";

const Context = createContext({
    currentUser: null,
    users: [],
    user: null
})

export function useData() {
    return useContext(Context)
}

export function DataProvider({ children }) {
    const [users, setUsers] = useState([])
    const [currentUser, setCurrentUser] = useState({
        name: 'Yo',
        email: 'yo@mail.com',
        role: 'Developer'
    })

    const getCurrentUser = () => {
        const token = sessionStorage.getItem("token")
        if( token ) {
            fetch(`${import.meta.env.VITE_API_URL}/`)
        }
    }

    useEffect(()=>{
        (async()=>{
            const token = sessionStorage.getItem('token')
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/list-users`,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            const { error, message, data } = await response.json()
            console.log( data )
            if( data ) {
                setUsers(data)
            }
        })()
    },[])

    console.log(users)

    const getUser = async (id) => {
        const token = sessionStorage.getItem('token')
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/list-users`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        const { error, message, data } = await response.json()
        
        return data.find( user => user._id==id)
        
    }


    return <Context.Provider value={{ users, getUser, currentUser  }}>{children}</Context.Provider>
}