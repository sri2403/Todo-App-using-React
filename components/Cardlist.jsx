import React from 'react';
import Card from './Card';

const Cardlist = ({tasks,editFunc,deleteFunc,filteredTasks,toggleCompletion}) => {
    return (
        <div className="row p-2">
            <h2>My tasks :-</h2>
            {tasks.map((task)=>{
                return(
                    <div className="col-md-4">
                    <Card key={task.id} task={task} editFunc={editFunc} deleteFunc={deleteFunc} filteredTasks={filteredTasks} toggleCompletion={toggleCompletion}/>
                    </div>
                )
            })}
        </div>
    );
};

export default Cardlist;



