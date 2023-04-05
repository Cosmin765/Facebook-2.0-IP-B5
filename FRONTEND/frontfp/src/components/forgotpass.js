import React from "react";
import "./forgotpass.css"
const ForgotPass = () => {
    return(
        <div className='cover'>
            <h1 className="Title">koobecaf.</h1>
            <input type="text" placeholder="Enter your email"></input>
            <div className="send-btn">
                Send Code
            </div>
        </div>
    )
}

export default ForgotPass