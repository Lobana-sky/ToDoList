import React ,{ useState,useEffect } from "react";
import './App.css';

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
    <div>
        <header>
          <h1>My List</h1>
        </header>
        <Form setStatus={setStatus} setInputText={setInputText} setToDos={setToDos} toDos={toDos} inputText={inputText}/>
        <ToDoList filteredToDos={filteredToDos} setToDos={setToDos} toDos={toDos}/>

    </div>
  );
}

export default App;
