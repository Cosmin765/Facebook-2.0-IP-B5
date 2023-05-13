import React, { useState, useEffect } from "react";
import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";
import './ChatBox.css';
// import icon from './Vectoricon.png';
// import icon2 from './Group.png';
// import icon3 from './Group (1).png';
// import icon4 from './Chat_alt_2_light.png';
import search from './icons/search.svg';
import StretchedMenu from "./stretched_menu";
import PersonTemplate from "./PersonTemplate";
import send_msg from './icons/send_msg.png';

const SERVER_ADDRESS = 'http://localhost:8084';
const CONVERSATIONS_ADDRESS = 'http://localhost:8086';


// let people = [
//   { id: 1, name: 'Cohman Teodora', status: 'online', profilePic: 'https://www.mcanhealth.com/wp-content/uploads/2022/03/The-Rock-WWE-Debut-e1646723600689.jpg', lastChecked: null },
//   { id: 2, name: 'Curcudel Teodor', status: 'offline', profilePic: 'https://freewaysocial.com/wp-content/uploads/2020/02/how-to-create-the-perfect-facebook-profile-picture.png', lastChecked: null },
//   { id: 3, name: 'John Doe', status: 'offline', profilePic: 'https://i.imgflip.com/6w7arw.png?a466968', lastChecked: null }
// ];

const mockMessages = [
  { text: "Hello!", time: "10:00 AM", sender: "other" },
  { text: "How are you?", time: "10:05 AM", sender: "other" },
  { text: "I'm fine, thank you.", time: "10:10 AM", sender: "me" },
  { text: "That's good to hear!", time: "10:15 AM", sender: "other" },
];

const socketAddress = CONVERSATIONS_ADDRESS;
  let stompClient;
  let socket;

  function connect(conversationId, handler) {
    socket = new SockJS(socketAddress + '/chat');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
      stompClient.subscribe("/topic/messages/" + conversationId, function (response) {
        let data = JSON.parse(response.body);
        if(handler) handler(data);
      });
    });
  }

  function sendMessage(me, to, messageText) {
    const message = {
      conversationId: to,
      userId: me,
      content: messageText
    };
    stompClient.send("/app/chat/" + to, {}, JSON.stringify(message));
    // stompClient.send("/topic/messages/" + to, {}, JSON.stringify(message));
  }


async function getRaw(url, method='POST', body=null) {
  const options = {
    method,
    credentials: 'include', // include cookies in the request
    body
  };
  const res = await fetch(url, options);
  return res;
}

async function getData(url, method='POST', body=null) {
  const res = await getRaw(url, method, body);
  const data = await res.json();
  return data;
}

async function getUser() {
  return await getData(SERVER_ADDRESS + '/getOwnId', 'GET');
}

async function getPeople() {
  const url = new URL(SERVER_ADDRESS + '/friends');
  const user = await getUser();
  url.searchParams.append('userId', user.id)
  return await getData(url, 'GET');
}

async function getConversations() {
  const user = await getUser();
  const url = new URL(CONVERSATIONS_ADDRESS + `/api/conversations/user/${user.id}`);
  const conversations =  await getData(url, 'GET');
  return conversations;
}

async function getConversation(otherId) {
  const user = await getUser();
  const url = new URL(CONVERSATIONS_ADDRESS + `/api/conversations/findPair/${user.id}/${otherId}`);
  const conversation =  await getData(url, 'GET');
  return conversation;
}

