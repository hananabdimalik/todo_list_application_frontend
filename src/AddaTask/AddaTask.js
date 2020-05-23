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
        props.addNewTaskFunc(taskText, date);
    }

    return (
        <div className="container">

            <div className="card">
                <div className="card-body">
                    <div ><h3 className="text-left"> Add a Task   <button className="btn btn-info" onClick={handleAddTask}>Add</button> </h3> </div>
                    <div className="row mb-3">
                        <div className="col-6 md-6"> <input type="test" className="form-control" value={taskText} onChange={handleTextChange} /></div>
                        <div className="col-6 col-md-6"> <input type="date" className="form-control" value={date} onChange={handleDateChange} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddaTask; 