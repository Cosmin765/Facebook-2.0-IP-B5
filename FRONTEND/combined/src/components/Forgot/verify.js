import React from "react";
import "./verify.css"
import { Link } from "react-router-dom";
const Verify = () =>{
    return(
        <div className="verify_page">
        <form className='verify_cover'>
            <h1 className="verify_Title">koobecaf.</h1>
            <input className="verify_input" type="text" placeholder="Enter the code received" required></input>
          <Link className="verify_link" to='/new'>
          <input className="verify_btn" type="submit" value="Verify"/>   
           </Link>
            <div className="verify_secsText">
                <p className="verify_text">Didn't received the code?</p>
                <p className="verify_secText">Send Again</p>
            </div>
        </form></div>
    )
}

export default Verify