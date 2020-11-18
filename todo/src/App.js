import React ,{ useState,useEffect } from "react";
import './App.css';

// import {Container,Row} from 'react-bootstrap'
//importing components
import Form from "./components/Form";
import ToDoList from './components/ToDoList';

function App() {
  const [inputText,setInputText]=useState('');
  const [toDos,setToDos]=useState([]);
  const [status,setStatus]=useState("all");
  const [filteredToDos, setFilteredToDos]=useState([]);
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
  useEffect(()=>
    filterHandler()
    ,[status,toDos]);

  return (
    <div className="App">
        <header>
          <h1>My List</h1>
        </header>
        <Form setStatus={setStatus} setInputText={setInputText} setToDos={setToDos} toDos={toDos} inputText={inputText}/>
        <ToDoList filteredToDos={filteredToDos} setToDos={setToDos} toDos={toDos}/>

    </div>
  );
}

export default App;
