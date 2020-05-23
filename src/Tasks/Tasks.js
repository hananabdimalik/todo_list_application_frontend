import React from 'react'
import "./Tasks.css"
import moment from 'moment';

function Tasks(props) {

    const handleDeleteClick = () => {
        // console.log("Delete button was clicked");
        // console.log(props.id);
        props.deleteTaskFunc(props.id);
    };

    const handleCompelteClick = () => {
        console.log("Complete button was clicked");
        console.log(props.id);
        props.completeTaskFunc(props.id);
    }

    const handleStatusChange = (event) => {
        console.log(event.target.value)
        props.updateTaskStatusFunc(props.id)
    }
    const changeStatus = (event) => {   
        console.log(event.target.value)   
        props.toggleSelected(props.id);
    }


    return (
        <div className="card">
            <div className= "card-body">
             {/* {`${props.Status === 100 ? 'cardBodyTaskComplete' : 'card-body'}`} */}
                <div className="row">
                    <div className="col-12 col-md-4"> <input type="checkbox" value={props.id} className="form-check-input" onClick={changeStatus}/>{props.text}</div>
                    <div className="col-3 col-md-2" onChange={handleStatusChange}>{props.Status}</div>
                    <div className="col-3 col-md-2"> {moment(props.Deadline).format('d MM YYYY')} </div>
                    <div className="col-3 col-md-2"><button className="btn btn-info" onClick={handleCompelteClick}>Complete </button></div>
                    <div className="col-3 col-md-2"><button className="btn btn-info" onClick={handleDeleteClick}> Delete</button></div>
                </div>
            </div>
        </div>
    )
}

export default Tasks;