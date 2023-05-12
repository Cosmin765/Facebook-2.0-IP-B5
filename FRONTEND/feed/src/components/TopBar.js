import React from "react";
import icon5 from '../icons/search.svg';
import icon6 from '../icons/notif.svg';
import icon7 from '../icons/out.svg';

import '../styles/topBar.css'

export default function TopBar({notifications, showNotifications}) {
    return (
        <div className="container">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Viga" />
    
            <div className="search">
                <div className="search_box">
                    <img src={icon5}></img>
                </div>
                <div className="right_icons">
                    {/* notificari */}
                    <img src={icon6} onClick={notifications} className="notificationsIcon"></img>
                    <img src={icon7}></img>
                </div>
            </div>
      </div>
    );
}