import React from "react";
import "./newpass.css"
import { Link } from 'react-router-dom';
const NewPass = ()=>{
    return(
        <div className="new_page">
        <form className='newpass_cover'>
            <h1 className="newpass_Title">koobecaf.</h1>
            <input className="newpass_input" type="password" placeholder="New Password"></input>
            <input className="newpass_input" type="password" placeholder="Confirm New Password"></input>
            <Link className='verify_link' to='/login'>
          <input className="newpass_change-btn" type="submit" value="Change"/>   
       </Link>
        </form></div>
    )
}

export default NewPass