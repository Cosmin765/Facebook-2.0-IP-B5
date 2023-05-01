import React, { useState } from "react";
import './ChatBox.css';
import icon from './Vectoricon.png';
import icon2 from './Group.png';
import icon3 from './Group (1).png';
import icon4 from './Chat_alt_2_light.png';
import search from './icons/search.svg';
import StretchedMenu from "./stretched_menu";
import PersonTemplate from "./PersonTemplate";
import send_msg from './icons/send_msg.png';

const people = [
  { name: 'Cohman Teodora', lastMessage: 'You: Ce faci ba', status: 'online', profilePic: 'https://www.mcanhealth.com/wp-content/uploads/2022/03/The-Rock-WWE-Debut-e1646723600689.jpg' },
  { name: 'Curcudel Teodor', lastMessage: 'Da-mi tema', status: 'offline', profilePic: 'https://freewaysocial.com/wp-content/uploads/2020/02/how-to-create-the-perfect-facebook-profile-picture.png' },
  { name: 'John Doe', lastMessage: 'Vand teme la 10 lei', status: 'offline', profilePic: 'https://i.imgflip.com/6w7arw.png?a466968' }
];

function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newMessage.trim() !== "") {
      const newSender = messages.length % 2 === 0 ? "me" : "other";
      setMessages([
        ...messages,
        { text: newMessage.trim(), time: new Date().toLocaleTimeString(), sender: newSender }
      ]);
      setNewMessage("");
    }
  };

  return (

    <div className="my-container ">
      <title>Chat</title>
      {/* Bootstrap */}


      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Viga" />


      <StretchedMenu />
      <div className="chats-container ">

        <div className="card">
          <div className="card-header">
            <div className="my-search">
              <input type="text" placeholder="Search..." name="search" />
              <span className="search_btn"><img src={search} /></span>
            </div>

          </div>
          <div className="contacts_body">
            <div className="contacts">
              {people.map((people) => (
                <PersonTemplate
                  key={people.name}
                  name={people.name}
                  profilePic={people.profilePic}
                  lastMessage={people.lastMessage}
                  status={people.status}
                />

              ))}
            </div>
          </div>

        </div>


        <div className="chat">
          <div className="card">


            <div className="card-header my-heeead msg_head">
              <div className="d-flex bd-highlight">
                <div className="img_cont">
                  <img src="https://www.mcanhealth.com/wp-content/uploads/2022/03/The-Rock-WWE-Debut-e1646723600689.jpg" className="rounded-circle user_img" />
                  <span className="online_icon" />
                </div>
                <div className="user_info">
                  <span>Dwayne Johnson</span>
                  <p>1767 Messages</p>
                </div>
                <div className="video_cam">
                  <span><i className="fas fa-video" /></span>
                  <span><i className="fas fa-phone" /></span>
                </div>
              </div>
              <span id="action_menu_btn"><i className="fas fa-ellipsis-v" /></span>
              <div className="action_menu">
                <ul>
                  <li><i className="fas fa-user-circle" /> View profile</li>
                  <li><i className="fas fa-users" /> Add to close friends</li>
                  <li><i className="fas fa-plus" /> Add to group</li>
                  <li><i className="fas fa-ban" /> Block</li>
                </ul>
              </div>
            </div>



            <div className="chats-container" >
              <div className="card-body">

                {messages.map((message, index) => (
                  <div key={index} className={message.sender === "me" ? "d-flex justify-content-end mb-4" : "d-flex justify-content-start mb-4"}>
                    <div className={message.sender === "me" ? "msg_cotainer_send msg_cotainer_purple" : "msg_cotainer msg_cotainer_grey"}>
                      {message.text}
                      <span className="msg_time">{message.time}</span>
                    </div>
                    <div className="img_cont_msg">
                      <img src={message.sender === "me" ? icon4 : (index % 2 === 1 ? icon : icon4)} className="rounded-circle user_img_msg" />
                    </div>
                  </div>
                ))}

                <form onSubmit={handleSubmit}>
                  <div className="input-group">
                    <input type="text" className="form-control type_msg" placeholder="Type your message..." value={newMessage} onChange={handleChange} />
                    <div className="input-group-append">
                      <button type="submit" className="input-group-text send_btn"><img src={send_msg} /></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>


          </div></div>











      </div>
      {/* JQuery */}
    </div>
  );
}
export default ChatBox;

