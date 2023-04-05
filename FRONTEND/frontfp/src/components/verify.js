import React from "react";
import "./verify.css"
const Verify = () =>{
    return(
        <div className='cover'>
            <h1 className="Title">koobecaf.</h1>
            <input type="text" placeholder="Enter the code received"></input>
            <div className="verify-btn">
                Verify
            </div>
            <div className="secsText">
                <p className="text">Didn't received the code?</p>
                <p className="secText">Send Again</p>
            </div>
        </div>
    )
}

export default Verify