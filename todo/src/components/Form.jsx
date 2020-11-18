import React from 'react';
import { BsPlus } from 'react-icons/bs';
import {Button,TextField,Grid,Paper} from '@material-ui/core';

import '../App.css';

const Form = ({setStatus,setInputText,setToDos,toDos,inputText}) => {
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
    const statusHandler=(e)=>{
        setStatus(e.target.value);
    }
    return(
        <form >
            <Grid  container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            >
                <Grid item>
                <Paper>
                <TextField value={inputText} //clear textbox to be ready to the next to do
                    onChange={inputTextHandler} 
                    type="text" 
                    className="todo-input" 
                    id="standard-basic" 
                    label="My new task" 
                    variant="standard" />

                <Button variant="contained" color="secondary" className="todo-button" type="submit" onClick={submitToDoHandler}>
                    <BsPlus/>
                    </Button>
                </Paper>
                </Grid>

                <Grid item>
                <Paper>
                <div className="select">
                        <select onChange={statusHandler} name="todo" className="filter-todo">
                            <option value="ALL">All</option>
                            <option value="COMPLETED">completed</option>
                            <option value="UNCOMPLETED">uncompleted</option>
                        </select>
                    </div>
                </Paper>
                </Grid>

            </Grid>



           

        </form>
    );
}

export default Form;