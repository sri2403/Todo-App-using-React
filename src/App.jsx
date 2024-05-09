import React, { useState } from 'react';
import Form from '../components/Form';
import Cardlist from '../components/Cardlist';
import "./App.css";

const App = () => {
  const[tasks,setTasks]=useState([]);
  const[view,setView]=useState("All")
  
  const add=(name,desc)=>{
    setTasks([...tasks,{id:Date.now(),name,desc,completed:false}]);
  };

  const editFunc=(updatedTask)=>{
    const updatedTasks=tasks.map(task=>task.id===updatedTask.id?updatedTask:task);
    setTasks(updatedTasks);
  }
  

  const deleteFunc=(selectedId)=>{
    const remainingTasks=tasks.filter(task=>task.id!==selectedId);
    setTasks(remainingTasks);
  }
  
  const filteredTasks=()=>{
    switch(view){
      case "Completed":
        return tasks.filter((task)=>task.completed);
      case "Not completed":
        return tasks.filter((task)=>!task.completed);
      default:
        return tasks;  
    }
  }

  const toggleCompletion = (updatedTask) => {
    const updatedTasks = tasks.map(task =>
      task.id === updatedTask.id ? { ...updatedTask, completed: !updatedTask.completed } : task
    );
    setTasks(updatedTasks);
};

  return (
    <div className='body'>
      <Form add={add} />
      <h5 className="m-4">Status filter: <select  value={view} onChange={(e) => setView(e.target.value)} >
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Not completed">Not completed</option>
        </select></h5>
      <Cardlist tasks={filteredTasks()} editFunc={editFunc} deleteFunc={deleteFunc} toggleCompletion={toggleCompletion}/>
      </div>
  );
};

export default App;
