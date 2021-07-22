import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import { TodoList } from './components/index';

export const checkJudge = React.createContext();

const App = () =>{

  const [todos,setTodos] = useState([]);//Todoの追加
  const [checked, setCheck] = useState(false);//checkJudge

  const addTodos = (todo) =>{//todosに全てのTodoが格納されているよ！
    setTodos(prevTodo =>{
      return [...prevTodo,todo]
    })
  }

  const value ={
    checked,
    setCheck,
  }
  
  return (
    <>
      <h1>Todoリスト</h1>     
        <Button onClick={
          () => {
            addTodos({
              text:"Buttonを押したから増えたよ",
              complete:checked
            })}
          }>Click me
        </Button> 
      <checkJudge.Provider value={value}>
          <TodoList todos={todos}/> 
      </checkJudge.Provider>
    </>
  );
}

export default App 