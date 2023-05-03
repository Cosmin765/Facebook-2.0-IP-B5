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
  { id:1,name: 'Cohman Teodora', lastMessage: 'You: Ce faci ba', status: 'online', profilePic: 'https://www.mcanhealth.com/wp-content/uploads/2022/03/The-Rock-WWE-Debut-e1646723600689.jpg' },
  { id:2,name: 'Curcudel Teodor', lastMessage: 'Da-mi tema', status: 'offline', profilePic: 'https://freewaysocial.com/wp-content/uploads/2020/02/how-to-create-the-perfect-facebook-profile-picture.png' },
  { id:3, name: 'John Doe', lastMessage: 'Vand teme la 10 lei', status: 'offline', profilePic: 'https://i.imgflip.com/6w7arw.png?a466968' }
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
        { text: newMessage.trim(), time: new Date().toLocaleTimeString('it-IT'), sender: newSender }
      ]);
      setNewMessage("");
    }
  };
  const [selectedPersonId, setSelectedPersonId] = useState(null);
  const [selectedPersonPic, setSelectedPersonPic] = useState(null);
  const [selectedPersonName, setSelectedPersonName] = useState(null);
  const [selectedPersonStatus, setSelectedPersonStatus] = useState(null);
  function handlePersonClick(personId,profile,personName,personStatus) {
    setSelectedPersonId(personId);
    setSelectedPersonPic(profile);
    setSelectedPersonName(personName);
    setSelectedPersonStatus(personStatus);
    messages.length=0;
  }

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
                  key={people.id}
                  name={people.name}
                  profilePic={people.profilePic}
                  lastMessage={people.lastMessage}
                  status={people.status}
                  className={` ${people.id === selectedPersonId ? 'selected' : ''}`}
          onClick={() => handlePersonClick(people.id,people.profilePic,people.name,people.status)}
                />

              ))}
            </div>
          </div>

        </div>
 {selectedPersonId === null ? (

                  <div className="card_chat_nimic">
                    <span className="nimic">You didn't select any conversation.</span>
                    </div>
                )
                  :
       ( <div className="card_chat">
               
                

          <div className="card-header-chat">
            <div className="card-header-chat-item">
              <div className="img_cont">
              
                <img src={`${selectedPersonPic}`} className="user_img" />

              </div>
              <div className="user_info">
                <span>{`${selectedPersonName}`}</span>
                <p>{messages.length} Messages</p>
              </div>
              <span className={`online_icon_chat ${selectedPersonStatus === 'offline' ? 'offline' : ''}`} />
            </div>
          </div>

                <div className="messages-container">
                {messages.map((message, index) => (
                  <div key={index} className="message" >
                    {/* <div className="img_cont_msg">
                      <img src={message.sender === "me" ? "" : (index % 2 === 1 ? selectedPersonPic : "")} className=" user_img_msg" />
                   </div> */}
                    <div  className={message.sender === "me" ? "msg_cotainer_send" : "msg_cotainer"}>
                      
                   {message.text}
                      <span className="msg_time">{message.time}</span>
                    
                    
                    </div>
                  </div>
                ))}
                </div> 
            
              <form onSubmit={handleSubmit}>
              <div className="my-send">
                <input type="text" className="type_msg" placeholder="Type your message..." value={newMessage} onChange={handleChange} />
                
                  <button type="submit" className="send_btn"><img src={send_msg} /></button>
                </div>

              </form>
           
              
            </div>)}

      </div>
      {/* JQuery */}
    </div>
  );
}
export default ChatBox;

