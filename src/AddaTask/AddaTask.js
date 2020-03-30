import React from 'react'
import "./AddaTask.css"

function AddaTask() {
    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h3> <button className="btn btn-info">Add</button> Add a Task</h3>
                    <div className="row mb-3">
                        <div className="col-6 md-6"> <input type="test" className="form-control" /></div>
                        <div className="col-6 col-md-6"> <input type="date" className="form-control" /></div>
                        {/* <div className="col-4 col-md-4"> <input type="test" className="form-control" /></div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddaTask; 