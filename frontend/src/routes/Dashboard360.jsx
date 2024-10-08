import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "../components/ui/dropdown-menu"
import { Button } from "../components/Button"
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "../components/Tooltip"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "../components/Card"
import { BarChart, XAxis, YAxis, Bar, PieChart, Pie } from "recharts"
import { ChartTooltip, ChartTooltipContent } from "../components/Chart"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../components/Table"
import { Badge } from "../components/ui/badge"
import { NavLink, useNavigate } from "react-router-dom"
import { useData } from "../lib/Context"
import { useEffect, useState } from "react"



export function Dashboard360() {
  const navigate = useNavigate()
  const [ user, setUser] = useState(null)
  const { users } = useData() 

  useEffect(()=>{
    setUser( JSON.parse(sessionStorage.getItem("current-user")) )

  },[])

  const handlerLogout = () => {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('current-user')
    navigate("/")
  }

  

  return (
    (<div className="flex min-h-screen w-full flex-col bg-muted/40">
      <header
        className="flex h-14 items-center justify-between border-b border-slate-100 bg-background px-4 sm:px-6">
        <a
          href="#"
          className="flex items-center gap-2 text-lg font-semibold"
          prefetch={false}>
          <ClipboardListIcon className="h-6 w-6" />
          <span>360</span>
        </a>
        <div className="flex items-center gap-1">
          <span className="font-semibold text-xl">username</span>
          <span className="opacity-50 text-gray-400">( {user?.username} )</span>
        </div>
        <button onClick={handlerLogout}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
          </svg>
        </button>
      </header>
      <div className="flex flex-1">
        <div className="flex flex-1 flex-col">
          <main className="flex-1 p-4 sm:p-6">
            <div className="grid gap-6">              
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle>Evaluation Results</CardTitle>
                    <CardDescription>Overview of the latest evaluation results.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      <BarChart
                        accessibilityLayer
                        data={[
                          { category: "Leadership", score: 85 },
                          { category: "Communication", score: 78 },
                          { category: "Teamwork", score: 92 },
                          { category: "Problem Solving", score: 81 },
                          { category: "Adaptability", score: 88 },
                        ]}
                        layout="vertical"
                        margin={{ left: -20 }}>
                        <XAxis type="number" dataKey="score" hide />
                        <YAxis
                          dataKey="category"
                          type="category"
                          tickLine={false}
                          tickMargin={10}
                          axisLine={false} />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                        <Bar dataKey="score" fill="var(--color-desktop)" radius={5} />
                      </BarChart>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle>Evaluation Breakdown</CardTitle>
                    <CardDescription>Percentage of evaluations by status.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart>
                      <Pie
                        data={[
                          { name: "Completed", value: 189 },
                          { name: "Pending", value: 56 },
                          { name: "Overdue", value: 12 },
                        ]}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="var(--color-desktop)"
                        label />
                      <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                    </PieChart>
                  </CardContent>
                </Card>
              </div>
              <Card>
                <CardHeader className="px-7">
                  <CardTitle>Recent Evaluations</CardTitle>
                  <CardDescription>View the most recent evaluations.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Employee</TableHead>
                        <TableHead className="hidden sm:table-cell">Score</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>
                          <span className="sr-only">Actions</span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>                     
                      {users.map( user => <TableRow key={user._id}>
                        <TableCell>
                          <div className="font-medium">{user.username}</div>
                          <div className="hidden text-sm text-muted-foreground sm:inline">{user.email}</div>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">{user.rate}</TableCell>
                        <TableCell>
                          <Badge variant="secondary">Completed</Badge>
                        </TableCell>
                        <TableCell>
                          <NavLink to={`/feedback/${user._id}`} >Evaluar</NavLink>
                        </TableCell>
                      </TableRow>)}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </div>)
  );
}

function BarChartIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>)
  );
}


function CheckIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>)
  );
}


function CircleAlertIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" x2="12" y1="8" y2="12" />
      <line x1="12" x2="12.01" y1="16" y2="16" />
    </svg>)
  );
}


function ClipboardListIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path
        d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M12 11h4" />
      <path d="M12 16h4" />
      <path d="M8 11h.01" />
      <path d="M8 16h.01" />
    </svg>)
  );
}


function ClockIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>)
  );
}


function HomeIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>)
  );
}


function MoveVerticalIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polyline points="8 18 12 22 16 18" />
      <polyline points="8 6 12 2 16 6" />
      <line x1="12" x2="12" y1="2" y2="22" />
    </svg>)
  );
}


function SettingsIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>)
  );
}