import React from 'react';
import "./CurrentTasks.css"
import Dropdown from 'react-dropdown'

function CurrentTasks(props) {

    // const option = [
    //     '20%', '40%', '60%', '80%',
    // ];

    // const defaultOption = option[0];



    return (
        <header>
            <h3> Current To DO </h3>
            <div><h6>{props.count} outstanding tasks</h6></div>

            <div className="row">
                <div className="col-3" > <p text-weight="bold">Task </p> </div>
                <div className="col-3"> 
                
                <p> Status   <select>
                        <option value ="Not started"> 0 %</option>
                        <option value ="20 percent"> 20 %</option>
                        <option value ="40 percent"> 40 %</option>
                        <option value ="60 percent"> 60 %</option>
                        <option value ="80 percent"> 80 %</option>
                        <option value="completed"> 100 %</option>
                    </select>
                   
                    {/* <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />; Status  */}
                    
                     </p> </div>
            
                <div className="col-3"> <p> Deadline</p> </div>
            </div>



        </header >

    )
}

export default CurrentTasks; 
