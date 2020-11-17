import React from 'react';
import ToDo from './ToDo';

const ToDoList = () =>{
    return(
        <div className="todo-container">
            <ul className="todo-list"></ul>
            <ToDo />
        </div>
    );
}

export default ToDoList;