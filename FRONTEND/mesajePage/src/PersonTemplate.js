import React from "react";
import './ChatBox.css';
function PersonTemplate(props) {
  return (
      <div className={`person-template ${props.className}`} onClick={props.onClick}>
      
          <div className="img_cont">
              <img src={props.profilePic} alt={props.name} className="user_img" />

          </div>
          <div className="user_info">
              <span>{props.name}</span>
              <p>{props.lastMessage}</p>
          </div>
          <div className={`online_icon ${props.status === 'offline' ? 'offline' : ''}`} />
      </div>
  );
}

export default PersonTemplate;