import Checkbox from '@material-ui/core/Checkbox';
import {useState} from 'react'


const Todo = (props) => {

  const handleChange = () => {
    return ""
  }
  
  return (
    <>
     <Checkbox
        checked={props.comp}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
     />
     {props.text}

    </>
  )
}

export default Todo