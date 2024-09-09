import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function LayoutAccess() {
    const navigate = useNavigate()
    useEffect(()=>{
        const token = sessionStorage.getItem('token')
        if( !token ) navigate("/")
    },[])
        
    return <Outlet />  
}