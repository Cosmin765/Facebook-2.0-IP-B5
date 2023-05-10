import React from "react";
import "./forgotpass.css"
const ForgotPass = () => {
    return(
        <div className='forgotpass_cover'>
            <h1 className="forgotpass_Title">koobecaf.</h1>
            <input className="forgotpass_input" type="text" placeholder="Enter your email"></input>
            <div className="forgotpass_send-btn">
                Send Code
            </div>
        </div>
    )
}

export default ForgotPass