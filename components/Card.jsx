import React, { useState } from 'react';

const Card = ({task,deleteFunc,editFunc,toggleCompletion}) => {
    const[name,setName]=useState(task.name);
    const[desc,setDesc]=useState(task.desc);
    const[editing,setEditing]=useState(false);

    const save=()=>{
        editFunc({...task,name,desc});
        setEditing(false);
    }

    const cancel=()=>{
        setName(task.name);
        setName(task.desc);
        setEditing(false);
    }
    
    return (
        <div className="card-body">
            {editing?(
                <div className='one p-3'>
                    <input type='text' placeholder='Type the name to want to update' value={name} onChange={(e)=>setName(e.target.value)} autoFocus/><br></br><br></br>
                    <input type='text' placeholder='Type the desc to want to update' value={desc} onChange={(e)=>setDesc(e.target.value)}/>
                    <br></br>
                    <button className="btn btn-primary mr-2" onClick={save}>Save</button>
                    <button className="btn btn-secondary" onClick={cancel}>Cancel</button>
                </div>
            ):
            (<div className='p-3'>
                <h5>Task name: {task.name}</h5>
                <h5>Task desc: {task.desc}</h5>
                <h5>Status update: <select value={task.completed ? "Completed" : "Not completed"} onChange={() => toggleCompletion(task)}>
                    <option value="Not completed">Not completed</option>
                    <option value="Completed">Completed</option>
                    </select>
                </h5>
                <button className="btn btn-primary mr-2" onClick={()=>setEditing(true)}>Edit</button>
                <button className="btn btn-danger " onClick={()=>deleteFunc(task.id)}>Delete</button>    
            </div>

            )}
        </div>
    );
};

export default Card;



