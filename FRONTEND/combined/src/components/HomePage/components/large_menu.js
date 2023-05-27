import React from "react";
import icon from '../icons/Vectorhome.svg';
import icon2 from '../icons/Groupprofile.svg';
import icon3 from '../icons/Groupfriends.svg';
import icon4 from '../icons/Chat_alt_2_light.svg';
import icon5 from '../icons/graph.png';

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
                <span>
                  <Link className="router_link" to='/home'>
                    Home</Link>
                </span>
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
                <span>
                <Link className="router_link" to='/friends'>
                  Friends
                  </Link>
                  </span>
              </div>
              <div className="feed_grid-item feed_last">
                <img src={icon4}></img>
                <span><Link className="router_link" to='/mess'>
                  Messages
                  </Link></span>
              </div>

              <div className="feed_grid-item feed_last">
                <img width={35} src={icon5}></img>
                <span><Link className="router_link" to='/graph'>
                  Friendship graph
                  </Link></span>
              </div>
    
            </div>
          </div>
        );
    }
