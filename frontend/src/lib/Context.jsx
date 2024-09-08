import { createContext, useEffect, useState, useContext } from "react";
import { users as dataUsers } from "../tools/constants";

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

    useEffect(()=>{
        setUsers( dataUsers )
    },[])

    console.log(users)

    const getUser = (id) => {
        console.log(users)
        return users.find( item => item._id === id )
    }


    return <Context.Provider value={{ users, getUser, currentUser  }}>{children}</Context.Provider>
}