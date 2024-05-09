import React, { useState } from 'react';

const Form = ({add}) => {
    const[name,setName]=useState("");
    const[desc,setDesc]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(name.trim()!=="" && desc.trim()!==""){
            add(name,desc);
            setName("");
            setDesc("");
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div >
            <h1 className='text-center p-4'>ToDo App</h1>
            <input className="input" type='text' placeholder='Enter the task name' value={name} onChange={(e)=>setName(e.target.value)} autoFocus/>
            <input className="input"  type='text' placeholder='Enter the task description'value={desc} onChange={(e)=>setDesc(e.target.value)}/>
            <button type="submit" className="btn btn-primary ">Add</button>
            </div>

        </form>
        
    );
};

export default Form;








