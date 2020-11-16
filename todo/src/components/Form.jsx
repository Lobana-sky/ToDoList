import React from 'react';
import { BsPlus } from 'react-icons/bs';
import '../App.css';



const Form = ({setInputText}) => {
    const inputTextHandler=(e)=>{
        setInputText(e.target.value);
    }
    return(
        <form>
            <input onChange={inputTextHandler} type="text" className="todo-input"/>
            <button className="todo-button" type="submit">
            <i className="fab fa-facebook"></i>
            <BsPlus/>
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