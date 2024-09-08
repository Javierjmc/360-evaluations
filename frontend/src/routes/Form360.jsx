import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../components/Card"
import { Label } from "../components/Label"
import { Input } from "../components/Input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../components/Select"
import { Textarea } from "../components/Textarea"
import { Button } from "../components/Button"
import { useParams } from "react-router-dom"
import { useData } from "../lib/Context"

export function Form360() {
  const { getUser, currentUser } = useData()
  const { id } = useParams()

  const user = getUser(id)

  return (
    (<Card className="w-full max-w-4xl mx-auto p-6 sm:p-8 md:p-10">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">360 Degree Evaluation</CardTitle>
        <CardDescription>
          Please provide your feedback on the employee's performance across the following competencies.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form" method="post" action={`${import.meta.env.VITE_API_URL}/api/evaluations`} className="grid gap-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" value={currentUser.name} disabled/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" value={currentUser.email} disabled/>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="role">Role</Label>
            <Input id="role" placeholder="Enter your role" value={currentUser.role} disabled />
          </div>
          <hr />
          <span className="text-2xl font-semibold">Evaluation to {user?.name}</span>
          <div className="grid gap-4">
            <div className="space-y-2">
              <Label>Competencies</Label>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 items-center gap-4">
                  <span>Communication</span>
                  <Select name="comunication">
                    <SelectTrigger>
                      <SelectValue placeholder="Select rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 items-center gap-4">
                  <span>Teamwork</span>
                  <Select name="teamwork">
                    <SelectTrigger>
                      <SelectValue placeholder="Select rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 items-center gap-4">
                  <span>Problem Solving</span>
                  <Select name="problemSolving">
                    <SelectTrigger>
                      <SelectValue placeholder="Select rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 items-center gap-4">
                  <span>Leadership</span>
                  <Select name="leadership">
                    <SelectTrigger>
                      <SelectValue placeholder="Select rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 items-center gap-4">
                  <span>Adaptability</span>
                  <Select name="adaptability">
                    <SelectTrigger>
                      <SelectValue placeholder="Select rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="comments">Comments</Label>
              <Textarea name="comments" id="comments" rows={5} placeholder="Enter your comments" />
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