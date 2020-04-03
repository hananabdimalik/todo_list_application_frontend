import React from 'react';
import "./CurrentTasks.css"


function CurrentTasks(props) {

    // const option = [
    //     '20%', '40%', '60%', '80%',
    // ];

    // const defaultOption = option[0];



    return (
        <header>
            <div className="card">
                <div className="card-body">
                    <h3> Current To DO </h3>
                    <div><h5 className="text-left">{props.count} outstanding tasks</h5></div>

                    <div className="row">
                        <div className="col-3" > <p className="text-centre">Task </p> </div>
                        <div className="col-3">

                            <p className="text-centre">  Status  <select>
                                <option value="Not started"> 0 %</option>
                                <option value="20 percent"> 20 %</option>
                                <option value="40 percent"> 40 %</option>
                                <option value="60 percent"> 60 %</option>
                                <option value="80 percent"> 80 %</option>
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
