
import './LoginStyle.css';
import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
const SERVER_ADDRESS = 'http://localhost:8084';

function Login(){

  return (
    <div className="login_body">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Viga"></link>
    
    <div className="log_center">
        <h1 className='log_title'>koobecaf.</h1>
        <form action="http://localhost:8084/login" method="POST">
            <div className="log_txt_field">
                <input name="username" type ="email" placeholder="Email" required />
                
                <span></span>
         
            </div>

            <div className="log_txt_field">
                <input name="password" type ="password" placeholder='Password' required />

                <span></span>
             
            </div>

            {/* <div className="log_pass"> <Link className='log_link' to='/forgot'>Forgot password?</Link></div> */}
            <input className="log_submit" type="submit" value = "Login" /*onClick={() => setUserLogged(true)}*/ />
            <div className = "log_signup_link">
                Not a member? <a href="#"><Link to='/register'> Register </Link> </a>
            </div>
        </form>
    </div>
    </div>
  );
}

export default Login;
