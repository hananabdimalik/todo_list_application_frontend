import React from 'react';
import "./CurrentTasks.css"
import Tasks from '../Tasks/Tasks';


function CurrentTasks(props) {

    //list of selected tasks 
    const selectedTask = props.tasks.filter((task) => {
        return task.selected;
    });

    function selectStatus(event) {
        console.log(event.target.value)
        props.tasks.map((task) => {
            if (task.selected) {
                task.Status = event.target.value
            }
        })
    }

    return (
        <header>
            <div className="card">
                <div className="card-body">
                    <h3> Current To DO </h3>
                    <div><h5 className="text-left">{props.count} outstanding tasks</h5></div>
                 {/* <div><h5 className="text-left">{selectedTask.length} outstanding tasks</h5></div> */}


                    <div className="row">
                        <div className="col-3" > <p className="text-centre">Task </p> </div>
                        <div className="col-3">

                            <p className="text-centre">  Status  <select onChange={selectStatus}>
                                <option value="Not started"> 0 %</option>
                                <option value="20 "> 20 %</option>
                                <option value="40 "> 40 %</option>
                                <option value="60 "> 60 %</option>
                                <option value="80 "> 80 %</option>
                                <option value="completed"> 100 %</option>
                            </select>

                                {/* <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />; Status  */}

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
