import React, { useState } from 'react'
import "./Notes.css";

function Notes(props) {
    const [notesText, setNotesText] = useState(" ");


    const handleTextChange = (event) => {
        setNotesText(event.target.value);
    }

    const handleAddNote = () => {
        props.addNotesFunc(notesText)
    }

    return (
        <div className="container">
            <div className="row-12">
                <div className="col-12">
                    <div className="card Notes">
                        <div className="card-body">
                            <h3> Notes  <button className="btn btn-info" onClick={handleAddNote}> + </button>  </h3>
                            <div>
                                <div className="card-body">
                                    <input type="text" className="form-control" value={notesText} onChange={handleTextChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notes; 