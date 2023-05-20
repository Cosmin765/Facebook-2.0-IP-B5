import '../styles/stretched_menu.css';
import React from "react";
import icon from '../icons/Vectorhome.svg';
import icon2 from '../icons/Groupprofile.svg';
import icon3 from '../icons/Groupfriends.svg';
import icon4 from '../icons/Chat_alt_2_light.svg';
import { Link } from 'react-router-dom';

export default function StretchedMenu() {
  return (

    <div className="feed_smenu">
      <h1 className='feed_stretched'>k.</h1>
      <div className="feed_sgrid_wrapper">
        <div className="feed_sgrid_container">
          <div className="feed_sgrid-item">
            <img src={icon}></img>

          </div>
          <div className="feed_sgrid-item">
            <Link className='router_link' to='/myprofile'>
              <img src={icon2}></img>
            </Link>
          </div>
          <div className="feed_sgrid-item">
            <Link className='router_link' to='/friends'>
              <img src={icon3}></img>
            </Link>
          </div>
          <div className="feed_sgrid-item feed_stretch_last">
            <Link className='router_link' to='/mess'>
              <img src={icon4}></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
