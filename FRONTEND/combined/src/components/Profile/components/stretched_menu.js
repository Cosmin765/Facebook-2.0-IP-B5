import './stretched_menu.css';
import React from "react";
import icon from './icons/Vectorhome.svg';
import icon2 from './icons/Groupprofile.svg';
import icon3 from './icons/Groupfriends.svg';
import icon4 from './icons/Chat_alt_2_light.svg';
import { Link } from 'react-router-dom';

export default function StretchedMenu() {
    return (
    
          <div className="smenu">
            <h1 className='stitle'>k.</h1>
            <div className="sgrid_wrapper">
            <div className="sgrid_container">
              <div class="sgrid-item">
                <Link className='router_link' to='/home'>
                <img src={icon}></img>
              </Link>
              </div>
              <div className="sgrid-item">
              <Link className='router_link' to='/myprofile'>

                <img src={icon2}></img>
        </Link>
              </div>
              <div className="sgrid-item">
              <Link className='router_link' to='/friends'>

                <img src={icon3}></img>
       </Link>
              </div>
              <div className="sgrid-item">
              <Link className='router_link' to='/mess'>

                <img src={icon4} ></img>
</Link>
              </div>
            </div>
            </div>
          </div>
        );
    }
