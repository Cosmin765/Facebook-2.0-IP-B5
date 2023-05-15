import React from "react";
import icon from '../icons/Vectorhome.svg';
import icon2 from '../icons/Groupprofile.svg';
import icon3 from '../icons/Groupfriends.svg';
import icon4 from '../icons/Chat_alt_2_light.svg';

// import '../styles/large_menu.css';
import '../styles/leftMenu.css'
import { Link } from "react-router-dom";

export default function LargeMenu() {
    return (
          <div className="feed_menu">
            <h1 className="feed_large">koobecaf.</h1>
            <div className="feed_grid_container">
              <div className="feed_grid-item">
                <img src={icon}></img>
                <span>Home</span>
              </div>
              <div className="feed_grid-item">
                <img src={icon2}></img>
                <span>
                 <Link className="router_link" to='/myprofile'>
                  Profile</Link>
                  </span>
              </div>
              <div className="feed_grid-item">
                <img src={icon3}></img>
                <span>Friends</span>
              </div>
              <div className="feed_grid-item feed_last">
                <img src={icon4}></img>
                <span>Messages</span>
              </div>
    
            </div>
          </div>
        );
    }
