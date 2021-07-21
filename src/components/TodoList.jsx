import React from 'react'
import {Todo} from './index'
import { List } from '@material-ui/core';
const TodoList = (props) =>{
  return (
    <>
    {props.todos.map((todo,index) =>{
          return (
            <List><Todo text={todo.text} comp={todo.complete} key={index.toString()}/></List>
          )
     })}
    </>
  );
}

export default TodoList