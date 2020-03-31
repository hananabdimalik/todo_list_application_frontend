import React, { useState } from 'react'
import "./AddaTask.css"


function AddaTask(props) {
    const [taskText, setTaskText] = useState(" ");
    const [date, setDate] = useState("2020-04-10");

    const handleTextChange = (event) => {
        setTaskText(event.target.value);
    }

    const handleDateChange = (event) => {
     setDate(event.target.value);
    }

    const handleAddTask = () => {
        console.log("clicked")
       props.addNewTaskFunc(taskText, date);
    }

    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <div className="col">
                        <h3> <button className="btn btn-info" onClick={handleAddTask}>Add</button> Add a Task</h3>
                        <div className="row mb-3">
                            <div className="col-6 md-6"> <input type="test" className="form-control" value={taskText} onChange={handleTextChange} /></div>
                            <div className="col-6 col-md-6"> <input type="date" className="form-control" value={date} onChange={handleDateChange} /></div>
                            {/* <div className="col-4 col-md-4"> <input type="test" className="form-control" /></div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddaTask; 