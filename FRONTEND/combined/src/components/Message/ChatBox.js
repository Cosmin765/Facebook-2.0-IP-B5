import React, { useState, useEffect } from "react";
import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";
import './ChatBox.css';
import { useRef } from "react";

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
    return socket;
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
async function getMessages(otherId){
  const user = await getUser();
  const url = new URL(CONVERSATIONS_ADDRESS + `/api/conversations/findPair/${user.id}/${otherId}`);
  const conversation =  await getData(url, 'GET');
  const messUrl = new URL(CONVERSATIONS_ADDRESS  + `/api/messages/conv/messages/?id=${conversation.id}&count=3000&cursor=0`);
  return await getData(messUrl,'POST');

}
async function convertMess(messages)
{
  const user = await getUser();
  const newMessages = messages.map(message => {
    const newSender = (user.id === message.userId ? "me" : "other" );
  console.log(message);
    const newMessageObj = { text: message.content, time: message.createdAt[3]+":"+message.createdAt[4], sender: newSender, date: (message.createdAt[2]<10?`0${message.createdAt[2]}`:`${message.createdAt[2]}`)+"."+(message.createdAt[1]<10?`0${message.createdAt[1]}`:`${message.createdAt[1]}`)+"."+message.createdAt[0]};
    return newMessageObj;
  })
  return newMessages;
}


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
  const [loaded, setLoaded] = useState(false); 

 const messageContainerRef = useRef(null);
   

  const handleChangeSearch = (event) => {
    setSearchName(event.target.value);
  };

  const [people, setPeople] = useState([]);
  useEffect(()=>{
  if(!people.length) {
    getPeople().then(data => {
      setPeople(data.map(p => {
        p.profilePic = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXIzB_kc5Nif4Z1-HFgBglche-F55frSnLj9BTUY3ewg&s`;
        return p;
      }));
    });
  }
},[]);
const [sockets, setSockets] = useState({});

function connectSocket(conversationId) {
  if (sockets[conversationId]) {
    return; // socket already exists for this conversation
  }

  sockets[conversationId] = connect(conversationId, handleReceiveMessage)
   
}

  useEffect(() => {
    getPeople().then(data => {
      const tempMessages = {};
      data.forEach(p => {
        getConversation(p.id).then(conversation => { 
          connectSocket(conversation.id);
        });
        getMessages(p.id).then(messages => {
          convertMess(messages).then(newMessages => {
            tempMessages[p.id] = newMessages;
            if (Object.keys(tempMessages).length === data.length) {
              setMessages(tempMessages);
              setLoaded(true);
            }
            
          }
          );

        });
      })
    });
  }, []);
  
  function handleReceiveMessage(message) {
    const newMessageObj = { text: message.content, time: new Date().toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' }), sender: "other" };
    setMessages(prevMessages => {
      const newMessages = { ...prevMessages };
      if (newMessages[message.userId]) {
        newMessages[message.userId] = [...newMessages[message.userId], newMessageObj];
      } else {
        newMessages[message.userId] = [newMessageObj];
      }
      
      return newMessages;
    });
    const messageContainer = document.querySelector('.msg_messages-container');
    requestAnimationFrame(() => {
      messageContainer.scrollTop = messageContainer.scrollHeight;
    });  
        // const lastCheckedTime = conv.lastChecked ? getSecondsFromTimeString(conv.lastChecked) : 0;
        //const lastMessageTime = messages[personId]?.length > 0 ? getSecondsFromTimeString(messages[personId][messages[personId].length - 1].time) : 0;
        //const isUnread = lastCheckedTime < lastMessageTime;
  }

  if(selectedPersonId !== null) {
    getConversation(selectedPersonId).then(conversation => {
      
        connectSocket(conversation.id);
    
        // socket.close();
        // socket = null;
      
    });
  }
 const handleSubmit = async (event) => {
    event.preventDefault();
    if (newMessage.trim() !== "") {
      const newSender = "me";
      newMessageObj = { text: newMessage.trim(), time: new Date().toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' }), sender: newSender };
      setMessages(prevMessages => {
        const newMessages = { ...prevMessages };
        if (newMessages[selectedPersonId]) {
          newMessages[selectedPersonId] = [...newMessages[selectedPersonId], newMessageObj];
        } else {
          newMessages[selectedPersonId] = [newMessageObj];
        }
        return newMessages;
      });

      setNewMessage("");
      const messageContainer = document.querySelector('.msg_messages-container');
      requestAnimationFrame(() => {
        messageContainer.scrollTop = messageContainer.scrollHeight;
      });  
      const user = await getUser();
      const conversation = await getConversation(selectedPersonId);
      sendMessage(user.id, conversation.id, newMessage);

    }
  };
  const handleKeyDown = (event) => {

    people.forEach(conv => {
      if (searchName.toLowerCase() === (conv.firstName+" "+conv.lastName).toLowerCase()) {
        convFound = 1;
        result = people.find((conv) => (conv.firstName+" "+conv.lastName).toLowerCase() === searchName.toLowerCase());
      }
    });


    if (convFound === 1) {
      handlePersonClick(result.id, result.profilePic, result.firstName + ' ' + result.lastName, result.status);
      setSearchName("");
      convFound = 0;
    }
    else 
     
        window.alert("You can't have a conversation with someone who is not your friend.");
    
    event.target.value = '';
  };
  //const [unread,setUnread] =useState({});

  const handleChange = (event) => {
    setNewMessage(event.target.value);
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
    setTimeout(()=>{
    const messageContainer = document.querySelector('.msg_messages-container');
    requestAnimationFrame(() => {
      messageContainer.scrollTop = messageContainer.scrollHeight;
    });  
  },1);
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
              {loaded===true && people.map((people) => (
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
                  onClick={() => handlePersonClick(people.id, people.profilePic, people.firstName + ' ' + people.lastName, people.isLoggedIn)}
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

            <div className="msg_messages-container" ref={messageContainerRef}>
              {messages[selectedPersonId] && messages[selectedPersonId].map((message, index) => {
               const messageDate=message.date;
            // Get the previous message's date and time
              const previousMessage = messages[selectedPersonId][index - 1];
              const previousDate = previousMessage ? previousMessage.date : null;
            
              // Determine if the current message has a different date than the previous message
              const displayDate = messageDate !== previousDate;
            
             return (
                <div key={index} className="msg_message" >
                    {displayDate && <div className="message-date">{messageDate}</div>}
                  <div className={message.sender === "me" ? "msg_cotainer_send" : "msg_cotainer"}>

                    {message.text}

                    <span className={message.sender === "me" ? "msg_time_me" : "msg_time"}>{message.time}</span>


                  </div>
                </div>
              )})}
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

