import { useState } from "react"



export const Login = () => {
  const [username, setUsername]=useState('') 
  const [password, setPassword]=useState('')


  return (
    <form action="" className="bg-slate-800 p-10 rounded-md shadow-sm shadow-black max-w-80 mx-auto mt-20 flex flex-col">
        <h2 className="text-2xl mb-10">Login</h2>
        <label htmlFor="" className="text-red-500">Username</label>
        <input value={username} onChange={event => setUsername(event.target.value)} type="text" className="mb-10 px-2 py-2 rounded shadow-md bg-slate-700 text-slate-200 outline-none focus:bg-slate-900" />
        <label htmlFor="">Password</label>
        <input value={password} onChange={event => setPassword(event.target.value)} type="password" className="mb-10 px-2 py-2 rounded shadow-md bg-slate-700 text-slate-200 outline-none focus:bg-slate-900" />
        <button className="bg-blue-500 py-2 rounded shadow-md text-slate-200 hover:bg-blue-400 transition uppercase">login</button>
    </form>
  )
}

