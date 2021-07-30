import {useContext} from 'react'
import {UserTask} from '../App'
import {
    Button,
    Container,
    List,
    ListItem,
    ListItemText,
    Checkbox,
} from '@material-ui/core'

const TodoItem = () => {

    const { tasks, setTasks } = useContext(UserTask);

    const handleCheckboxChanges = task => {
        setTasks(tasks.filter(x => {
            if (x === task) x.doing = !x.doing
            return x
        }))
    }

    const deleteTask = (task) => {
        setTasks(tasks.filter(x => x !== task))
    }

    return(
        <Container component='main' maxWidth='xs'>
                <List
                    style={{marginTop: '48px'}}
                    component='ul'>
                    {tasks.map(task => (
                        <ListItem key={task.title} component='li'>
                            <Checkbox
                                checked={task.doing}
                                value='primary'
                                onChange={() => handleCheckboxChanges(task)}
                            />
                            <ListItemText primary={task.title}></ListItemText>
                            <Button
                                onClick={() => deleteTask(task)}
                            >
                                削除
                            </Button>
                        </ListItem>
                    ))}
                </List>
         </Container>
    )
}

export default TodoItem