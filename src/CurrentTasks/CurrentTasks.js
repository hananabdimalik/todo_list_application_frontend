import React from 'react';
import "./CurrentTasks.css"

function CurrentTasks(props) {
    return (
        <header>
        <h3> Current To DO </h3>
       <div><h5>{props.count} outstanding tasks</h5></div>
        
        <div className="row">
           <div className="col-3"> <p> Task </p> </div>
           <div className="col-3"> <p> Status </p> </div>
           <div className="col-3"> <p> Deadline</p> </div>             
           </div> 
       
         </header>
       
    )
}

export default CurrentTasks; 
