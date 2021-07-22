import React from 'react'
import {Todo} from './index'
import { List } from '@material-ui/core';
const TodoList = (props) =>{
  return (
    <>
    {props.todos.map((todo,index) =>{
          return (
            <List><Todo text={todo.text} key={index.toString()} classIndex={index}/></List>
          )
     })}
    </>
  );
}

export default TodoList