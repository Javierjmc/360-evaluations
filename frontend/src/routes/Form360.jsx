import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../components/Card"
import { Label } from "../components/Label"
import { Input } from "../components/Input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../components/Select"
import { Textarea } from "../components/Textarea"
import { Button } from "../components/Button"
import { useParams } from "react-router-dom"
import { useData } from "../lib/Context"
import { useState, createContext, useEffect } from 'react'
const AverageContext = createContext();

export function Form360() {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(false)
  const [comunication, setComunication] = useState(0)
  const [teamwork, setTeamwork] = useState(0)
  const [problemSolving, setProblemSolving] = useState(0)
  const [leadership, setLeadership] = useState(0)
  const [adaptability, setAdaptability] = useState(0)
  const [comments, setComments] = useState("")
  const currentUser = JSON.parse( sessionStorage.getItem('current-user') )
  const { getUser } = useData()
  const { id } = useParams()

  useEffect(()=>{
    (async()=>{
      setUser( await getUser(id) )
    })()
    
  },[id])
  

  const handlerSubmit = async (ev) => {
    ev.preventDefault()
    const isError = comunication===0 || teamwork===0 || problemSolving===0 || leadership===0 || adaptability===0
    setError(isError)
    if( isError ) return
    try{
      const token = sessionStorage.getItem('token')
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/evaluations`,{
        method:'post',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body:JSON.stringify({
          usernameId:currentUser.id,
          comunication,
          teamwork,
          problemSolving,
          leadership,
          adaptability,
          comments
        })
      })
      const result = await response.json()
      console.log( result )

    } catch( e ) {

    }

  }
  

  return (
    (<Card className="w-full max-w-4xl mx-auto p-6 sm:p-8 md:p-10">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">360 Degree Evaluation</CardTitle>
        <CardDescription>
          Please provide your feedback on the employee's performance across the following competencies.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form" className="grid gap-6" onSubmit={handlerSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" value={currentUser?.username} disabled/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" value={currentUser?.email} disabled/>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="role">Role</Label>
            <Input id="role" placeholder="Enter your role" value={currentUser?.role} disabled />
          </div>
          <hr />
          <span className="text-2xl font-semibold">Evaluation to {user?.username}</span>
          <div className="grid gap-4">
            <div className="space-y-2">
              <Label>Competencies</Label>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 items-center gap-4">
                  <span className={error && !comunication && "text-red-500" }>Communication</span>
                  <Select value={comunication} onValueChange={setComunication}>
                    <SelectTrigger>
                    { comunication ? comunication : <SelectValue placeholder="Select rating" />}
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={0}>Select rating</SelectItem>
                      <SelectItem value={1}>1</SelectItem>
                      <SelectItem value={2}>2</SelectItem>
                      <SelectItem value={3}>3</SelectItem>
                      <SelectItem value={4}>4</SelectItem>
                      <SelectItem value={5}>5</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 items-center gap-4">
                  <span className={error && !teamwork && "text-red-500" }>Teamwork</span>
                  <Select value={teamwork} onValueChange={setTeamwork}>
                    <SelectTrigger>
                      { teamwork ? teamwork : <SelectValue placeholder="Select rating" />}
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={0}>Select rating</SelectItem>
                      <SelectItem value={1}>1</SelectItem>
                      <SelectItem value={2}>2</SelectItem>
                      <SelectItem value={3}>3</SelectItem>
                      <SelectItem value={4}>4</SelectItem>
                      <SelectItem value={5}>5</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 items-center gap-4">
                  <span className={error && !problemSolving && "text-red-500" }>Problem Solving</span>
                  <Select value={problemSolving} onValueChange={setProblemSolving}>
                    <SelectTrigger>
                      { problemSolving ? problemSolving : <SelectValue placeholder="Select rating" />}
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={0}>Select rating</SelectItem>
                      <SelectItem value={1}>1</SelectItem>
                      <SelectItem value={2}>2</SelectItem>
                      <SelectItem value={3}>3</SelectItem>
                      <SelectItem value={4}>4</SelectItem>
                      <SelectItem value={5}>5</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 items-center gap-4">
                  <span className={error && !leadership && "text-red-500" }>Leadership</span>
                  <Select value={leadership} onValueChange={setLeadership}>
                    <SelectTrigger>
                      { leadership ? leadership : <SelectValue placeholder="Select rating" />}
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={0}>Select rating</SelectItem>
                      <SelectItem value={1}>1</SelectItem>
                      <SelectItem value={2}>2</SelectItem>
                      <SelectItem value={3}>3</SelectItem>
                      <SelectItem value={4}>4</SelectItem>
                      <SelectItem value={5}>5</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 items-center gap-4">
                  <span className={error && !adaptability && "text-red-500" }>Adaptability</span>
                  <Select value={adaptability} onValueChange={setAdaptability}>
                    <SelectTrigger>
                      { adaptability ? adaptability : <SelectValue placeholder="Select rating" />}
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={0}>Select rating</SelectItem>
                      <SelectItem value={1}>1</SelectItem>
                      <SelectItem value={2}>2</SelectItem>
                      <SelectItem value={3}>3</SelectItem>
                      <SelectItem value={4}>4</SelectItem>
                      <SelectItem value={5}>5</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="comments">Comments</Label>
              <Textarea value={comments} onChange={ev => setComments(ev.target.value)} rows={5} placeholder="Enter your comments" />
            </div>
          </div>          
        </form>
      </CardContent>
      <CardFooter>
        <div className="flex justify-end">
          <Button form='form' type="submit">Submit Evaluation</Button>
        </div>
      </CardFooter>
    </Card>)
  );
}