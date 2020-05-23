import React from 'react';
import "./CurrentTasks.css"



function CurrentTasks(props) {


    const selectedTask = props.tasks.filter((task) => {
        return task.selected;
        
    });

   
    return (
        <header>
            <div className="card">
                <div className="card-body">
                    <h3> Current To DO </h3>
                    <div><h5 className="text-left">{props.count} outstanding tasks</h5></div>
                    <div className="row">
                        <div className="col-3" > <p className="text-centre">Task </p> </div>
                        <div className="col-3">

                            <p className="text-centre">  Status  <select onChange={props.statusUpdate}>
                                <option value="Not started"> 0 </option>
                                <option value="25"> 25 %</option>
                                <option value="50"> 50 %</option>
                                <option value="75"> 75 %</option>
                                <option value="completed"> 100 %</option>
                            </select>
                            </p>
                        </div>
                        <div className="col-3"> <p className="text-left"> Deadline</p> </div>
                    </div>
                </div>
            </div>
        </header >

    )
}

export default CurrentTasks; 
