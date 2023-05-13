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
   
      <form className="reg_cover">
        <div className="reg_input-container">
        
        <h1 className="reg_Title">Sign up</h1>
        <h1 className="reg_name1">       </h1>
        
        <input className="register_input" type="text" placeholder="First Name" required/>
        <input  className="register_input" type="text" placeholder="Surname" required/>
        <div className="reg_birthday"> Birthday: </div>
        <div className="reg_dropdown-container">
          <select className="reg_dropdown" value={day} onChange={handleDayChange}>
            <option value="Day" disabled>
              Day
            </option>
            {[...Array(31)].map((_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
          <select className="reg_dropdown" value={month} onChange={handleMonthChange}>
            <option value="Month" disabled>
              Month
            </option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
          <select className="reg_dropdown2" value={year} onChange={handleYearChange}>
            <option value="Year" disabled>
              Year
            </option>
            {[...Array(100)].map((_, index) => (
              <option key={index + 1920} value={index + 1920}>
                {index + 1920}
              </option>
            ))}
          </select>
        </div>
        <input className="register_input"  type="email" placeholder="Email" required/>
        <input  className="register_input" type="password" placeholder="Password" required/>
        <input  className="register_input" type="password" placeholder="Confirm Password" required/>
      </div>
      <div className="reg_input-container">
        <div className="reg_text">koobecaf.</div>
        <div className="reg_name2">
          Already have an account? <Link to='/login'>Log in</Link>
        </div>
        
        <Link className="router_link" to='/login'> <input className="reg_change-btn" type="submit" value = "Register" /></Link>
        <div className="reg_check-container">
          <input  className="register_input" type="checkbox" id="agreement" name="agreement" required/>
          <label className="register_label"  htmlFor="agreement">I agree to the terms and conditions</label>
        </div>
        
      </div>
      </form>
   
  );
};

export default RegisterAccount;