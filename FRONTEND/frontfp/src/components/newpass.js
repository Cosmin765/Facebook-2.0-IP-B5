import React from "react";
import "./newpass.css"

const NewPass = ()=>{
    return(
        <div className='cover'>
            <h1 className="Title">koobecaf.</h1>
            <input type="text" placeholder="New Password"></input>
            <input type="text" placeholder="Confirm New Password"></input>
            <div className="change-btn">
                Change
            </div>
        </div>
    )
}

export default NewPass