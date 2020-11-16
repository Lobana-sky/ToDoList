import React from 'react';
import '../App.css';
const Form = () => {
    return(
        <form>
            <input type="text" className="todo-input"/>
            <button className="todo-button" type="submit">
                <i className="fas"></i>
            </button>
            <div className="select">
                <select name="todo" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">completed</option>
                    <option value="uncompleted">uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;