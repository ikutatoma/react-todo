import React, {useState,useContext} from 'react'
import {UserTask} from '../App'
import {
    Button,
    TextField,
    Box,
} from '@material-ui/core'

const Form = () =>{
    const { tasks, setTasks } = useContext(UserTask);

    const [task_title, setTask_title] = useState('')

    const handleTextFieldChanges = e => {
        setTask_title(e.target.value)
    }

    const isTaskInclude = () => {
        return tasks.some(task => task.title === task_title)
    }

    const resetTextField = () => {
        setTask_title('')
    }

    const addTask = () => {
        setTasks([...tasks, {
            title: task_title,
            doing: false,
        }])
        resetTextField()
    }

    return(
        <Box
            mt={5}
            display='flex'
            justifyContent='space-around'
        >
            <TextField
                label='タイトル'
                value={task_title}
                onChange={handleTextFieldChanges}
            />
            <Button
                disabled={task_title === '' || isTaskInclude()}
                variant='contained'
                color='primary'
                onClick={addTask}
            >作成
            </Button>
        </Box>
   )
}

export default Form
