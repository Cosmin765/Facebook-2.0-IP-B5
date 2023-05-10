import React from "react";
import "./newpass.css"

const NewPass = ()=>{
    return(
        <div className='newpass_cover'>
            <h1 className="newpass_Title">koobecaf.</h1>
            <input className="newpass_input" type="text" placeholder="New Password"></input>
            <input className="newpass_input" type="text" placeholder="Confirm New Password"></input>
            <div className="newpass_change-btn">
                Change
            </div>
        </div>
    )
}

export default NewPass