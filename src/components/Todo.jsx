import Checkbox from '@material-ui/core/Checkbox';
import {useContext , useEffect} from 'react';
import {checkJudge } from '../App'

const Todo = (props) => {
  const { checked, setCheck } = useContext(checkJudge);


  const handleChange = () => {
     return setCheck(true)
  }


  useEffect(() => {
    console.log("aaaaaa")
  },[props.classIndex]);

  return (
    <div className={ "check-box-" + props.classIndex}>
     <Checkbox
        checked={checked}
        onClick={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
     />
     {props.text}
    </div>
  )
}

export default Todo