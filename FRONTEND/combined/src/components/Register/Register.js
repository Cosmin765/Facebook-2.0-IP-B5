import React, { useState } from "react";
import "./Register.css";

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
    <div className="cover">
      <div className="input-container">
        <h1 className="Title">Sign up</h1>
        <h1 className="name1">It’s quick and easy</h1>
        <input className="register_input" type="text" placeholder="First Name" />
        <input  className="register_input" type="text" placeholder="Surname" />
        <div className="birthday"> Birthday: </div>
        <div className="dropdown-container">
          <select className="dropdown" value={day} onChange={handleDayChange}>
            <option value="Day" disabled>
              Day
            </option>
            {[...Array(31)].map((_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
          <select className="dropdown" value={month} onChange={handleMonthChange}>
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
          <select className="dropdown2" value={year} onChange={handleYearChange}>
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
        <input className="register_input"  type="text" placeholder="Email" />
        <input  className="register_input" type="text" placeholder="Password" />
        <input  className="register_input" type="text" placeholder="Confirm Password" />
      </div>
      <div className="input-container">
        <div className="text">koobecaf.</div>
        <div className="name2">
          Already have an account? <a href="#">Log in</a>
        </div>
        <div className="change-btn">Register</div>
        <div className="check-container">
          <input  className="register_input" type="checkbox" id="agreement" name="agreement" />
          <label className="register_label"  htmlFor="agreement">I agree to the terms and conditions</label>
        </div>
      </div>
    </div>
  );
};

export default RegisterAccount;