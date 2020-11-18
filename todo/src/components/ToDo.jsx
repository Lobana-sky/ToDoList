import React from 'react';
import {BsFillTrashFill,BsCheckCircle} from 'react-icons/bs';
import {Button} from '@material-ui/core';


const ToDo =({text,todo,setToDos,toDos})=>{
    const deleteHandler=()=>{
        setToDos(toDos.filter(item=>item.id!==todo.id));
    }

    const completeHandler=()=>{
        setToDos(toDos.map(item => {
             if(item.id === todo.id){
                 return{
                     ...item, completed: !item.completed
                 }
             }
             return item;
         }
         ));
    }
    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ?"completed":""}`}>{text}</li>
            <Button onClick={completeHandler} className="check-btn"><BsCheckCircle/></Button>
            <Button onClick={deleteHandler} className="trash-btn"><BsFillTrashFill/></Button>
        </div>
        );
    }
    
    export default ToDo;