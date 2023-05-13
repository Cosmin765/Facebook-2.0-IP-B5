import React from "react";
import "./forgotpass.css"
import { Link } from 'react-router-dom';
const ForgotPass = () => {
    return(
        <div className="forgot_page">
        <form className='forgotpass_cover'>
            <h1 className="forgotpass_Title">koobecaf.</h1>
            <input className="forgotpass_input" type="email" placeholder="Enter your email" required/> 
           <Link className="forgot_link" to='/verify'>
          <input className="forgotpass_send-btn" type="submit" value="Send code"/>   
                </Link>
           
        </form>
        </div>
    )
}

export default ForgotPass