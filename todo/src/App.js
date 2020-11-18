import React ,{ useState,useEffect } from "react";
import './App.css';
import {Grid,Paper} from '@material-ui/core';
import {AiOutlineSwapLeft,AiOutlineSwapRight,AiOutlineMenu} from 'react-icons/ai';



//importing components
import Form from "./components/Form";
import ToDoList from './components/ToDoList';

function App() {
  const [inputText,setInputText]=useState('');
  const [toDos,setToDos]=useState([]);
  const [status,setStatus]=useState("all");
  const [filteredToDos, setFilteredToDos]=useState([]);

  //Run Once when the app start
  useEffect(()=>
  getLocalToDos()
  ,[]);
  const filterHandler=()=>{
    switch(status){
    case "COMPLETED":
setFilteredToDos(toDos.filter(item=>item.completed===true));
break;
case "UNCOMPLETED":
setFilteredToDos(toDos.filter(item=>item.completed===false));
break;
default:
  setFilteredToDos(toDos);
  break;
  }
  }

  const saveLocalToDos=()=>{
  localStorage.setItem("toDos",JSON.stringify(toDos));
  }

  const getLocalToDos=()=>{
    if(localStorage.getItem("toDos")===null){
      localStorage.setItem("toDos",JSON.stringify([]));
      }
      else{
       let toDoLocal=JSON.parse(localStorage.getItem("toDos"));
       setToDos(toDoLocal);
      }
  }

  useEffect(()=>{
    filterHandler();
    saveLocalToDos()}
    ,[status,toDos]);

  return (
      <Grid container >
        <Grid item xs={12}>
          <Paper>
          <header>
          <h1>My List</h1>
          </header>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper  >
          <Form setStatus={setStatus} setInputText={setInputText} setToDos={setToDos} toDos={toDos} inputText={inputText}/>
          </Paper>
        </Grid>
        <Grid item xs={12} className="list-icon-section">
          <Paper>
         <AiOutlineSwapLeft/>
         <AiOutlineMenu/>

         <AiOutlineSwapRight/>
          </Paper>
        </Grid>
        
        <Grid item xs={12}>
          <Paper>
          <ToDoList filteredToDos={filteredToDos} setToDos={setToDos} toDos={toDos}/>
          </Paper>
        </Grid>

      </Grid>
  );
}

export default App;
