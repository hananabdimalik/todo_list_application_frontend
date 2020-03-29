import React from 'react'
import "./Tasks.css"
import moment from 'moment';

function Tasks(props) {
    return (
        <div className="row taskRow">
            <div className= "col-12 col-md-4">{props.text}</div>
            <div className= "col-3 col-md-2">{props.Status} </div>
            <div className= "col-3 col-md-2"> {moment(props.Deadline).format('d MM YYY')} </div>
            <div className= "col-3 col-md-2"><button className="btn btn-info " >Complete </button></div>
            <div className= "col-3 col-md-2"><button className="btn btn-info "> Delete</button></div>
        </div>
    )
}

export default Tasks;