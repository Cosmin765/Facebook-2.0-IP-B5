import './main_container.css';
import icon5 from './icons/search.svg';
import icon6 from './icons/notif.svg';
import icon7 from './icons/out.svg';
import StretchedMenu from './stretched_menu';
// import { useNavigate } from 'react-router-dom';  
import React, { useState } from 'react';
const SERVER_ADDRESS = 'http://localhost:8084';
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

async function getPeople() {
  const url = new URL(SERVER_ADDRESS + '/friends');
  const user = await getUser();
  url.searchParams.append('userId', user.id)
  return await getData(url, 'GET');
}

export default function MainContainer_Friend_Request() {
  const [activeButton, setActiveButton] = useState('prieteni');
  const [friends, setFriends] = useState([]);

  getPeople().then(people => setFriends(people.map(f => {
    return { id: f.id, name: f.firstName + ' ' + f.lastName, photo: 'https://th.bing.com/th/id/OIP.BKqez6EPbraRw0ZkKv24awHaJP?pid=ImgDet&rs=1', active: f.isLoggedIn };
  })));



  const handleFriendClick = () => {
    alert('Clicked on Prieteni');
    setActiveButton('prieteni');
    // navigate();
  };

  const handleActiveFriend = () => {
    alert('Clicked on Prieteni Activi');
    setActiveButton('cereri');
  };

  const handleFriendSugestion = () => {
    alert('Clicked on Sugestii');
    setActiveButton('sugestii');
  };

  return (
    <div className="mc_container">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Viga" />

      <div className="mc_buttons">
        <button className={`mc_button ${activeButton === 'prieteni' ? 'active' : ''}`} onClick={handleFriendClick}>
          Prieteni
        </button>
        <button className={`mc_button ${activeButton === 'cereri' ? 'active' : ''}`} onClick={handleActiveFriend}>
          Cereri de Prietenie
        </button>
        <button className={`mc_button ${activeButton === 'sugestii' ? 'active' : ''}`} onClick={handleFriendSugestion}>
          Sugestii
        </button>
      </div>

      <div className="mc_content">
        {friends.map(friend => (
          <div key={friend.id} className="mc_box">
            <img src={friend.photo} alt={friend.name} className="mc_photo" />
            <div className="mc_name">{friend.name}</div>
            {friend.active ? <div className="green-dot"></div> : <div className="red-dot"></div>}
          </div>
        ))}
      </div>
    </div>
  );
}
