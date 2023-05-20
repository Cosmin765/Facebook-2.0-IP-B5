
import './LoginStyle.css';
import React from "react";
import { Link } from 'react-router-dom';
const SERVER_ADDRESS = 'http://localhost:8084';
let variable = false;
async function getRaw(url, method = 'POST', body = null) {
  const options = {
    method,
    credentials: 'include', // include cookies in the request
    body
  };
  const res = await fetch(url, options);
  return res;
}

async function getData(url, method = 'POST', body = null) {
  const res = await getRaw(url, method, body);
  const data = await res.json();
  return data;
}

async function getUser() {
  return await getData(SERVER_ADDRESS + '/getOwnId', 'GET');
}

async function setUserLogged(value){
  await getData(SERVER_ADDRESS+`/setLogged?value=${value}`,'POST');
}

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
            <input className="log_submit" type="submit" value = "Login" onClick={() => setUserLogged(true)} />
            <div className = "log_signup_link">
                Not a member? <a href="#"><Link to='/register'> Register </Link> </a>
            </div>
        </form>
    </div>
    </div>
  );
}

export default Login;
