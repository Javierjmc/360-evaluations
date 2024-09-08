import { NavLink } from "react-router-dom"

const SingUp = () => {
    
  return (
    <form method="post" action={`${import.meta.env.VITE_API_URL}/api/auth/register`} className="bg-slate-800 p-10 rounded-md shadow-sm shadow-black max-w-80 mx-auto mt-20 flex flex-col">
        <h2 className="text-2xl mb-10">Sing Up</h2>
        <label >Username</label>
        <input name="username" type="text" className="mb-10 px-2 py-2 rounded shadow-md bg-slate-700 text-slate-200 outline-none focus:bg-slate-900" />
        <label >Email</label>
        <input name="email" type="email" className="mb-10 px-2 py-2 rounded shadow-md bg-slate-700 text-slate-200 outline-none focus:bg-slate-900" />
        <label >Password</label>        
        <input name="password" type="password" className="mb-10 px-2 py-2 rounded shadow-md bg-slate-700 text-slate-200 outline-none focus:bg-slate-900" />
        <button className="bg-blue-500 py-2 rounded shadow-md text-slate-200 hover:bg-blue-400 transition uppercase">create user</button>
        <input type="hidden" name="role" value="employee" />
        <NavLink to="/" className="bg-blue-500 py-2 text-center my-2 rounded shadow-md text-slate-200 hover:bg-blue-400 transition uppercase">Login</NavLink>
      </form>
  )
}

export default SingUp