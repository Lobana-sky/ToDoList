import React ,{ useState } from "react";
import './App.css';

// import {Container,Row} from 'react-bootstrap'
//importing components
import Form from "./components/Form";
import ToDoList from './components/ToDoList';

function App() {
  const [inputText,setInputText]=useState('');
  const [toDos,setToDos]=useState([]);
  return (
    <div className="App">
        <header>
          <h1>My List</h1>
        </header>
        <Form setInputText={setInputText} setToDos={setToDos} toDos={toDos} inputText={inputText}/>
        <ToDoList />

    </div>
  );
}

export default App;
