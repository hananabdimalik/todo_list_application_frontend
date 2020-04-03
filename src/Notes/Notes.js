import React, { useState } from 'react'
import "./Notes.css";

   //create some initial state (includes useState)
    // we need to keep track of the text section
    //listen to any event that happen in the form state and update state accordingly 

function Notes(props) {
 
    const [noteText, setNoteText] = useState(" ")
    
    const handleTextChange = (event) => {
        setNoteText(event.target.value)
       
    }

    return (
        <div className="container">
            <div className="col-12 col-md-8">
                <div className="card Notes">
                    <div className="card-body">
                        <h3 className="text-left"> Notes  <button className="btn btn-info" onClick> + </button>  </h3>
                        <div>
                            <div className="card-body">
                                <input type="text" className="form-control" value={noteText} onChange={handleTextChange} />
                            </div>
                            <div className="col-12 col-md-4">{props.text}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notes; 