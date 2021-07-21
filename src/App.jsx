import React,{useState,useEffect} from 'react'
import Button from '@material-ui/core/Button';
import { TodoList } from './components/index';

const App = () =>{

  const [todos,setTodos] = useState([]);//Todoの追加
  const [checked, setCheck] = useState(false);//complete checkBox

  const addTodos = (todo) =>{//todosに全てのTodoが格納されているよ！
    setTodos(prevTodo =>{
      return [...prevTodo,todo]
    })
  }

  const doneCheck = () =>{
    setCheck(true);
  }



  console.log(todos)
  
  return (
    <>
      <h1>Todoリスト</h1>
      <Button onClick={() => {addTodos({text:"Buttonを押したから増えたよ",complete:checked})}}>Click me</Button>
      <TodoList todos={todos}/> 
    </>
  );
}

export default App 
