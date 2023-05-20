import './main_container.css';
import icon5 from './icons/search.svg';
import icon6 from './icons/notif.svg';
import icon7 from './icons/out.svg';
import StretchedMenu from './stretched_menu';
// import { useNavigate } from 'react-router-dom';  
import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getData, getFriendRequests } from '../../util';
const SERVER_ADDRESS = 'http://localhost:8084';
let variable = false;


export default function MainContainer_Friend_Request() {
  const [activeButton, setActiveButton] = useState('cereri');
  const [friends, setFriends] = useState([]);
  const [removingFriendId, setRemovingFriendId] = useState(null);

  useEffect(() => {
    getFriendRequests().then(friend => {
      const filtered = friend.filter(f => f.status === 'pending').map(f => {
        return { id: f.id, name: f.sender.firstName + ' ' + f.sender.lastName, photo: 'https://th.bing.com/th/id/OIP.BKqez6EPbraRw0ZkKv24awHaJP?pid=ImgDet&rs=1' };
      });
      console.log(filtered);
      setFriends(filtered);
    });
  }, []);

  async function updateFriendRequest(friendRequestid, status) {
    await getData(SERVER_ADDRESS+`/friendRequest?id=${friendRequestid}&status=${status}`,'POST');
  }

  const handleAcceptRequest = (friendId,status) => {

    setRemovingFriendId(friendId);
    setTimeout(() => {
      const updatedFriends = friends.filter(friend => friend.id !== friendId);
      setFriends(updatedFriends);
      setRemovingFriendId(null);
    }, 500);

    updateFriendRequest(friendId,status);

  }

  

  const handleFriendClick = () => {

    setActiveButton('prieteni');
    // navigate();
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
        <button className={`mc_button ${activeButton === 'cereri' ? 'active' : ''}`} onClick={handleActiveFriend}>
          Cereri de Prietenie
        </button>
        <Link to='/suggestions'>
          <button className={`mc_button ${activeButton === 'sugestii' ? 'active' : ''}`} onClick={handleFriendSugestion}>
            Sugestii
          </button></Link>
      </div>

      <div className="mc_content">
        {friends.map(friend => (
          <div
            key={friend.id}
            className={`mc_box  ${removingFriendId === friend.id ? "mc_remove" : ''}`}
          >
            <img src={friend.photo} alt={friend.name} className="mc_photo" />
            <div className="mc_name">{friend.name}</div>
            <div className='mc_request_buttons'>
              <button className="mc_add_friend_button2" onClick={() => handleAcceptRequest(friend.id,"accepted")}>Accept Request</button>
              <button className="mc_add_friend_button2" onClick={() => handleAcceptRequest(friend.id,"rejected")}>Delete Request</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
