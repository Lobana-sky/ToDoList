import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({toDos,setToDos}) =>{
    return(
        <div className="todo-container">
            <ul className="todo-list"></ul>
            {toDos.map(todo=> 
                <ToDo 
                setToDos={setToDos} 
                toDos={toDos}
                todo={todo}
                key={todo.id} 
                text={todo.input}
                />
            )}
        </div>
    );
}

export default ToDoList;