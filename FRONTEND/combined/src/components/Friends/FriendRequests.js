
import './App.css';
import icon5 from './icons/search.svg';
import icon6 from './icons/graph.svg';
import icon7 from './icons/out.svg';
//import LargeMenu from './large_menu';
import MainContainer from './main_container'
import StretchedMenu from './stretched_menu';
import React from 'react';
import MainContainer_Friend_Request from './main_container_friend_request';
import Sugestions_Friends from './Sugestions_Friends';
import { Link } from 'react-router-dom';
function FriendRequests() {
  return (
    <div className="fr_container">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Viga" />
    
        {/* <LargeMenu /> */}
       <StretchedMenu />
      
      <div className="fr_container2">
        <div className="fr_search">
          <div className="fr_search_box">
            <img src={icon5}></img>

          </div>
          <div className="fr_right_icons">
          <Link to='/graph'><img src={icon6}></img></Link>
              <Link to='/login'><img src={icon7}></img></Link>
          </div>
        </div>
        {/* {<MainContainer />} */}
        {<MainContainer_Friend_Request/>}
        {/* {<Sugestions_Friends/>} */}
      </div>
      
    </div>
  );
}

export default FriendRequests;