import './main_container.css';
import icon5 from './icons/search.svg';
import icon6 from './icons/notif.svg';
import icon7 from './icons/out.svg';
import StretchedMenu from './stretched_menu';
// import { useNavigate } from 'react-router-dom';  
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MainContainer_Friend_Request() {
    const [activeButton, setActiveButton] = useState('cereri');
  const friends = [
    { id: 1, name: 'John Wick', photo: 'https://cdn.vox-cdn.com/thumbor/mfZr4TZ1MD-u_tsUZbiFQn9cjxo=/0x0:6000x3650/1400x1400/filters:focal(3000x1825:3001x1826)/cdn.vox-cdn.com/uploads/chorus_asset/file/24510842/john_wick_chapter_4_JW4_Unit_211027_00134_R2_rgb.jpeg'},
    { id: 2, name: 'John Wick', photo: 'https://cdn.vox-cdn.com/thumbor/mfZr4TZ1MD-u_tsUZbiFQn9cjxo=/0x0:6000x3650/1400x1400/filters:focal(3000x1825:3001x1826)/cdn.vox-cdn.com/uploads/chorus_asset/file/24510842/john_wick_chapter_4_JW4_Unit_211027_00134_R2_rgb.jpeg'},
    { id: 3, name: 'John Wick', photo: 'https://cdn.vox-cdn.com/thumbor/mfZr4TZ1MD-u_tsUZbiFQn9cjxo=/0x0:6000x3650/1400x1400/filters:focal(3000x1825:3001x1826)/cdn.vox-cdn.com/uploads/chorus_asset/file/24510842/john_wick_chapter_4_JW4_Unit_211027_00134_R2_rgb.jpeg'},
    { id: 4, name: 'John Wick', photo: 'https://th.bing.com/th/id/OIP.BKqez6EPbraRw0ZkKv24awHaJP?pid=ImgDet&rs=1'}
  ];

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
        <div key={friend.id} className="mc_box">
          <img src={friend.photo} alt={friend.name} className="mc_photo" />
          <div className="mc_name">{friend.name}</div>
          <button className="mc_add_friend_button2">Accept Request</button>
          <button className="mc_add_friend_button2">Delete Request</button>
        </div>
      ))}
      </div>
    </div>
  );
}
