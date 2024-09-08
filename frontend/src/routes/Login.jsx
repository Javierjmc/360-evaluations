import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"

export const Login = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    try{
      setLoading(true)
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username, 
          password
        })
      })
      const { error, data, message } = await response.json()
      if( error ) throw new Error(message)
      sessionStorage.setItem('token', data?.token)
      sessionStorage.setItem('current-user', JSON.stringify(data?.user) )
      navigate("/dashboard")
    }
    catch(e) {
      console.log(e)
    }
    finally{
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-slate-800 p-10 rounded-md shadow-sm shadow-black max-w-80 mx-auto mt-20 flex flex-col">
        <h2 className="text-2xl mb-10">Login</h2>
        <label htmlFor="" className="text-red-500">Username</label>
        <input value={username} onChange={ev => setUsername(ev.target.value)} type="text" className="mb-10 px-2 py-2 rounded shadow-md bg-slate-700 text-slate-200 outline-none focus:bg-slate-900" />
        <label htmlFor="">Password</label>
        <input value={password} onChange={ev => setPassword(ev.target.value)} type="password" className="mb-10 px-2 py-2 rounded shadow-md bg-slate-700 text-slate-200 outline-none focus:bg-slate-900" />
        <button className="bg-blue-500 py-2 rounded shadow-md text-slate-200 hover:bg-blue-400 transition uppercase" disabled={loading}>{ loading?'Enviando...':'Enviar'}</button>
        <NavLink to="/singup" className="bg-blue-500 py-2 text-center my-2 rounded shadow-md text-slate-200 hover:bg-blue-400 transition uppercase" >Registrar</NavLink>
    </form>
  )
}

