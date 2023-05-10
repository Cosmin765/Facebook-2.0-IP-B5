
import './LoginStyle.css';
import React from "react";
import { Link } from 'react-router-dom';

function Login(){
  return (
    <div className="login_body">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Viga"></link>
    <div class="banner"> 
        <h1>koobecaf.</h1>
    </div>
    <div className="center">
        <h1 className='title'>koobecaf.</h1>
        <form method = "post">
            <div className="txt_field">
                <input type ="text" required />
                
                <span></span>
                
                <label>Email</label>
            </div>

            <div className="txt_field">
                <input type ="password" required />

                <span></span>
                
                <label>Password</label>
            </div>

            <div className="pass"> Forgot password?</div>
            <input type="submit" value = "Login" />
            <div className = "signup_link">
                Not a member? <a href="#"><Link to='/register'> Register </Link> </a>
            </div>
        </form>
    </div>
    </div>
  );
}

export default Login;
