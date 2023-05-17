import './main_container.css';
import icon5 from './icons/search.svg';
import icon6 from './icons/notif.svg';
import icon7 from './icons/out.svg';
import StretchedMenu from './stretched_menu';
// import { useNavigate } from 'react-router-dom';  
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

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

async function getSuggestions() {
  const url = new URL(SERVER_ADDRESS + '/suggestions?count=10');
  return await getData(url, 'GET');
}

async function addFriend(idReceiver){
  await getData(SERVER_ADDRESS+`/addFriendRequest?id=${idReceiver}&status=pending`,'POST');
}

export default function Sugestions_Friends() {


  const [requestSent, setRequestSent] = useState([]);

  const handleAddFriend = (friendId) => {
    // Make API call to send friend request
    addFriend(friendId);

    setRequestSent({
      ...requestSent,
      [friendId]: true
    }
    )
    setTimeout(() => {
      handleAcceptRequest(friendId);
    }, 500);
  };

  const [activeButton, setActiveButton] = useState('sugestii');
  // const [friends, setFriends] = useState([
  //   { id: 1, name: 'John Wick', photo: 'https://cdn.vox-cdn.com/thumbor/mfZr4TZ1MD-u_tsUZbiFQn9cjxo=/0x0:6000x3650/1400x1400/filters:focal(3000x1825:3001x1826)/cdn.vox-cdn.com/uploads/chorus_asset/file/24510842/john_wick_chapter_4_JW4_Unit_211027_00134_R2_rgb.jpeg', active: 1 },
  //   { id: 2, name: 'John Wick', photo: 'https://cdn.vox-cdn.com/thumbor/mfZr4TZ1MD-u_tsUZbiFQn9cjxo=/0x0:6000x3650/1400x1400/filters:focal(3000x1825:3001x1826)/cdn.vox-cdn.com/uploads/chorus_asset/file/24510842/john_wick_chapter_4_JW4_Unit_211027_00134_R2_rgb.jpeg', active: 0 },
  //   { id: 3, name: 'John Wick', photo: 'https://cdn.vox-cdn.com/thumbor/mfZr4TZ1MD-u_tsUZbiFQn9cjxo=/0x0:6000x3650/1400x1400/filters:focal(3000x1825:3001x1826)/cdn.vox-cdn.com/uploads/chorus_asset/file/24510842/john_wick_chapter_4_JW4_Unit_211027_00134_R2_rgb.jpeg', active: 0 },
  //   { id: 4, name: 'John Wick', photo: 'https://th.bing.com/th/id/OIP.BKqez6EPbraRw0ZkKv24awHaJP?pid=ImgDet&rs=1', active: 1 }
  // ]);

  const [friends, setFriends] = useState([]);
  const [removingFriendId, setRemovingFriendId] = useState(null);


  useEffect(() => {
    getSuggestions().then(suggestions => setFriends(suggestions.map(f => {
      return { id: f.id, name: f.firstName + ' ' + f.lastName, photo: 'https://cdn.vox-cdn.com/thumbor/mfZr4TZ1MD-u_tsUZbiFQn9cjxo=/0x0:6000x3650/1400x1400/filters:focal(3000x1825:3001x1826)/cdn.vox-cdn.com/uploads/chorus_asset/file/24510842/john_wick_chapter_4_JW4_Unit_211027_00134_R2_rgb.jpeg', active: 0 }
    })));
  }, []);


  const handleAcceptRequest = (friendId) => {

    setRemovingFriendId(friendId);
    setTimeout(() => {
      const updatedFriends = friends.filter(friend => friend.id !== friendId);
      setFriends(updatedFriends);
      setRemovingFriendId(null);
    }, 500);

  }
  const handleFriendClick = () => {

    setActiveButton('prieteni');
  };

  const handleActiveFriend = () => {

    setActiveButton('cereri');
  };

  const handleFriendSugestion = () => {

    setActiveButton('sugestii');
  };

  return (
    <div className="mc_container">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Viga" />

      <div className="mc_buttons">
        <Link to='/friends'>
          <button className={`mc_button ${activeButton === 'prieteni' ? 'active' : ''}`} onClick={handleFriendClick}>
            Prieteni
          </button></Link>
        <Link to='/requests'>
          <button className={`mc_button ${activeButton === 'cereri' ? 'active' : ''}`} onClick={handleActiveFriend}>
            Cereri de Prietenie
          </button></Link>
        <button className={`mc_button ${activeButton === 'sugestii' ? 'active' : ''}`} onClick={handleFriendSugestion}>
          Sugestii
        </button>



      </div>

      <div className="mc_content">
        {friends.map(friend => (
          <div key={friend.id}
            className={`mc_box  ${removingFriendId === friend.id ? "mc_remove" : ''}`}
          >
            <img src={friend.photo} alt={friend.name} className="mc_photo" />
            <div className="mc_name">{friend.name}</div>
            <button className={`mc_add_friend_button ${requestSent[friend.id] === true ? 'mc_request' : ""}`} onClick={() => handleAddFriend(friend.id)}>
              {requestSent[friend.id] === true ? 'Request Sent' : 'Add Friend'}

            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
