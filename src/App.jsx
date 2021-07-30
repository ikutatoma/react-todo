import React, {useState} from 'react'
import Form from './components/Form'
import TodoItem from './components/TodoItem'

const INITIAL_TASK = {
    title: 'Reactのお勉強',
    doing: false,
}
export const UserTask = React.createContext()

const App = () => {
    const [tasks, setTasks] = useState([INITIAL_TASK])
    
    const value ={
      tasks,
      setTasks
    }

    return (
        <React.Fragment>
          <UserTask.Provider value={value}>
            <Form  />
            <TodoItem/>          
          </UserTask.Provider>
        </React.Fragment>
    )
}

export default App