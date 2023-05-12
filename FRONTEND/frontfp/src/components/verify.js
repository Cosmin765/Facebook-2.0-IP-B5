import React from "react";
import "./verify.css"
const Verify = () =>{
    return(
        <div className='verify_cover'>
            <h1 className="verify_Title">koobecaf.</h1>
            <input className="verify_input" type="text" placeholder="Enter the code received"></input>
            <div className="verify_btn">
                Verify
            </div>
            <div className="verify_secsText">
                <p className="verify_text">Didn't received the code?</p>
                <p className="verify_secText">Send Again</p>
            </div>
        </div>
    )
}

export default Verify