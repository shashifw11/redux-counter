 import {useState} from "react" ; 
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/actions";

 export const Todo = () =>{
const todos = useSelector(store => store.todo) // useSelector decide which components goes to rerender // if we return store only then entire store goes to re-render 
const [text,setText] = useState("") ; 
const dispatch = useDispatch()
    return(
        <div>
            <input type = "text" onChange = {(e)=>setText(e.target.value)}/>
           <button onClick = {()=>{
               dispatch(addTodo(text)); 
           }}>ADD Todo</button>
           {todos.map(e=><div key = {e.i}>{e}</div>)}
        </div>
    )
 }