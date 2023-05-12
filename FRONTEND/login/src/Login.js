
import './LoginStyle.css';
import React from "react";

function Login() {
  return (
    <div className="body">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Viga"></link>
    <div class="banner"> 
        <h1>koobecaf.</h1>
    </div>
    <div class="center">
        <h1>koobecaf.</h1>
        <form method = "post">
            <div class="txt_field">
                <input type ="text" required />
                
                <span></span>
                
                <label>Email</label>
            </div>

            <div class="txt_field">
                <input type ="password" required />

                <span></span>
                
                <label>Password</label>
            </div>

            <div class="pass"> Forgot password?</div>
            <input type="submit" value = "Login" />
            <div class = "signup_link">
                Not a member? <a href="#"> Register</a>
            </div>
        </form>
    </div>
    </div>
  );
}

export default Login;
