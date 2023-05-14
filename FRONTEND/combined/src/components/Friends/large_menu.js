import './large_menu.css';
import React from "react";
import icon from './icons/Vectorhome.svg';
import icon2 from './icons/Groupprofile.svg';
import icon3 from './icons/Groupfriends.svg';
import icon4 from './icons/Chat_alt_2_light.svg';

export default function LargeMenu() {
    return (
    
          <div className="menu">
            <h1>koobecaf.</h1>
            <div className="grid_container">
              <div class="grid-item">
                <img src={icon}></img>
                <span>Home</span>
              </div>
              <div class="grid-item">
                <img src={icon2}></img>
                <span>Profile</span>
              </div>
              <div class="grid-item">
                <img src={icon3}></img>
                <span>Friends</span>
              </div>
              <div class="grid-item">
                <img src={icon4} style={{marginLeft : -5 + 'px' }}></img>
                <span style={{marginLeft : -5 + 'px' }}>Messages</span>
              </div>
    
            </div>
          </div>
        );
    }