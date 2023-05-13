import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";

const RegisterAccount = () => {
  const [day, setDay] = useState("Day");
  const [month, setMonth] = useState("Month");
  const [year, setYear] = useState("Year");

  const handleDayChange = (event) => {
    setDay(event.target.value);
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  return (
   
      <form className="reg_cover" action="http://localhost:8084/register" method="POST">
        <div className="reg_input-container">
        
        <h1 className="reg_Title">Sign up</h1>
        <h1 className="reg_name1">       </h1>
        
        <input name="firstName" className="register_input" type="text" placeholder="First Name" required/>
        <input name="lastName" className="register_input" type="text" placeholder="Surname" required/>
        <div className="reg_birthday"> Birthday: </div>
        <input name="birthday" className="register_input" type="date" required/>
        <input name="email" className="register_input"  type="email" placeholder="Email" required/>
        <input name="password" className="register_input" type="password" placeholder="Password" required/>
        <input className="register_input" type="password" placeholder="Confirm Password" required/>
      </div>
      <div className="reg_input-container">
        <div className="reg_text">koobecaf.</div> 
        <div className="reg_name2">
          Already have an account? <Link to='/login'>Log in</Link>
        </div>
        
        <input className="reg_change-btn" type="submit" value = "Register" />
        <div className="reg_check-container">
          <input  className="register_input" type="checkbox" id="agreement" name="agreement" required/>
          <label className="register_label"  htmlFor="agreement">I agree to the terms and conditions</label>
        </div>
        
      </div>
      </form>
   
  );
};

export default RegisterAccount;