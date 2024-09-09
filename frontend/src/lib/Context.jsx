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
    const [token, setToken] = useState("")
    const [users, setUsers] = useState([])
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(()=>{
        const _token = sessionStorage.getItem("token")
        if( _token ) setToken(_token)
    },[])

    useEffect(()=>{
        (async()=>{
            
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/list-users`,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            const { error, message, data } = await response.json()
            if( data ) {
                setUsers(data)
            }
        })()
    },[token])

    const getUser = async (id) => {
        const token = sessionStorage.getItem('token')
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/list-users`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        const { error, message, data } = await response.json()

        console.log( data )
        
        return data.find( user => user._id==id)
        
    }


    return <Context.Provider value={{ users, getUser, currentUser, setCurrentUser  }}>{children}</Context.Provider>
}