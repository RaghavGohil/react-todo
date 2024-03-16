import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

import {useState} from 'react'

function App(props:{tasks:string[]}) {

    const [task, setTask] = useState(props.tasks)
    const [input, setInput] = useState('')

    const handleAddTask = ()=>{
        setTask([...task,input])
    }

    const handleInputFieldChange = (event:any)=>{
        setInput(event.target.value)
    }

    const handleDeleteTask = (index)=> { // delete at index
        console.log(index)
        setTask(task.filter((_,i)=>i!==index))
    }

  return (
    <>
        <h1>TODO LIST</h1>
        <InputGroup className="mb-3">
            <Form.Control
                placeholder="Enter your task details..."
                aria-label="Enter your task details..."
                aria-describedby="basic-addon2"
                onChange={handleInputFieldChange}
            />
            <Button onClick={()=>{handleAddTask()}} variant="outline-secondary" id="button-addon2">
            Add Task 
            </Button>
        </InputGroup>
        {
                task.map((t:string,i:number)=>
                        <InputGroup key={i} className="mb-3">
                        <Form.Control
                        value={t}
                        disabled
                        />
                        <Button onClick={()=>{handleDeleteTask(i)}} variant="outline-danger" id="button-addon2">
                        Delete 
                        </Button>
                        </InputGroup>
                )
        }
    </>
  )
}

App.defaultProps = {
    tasks:[]
}

export default App
