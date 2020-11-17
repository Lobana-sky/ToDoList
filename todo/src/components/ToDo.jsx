import React from 'react';
import {BsFillTrashFill,BsCheckCircle} from 'react-icons/bs';

const ToDo =({text,todo,setToDos,toDos})=>{
    const deleteHandler=()=>{
setToDos(toDos.filter(item=>item.id!==todo.id));
    }
    return(
        <div className="todo">
            <li className="todo-item">{text}</li>
            <button className="check-btn"><BsCheckCircle/></button>
            <button onClick={deleteHandler} className="trash-btn"><BsFillTrashFill/></button>
        </div>
        );
    }
    
    export default ToDo;