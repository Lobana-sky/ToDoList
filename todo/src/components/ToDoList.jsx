import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({filteredToDos,toDos,setToDos}) =>{
    return(
        <div className="todo-container">
            <ul className="todo-list"></ul>
            {filteredToDos.map(todo=> 
                <ToDo 
                setToDos={setToDos} 
                toDos={toDos}
                todo={todo}
                //pass a refrence to itself
                key={todo.id} 
                text={todo.input}
                />
            )}
        </div>
    );
}

export default ToDoList;