const friends = ["Enea Iustin", "Hrebenciuc Alex"];
let newMessageObj = { text: "Nothing here!" };
let convFound = 0, friendFound = 0;
let result;
function ChatBox() {
  const [selectedPersonId, setSelectedPersonId] = useState(null);
  const [selectedPersonPic, setSelectedPersonPic] = useState(null);
  const [selectedPersonTime, setSelectedPersonTime] = useState(new Date().toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' }));
  const [selectedPersonName, setSelectedPersonName] = useState(null);
  const [selectedPersonStatus, setSelectedPersonStatus] = useState(null);
  const [searchName, setSearchName] = useState("");
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const handleChangeSearch = (event) => {
    setSearchName(event.target.value);
  };

  const [people, setPeople] = useState([]);

  if(!people.length) {
    getPeople().then(data => {
      setPeople(data.map(p => {
        p.profilePic = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXIzB_kc5Nif4Z1-HFgBglche-F55frSnLj9BTUY3ewg&s`;
        return p;
      }));
    });
  }

  function handleReceiveMessage(message) {
    const newMessageObj = { text: message.content, time: new Date().toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' }), sender: "other" };

    const newMessages = {
      ...messages,
    };

    if(messages[message.userId]) {
      newMessages[message.userId] = [...messages[message.userId], newMessageObj];
    }
    setMessages(newMessages);
        // const lastCheckedTime = conv.lastChecked ? getSecondsFromTimeString(conv.lastChecked) : 0;
        //const lastMessageTime = messages[personId]?.length > 0 ? getSecondsFromTimeString(messages[personId][messages[personId].length - 1].time) : 0;
        //const isUnread = lastCheckedTime < lastMessageTime;
  }

  if(selectedPersonId !== null) {
    getConversation(selectedPersonId).then(conversation => {
      if(!socket) {
        connect(conversation.id, handleReceiveMessage);
      } else {
        // socket.close();
        // socket = null;
      }
    });
  }

  const handleKeyDown = (event) => {

    people.forEach(conv => {
      if (searchName.toLowerCase() === conv.name.toLowerCase()) {
        convFound = 1;
        result = people.find((conv) => conv.name.toLowerCase() === searchName.toLowerCase());
      }
    });


    if (convFound === 1) {
      handlePersonClick(result.id, result.profilePic, result.furstname + ' ' + result.lastName, result.status);
      setSearchName("");
      convFound = 0;
    }
    else {
      friends.forEach(i => {
        if (searchName.toLowerCase() === i.toLowerCase()) {
          friendFound = 1;
          result = friends.find((i) => i.toLowerCase() === searchName.toLowerCase());

        }
      });
      if (friendFound === 1) {

        people.push({ id: people.length + 1, name: result, status: 'online', profilePic: 'https://freewaysocial.com/wp-content/uploads/2020/02/how-to-create-the-perfect-facebook-profile-picture.png' });
        handlePersonClick(people[people.length - 1].id, people[people.length - 1].profilePic, people[people.length - 1].firstName + ' ' + people[people.length - 1].lastName, people[people.length - 1].status);
        friendFound = 0;
        setSearchName("");
      }
      else
        window.alert("You can't have a conversation with someone who is not your friend.");
    }
    event.target.value = '';
  };
  //const [unread,setUnread] =useState({});

  const handleChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (newMessage.trim() !== "") {
      const newSender = "me";
      newMessageObj = { text: newMessage.trim(), time: new Date().toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' }), sender: newSender };
      setMessages({
        ...messages,
        [selectedPersonId]: [...messages[selectedPersonId], newMessageObj]
      });

      setNewMessage("");

      const user = await getUser();
      const conversation = await getConversation(selectedPersonId);
      sendMessage(user.id, conversation.id, newMessage);

    }
  };

  function handlePersonClick(personId, profile, personName, personStatus) {
    setSelectedPersonId(personId);
    setSelectedPersonTime(new Date().toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' }));
    const person = people.find(p => p.id === personId);
    person.lastChecked = selectedPersonTime;

    setSelectedPersonPic(profile);
    setSelectedPersonName(personName);
    setSelectedPersonStatus(personStatus);
    // setUnread({
    //   ...unread,
    //   [personId]:false,
    // });

    if (!messages[personId]) {
      setMessages({
        ...messages,
        [personId]: []
      })

    }

  }
  // function getSecondsFromTimeString(timeString) {
  //   const [hours, minutes, seconds] = timeString.split(':').map(Number);
  //   return hours * 3600 + minutes * 60 + seconds;
  // }
  return (

    <div className="msg_my-container ">
      <title>Chat</title>
      {/* Bootstrap */}


      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Viga" />


      <StretchedMenu />
      <div className="msg_chats-container ">

        <div className="msg_card">
          <div className="msg_card-header">
            <div className="msg_my-search">
              <input type="text" placeholder="Search..." name="search" onChange={handleChangeSearch} onKeyDown={(event) => event.key === "Enter" && handleKeyDown(event)} />
              <span className="msg_search_btn" onClick={(event) => handleKeyDown(event)}><img src={search} alt="imagine_search" /></span>
            </div>

          </div>
          <div className="msg_contacts_body">
            <div className="msg_contacts">
              {people.map((people) => (
                <PersonTemplate
                  key={people.id}
                  name={people.firstName + ' ' + people.lastName}
                  profilePic={people.profilePic}
                  lastMessage={messages[people.id]?.length > 0 ?
                    (messages[people.id][messages[people.id].length - 1].sender === "me" ?
                      `You: ${messages[people.id][messages[people.id].length - 1].text}`
                      : messages[people.id][messages[people.id].length - 1].text)
                    : "Nothing here."}
                  status={people.isLoggedIn}
                  //classUnread={unread[people.id]}
                  className={`${people.id === selectedPersonId ? 'msg_selected' : ''}`}
                  onClick={() => handlePersonClick(people.id, people.profilePic, people.firstName + ' ' + people.lastName, people.status)}
                />

              ))}
            </div>
          </div>

        </div>
        {selectedPersonId === null ? (

          <div className="msg_card_chat_nimic">
            <span className="msg_nimic">You didn't select any conversation.</span>
          </div>
        )
          :
          (<div className="msg_card_chat">



            <div className="msg_card-header-chat">
              <div className="msg_card-header-chat-item">
                <div className="msg_img_cont">

                  <img src={`${selectedPersonPic}`} className="msg_user_img" alt="imagine_profil" />

                </div>
                <div className="msg_user_info">
                  <span>{`${selectedPersonName}`}</span>
                  <p>{messages[selectedPersonId] ? messages[selectedPersonId].length : 0} Messages</p>
                </div>
                <span className={`msg_online_icon_chat ${selectedPersonStatus === 0 ? 'msg_offline' : ''}`} />
              </div>
            </div>

            <div className="msg_messages-container">
              {messages[selectedPersonId] && messages[selectedPersonId].map((message, index) => (
                <div key={index} className="msg_message" >
                  {/* <div className="img_cont_msg">
                      <img src={message.sender === "me" ? "" : (index % 2 === 1 ? selectedPersonPic : "")} className=" user_img_msg" />
                   </div> */}
                  <div className={message.sender === "me" ? "msg_cotainer_send" : "msg_cotainer"}>

                    {message.text}

                    <span className="msg_time">{message.time}</span>


                  </div>
                </div>
              ))}
            </div>

            <form className="msg_form" onSubmit={handleSubmit}>
              <div className="msg_my-send">
                <input type="text" className="msg_type_msg" placeholder="Type your message..." value={newMessage} onChange={handleChange} />

                <button type="submit" className="msg_send_btn" ><img src={send_msg} alt="send_button_image" /></button>
              </div>

            </form>



          </div>)}
      </div>
    </div>
  );
}
export default ChatBox;

