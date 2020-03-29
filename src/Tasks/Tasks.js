import React from 'react'

function Tasks(props) {
    return (
        <p> {props.text} - {props.Status} - {props.Deadline}</p>
    )
}

export default Tasks;