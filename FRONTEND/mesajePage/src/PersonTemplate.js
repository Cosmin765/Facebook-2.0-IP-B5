import React from "react";
import './ChatBox.css';
function PersonTemplate(props) {
  return (
      <div className={`msg_person-template ${props.className}`} onClick={props.onClick}>
      
          <div className="msg_img_cont">
              <img src={props.profilePic} alt={props.name} className="msg_user_img" />

          </div>
          <div className="msg_user_info">
              <span>{props.name}</span>
              <p>{props.lastMessage}</p>
          </div>
          <div className={`msg_online_icon ${props.status === 'offline' ? 'msg_offline' : ''}`} />
      </div>
  );
}

export default PersonTemplate;