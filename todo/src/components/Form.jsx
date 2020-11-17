import React from 'react';
import { BsPlus } from 'react-icons/bs';
import '../App.css';



const Form = ({setInputText,setToDos,toDos,inputText}) => {
    const inputTextHandler=(e)=>{
        setInputText(e.target.value);
        }
    const submitToDoHandler=(e)=>{
        e.preventDefault();
        setToDos([
            ...toDos,{input:inputText,completed:false,id:Math.random()*1000}
        ]);
        setInputText("");
        //clear inputText state to ad next to do
    }
    return(
        <form>
            <input 
            value={inputText} //clear textbox to be ready to the next to do
            onChange={inputTextHandler} 
            type="text" 
            className="todo-input"/>
            <button className="todo-button" type="submit" onClick={submitToDoHandler}>
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