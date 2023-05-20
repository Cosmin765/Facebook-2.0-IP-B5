import './main_container.css';
import icon5 from './icons/search.svg';
import icon6 from './icons/notif.svg';
import icon7 from './icons/out.svg';
import StretchedMenu from './stretched_menu';
// import { useNavigate } from 'react-router-dom';  
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getFriends } from '../../util';


export default function MainContainer_Friend_Request() {
  const [activeButton, setActiveButton] = useState('prieteni');
  const [friends, setFriends] = useState([]);

  getFriends().then(people => setFriends(people.map(f => {
    return { id: f.id, name: f.firstName + ' ' + f.lastName, photo: 'https://th.bing.com/th/id/OIP.BKqez6EPbraRw0ZkKv24awHaJP?pid=ImgDet&rs=1', active: f.isLoggedIn };
  })));

  const handleFriendClick = () => {
   
    setActiveButton('prieteni');
    // navigate();
  };

  const handleActiveFriend = () => {
    
    setActiveButton('cereri');
  };

  const handleFriendSugestion= () => {
   
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
        <Link to='/requests'>
        <button className={`mc_button ${activeButton === 'cereri' ? 'active' : ''}`} onClick={handleActiveFriend}>
          Cereri de Prietenie
        </button></Link>
       <Link to='/suggestions'>
        <button className={`mc_button ${activeButton === 'sugestii' ? 'active' : ''}`} onClick={handleFriendSugestion}>
          Sugestii
        </button></Link>
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
