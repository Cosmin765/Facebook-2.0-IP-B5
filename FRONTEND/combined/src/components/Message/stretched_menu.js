import './stretched_menu.css';
import React from "react";
import icon from './icons/Vectorhome.svg';
import icon2 from './icons/Groupprofile.svg';
import icon3 from './icons/Groupfriends.svg';
import icon4 from './icons/Chat_alt_2_light.svg';
import icon5 from './icons/graph.svg';

import { Link } from 'react-router-dom';

export default function StretchedMenu() {
    return (
    
          <div className="msg_smenu">
            <h1 className="stitle">k.</h1>
            <div className="sgrid_wrapper">
            <div className="sgrid_container">
              <div className="sgrid-item">
                <Link to='/home'>
                <img src={icon} alt="imagine_home"></img>
              </Link>
              </div>
              <div className="sgrid-item">
                <Link to='/myprofile'>
                <img src={icon2} alt="imagine_profil"></img>
        </Link>
              </div>
              <div className="sgrid-item">
               <Link to='/friends'> <img src={icon3} alt="imagine_grup_prieteni"></img>
       </Link>
              </div>
              <div className="sgrid-item">
                <img src={icon4} alt="imagine_chat"></img>

              </div>
              <div className="sgrid-item">
               <Link to='/graph'> <img src={icon5} alt="imagine_graf_prieteni"></img>
       </Link>
              </div>
            </div>
            </div>
          </div>
        );
    }
