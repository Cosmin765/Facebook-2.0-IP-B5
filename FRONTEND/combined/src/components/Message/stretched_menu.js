import './stretched_menu.css';
import React from "react";
import icon from './icons/Vectorhome.svg';
import icon2 from './icons/Groupprofile.svg';
import icon3 from './icons/Groupfriends.svg';
import icon4 from './icons/Chat_alt_2_light.svg';
import { Link } from 'react-router-dom';

export default function StretchedMenu() {
    return (
    
          <div className="msg_smenu">
            <h1 className="msg_h1">k.</h1>
            <div className="msg_sgrid_wrapper">
            <div className="msg_sgrid_container">
              <div className="msg_sgrid-item">
                <img src={icon} alt="imagine_home"></img>
              
              </div>
              <div className="msg_sgrid-item">
                <img src={icon2} alt="imagine_profil"></img>
        
              </div>
              <div className="msg_sgrid-item">
               <Link to='/friends'> <img src={icon3} alt="imagine_grup_prieteni"></img>
       </Link>
              </div>
              <div className="msg_sgrid-item">
                <img src={icon4} alt="imagine_chat"></img>

              </div>
            </div>
            </div>
          </div>
        );
    }
