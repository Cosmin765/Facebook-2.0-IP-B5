import React from "react";
import './ChatBox.css';
import icon from './Vectoricon.png';
import icon2 from './Group.png';
import icon3 from './Group (1).png';
import icon4 from './Chat_alt_2_light.png';
import search from './icons/search.svg';
import StretchedMenu from "./stretched_menu";
import PersonTemplate from "./PersonTemplate";

const people = [
  {name: 'Cohman Teodora', lastMessage: 'You: Ce faci ba', status: 'online', profilePic:'https://www.mcanhealth.com/wp-content/uploads/2022/03/The-Rock-WWE-Debut-e1646723600689.jpg'},
  {name: 'Curcudel Teodor', lastMessage: 'Da-mi tema', status: 'offline', profilePic:'https://freewaysocial.com/wp-content/uploads/2020/02/how-to-create-the-perfect-facebook-profile-picture.png'}
];

function ChatBox (){
      return (
        
          <div className="my-container ">
          <title>Chat</title>
          {/* Bootstrap */}
        
        
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Viga" />
    
            
              <StretchedMenu />
              <div className="chats-container ">
              
                <div className="card">
                  <div className="card-header">
                    <div className="my-search">
                      <input type="text" placeholder="Search..." name="search" />
                        <span className="search_btn"><img src={search} /></span>
                    </div>
                  
                  </div>
                  <div className="contacts_body">
                    <div className="contacts">
                      {people.map((people) => (
                        <PersonTemplate
                        key={people.name}
                        name={people.name}
                        profilePic={people.profilePic}
                        lastMessage={people.lastMessage}
                        status={people.status}
                        />

                      ))}
                    </div>
                  </div>
                 
                </div>
              <div className="chat">
                <div className="card">
                  <div className="card-header my-heeead msg_head">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img src="https://www.mcanhealth.com/wp-content/uploads/2022/03/The-Rock-WWE-Debut-e1646723600689.jpg" className="rounded-circle user_img" />
                        <span className="online_icon" />
                      </div>
                      <div className="user_info">
                        <span>Dwayne Johnson</span>
                        <p>1767 Messages</p>
                      </div>
                      <div className="video_cam">
                        <span><i className="fas fa-video" /></span>
                        <span><i className="fas fa-phone" /></span>
                      </div>
                    </div>
                    <span id="action_menu_btn"><i className="fas fa-ellipsis-v" /></span>
                    <div className="action_menu">
                      <ul>
                        <li><i className="fas fa-user-circle" /> View profile</li>
                        <li><i className="fas fa-users" /> Add to close friends</li>
                        <li><i className="fas fa-plus" /> Add to group</li>
                        <li><i className="fas fa-ban" /> Block</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body msg_card_body h-100">
                    <div className="d-flex justify-content-start">
                      <div className="img_cont_msg">
                        <img src="https://www.mcanhealth.com/wp-content/uploads/2022/03/The-Rock-WWE-Debut-e1646723600689.jpg" className="rounded-circle user_img_msg" />
                      </div>
                      <div className="msg_cotainer">
                        Hey, Tate! Still in Prison?
                        <span className="msg_time">8:40 AM, Today</span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end mb-4">
                      <div className="msg_cotainer_send">
                        How did you get my number? Imma eat you up in the cage, oldy!
                        <span className="msg_time_send">8:55 AM, Today</span>
                      </div>
                      <div className="img_cont_msg">
                        <img src="https://gray-kbjr-prod.cdn.arcpublishing.com/resizer/c6Ph9BpVSdrx24V1LQLZDBOv42w=/800x800/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/gray/QF5DFOSNCRGE7D67FSI5FS7OJY.jpg" className="rounded-circle user_img_msg" />
                      </div>
                    </div>
                    <div className="d-flex justify-content-start mb-4">
                      <div className="img_cont_msg">
                        <img src="https://www.mcanhealth.com/wp-content/uploads/2022/03/The-Rock-WWE-Debut-e1646723600689.jpg" className="rounded-circle user_img_msg" />
                      </div>
                      <div className="msg_cotainer">
                        Nice try, but I don't fight with Bugatti owners! hehe
                        <span className="msg_time">9:00 AM, Today</span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end mb-4">
                      <div className="msg_cotainer_send">
                        Well, what color is your Bugatti? Tourner dans le vide, vide!
                        <span className="msg_time_send">9:05 AM, Today</span>
                      </div>
                      <div className="img_cont_msg">
                        <img src="https://gray-kbjr-prod.cdn.arcpublishing.com/resizer/c6Ph9BpVSdrx24V1LQLZDBOv42w=/800x800/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/gray/QF5DFOSNCRGE7D67FSI5FS7OJY.jpg" className="rounded-circle user_img_msg" />
                      </div>
                    </div>
                    <div className="d-flex justify-content-start mb-4">
                      <div className="img_cont_msg">
                        <img src="https://www.mcanhealth.com/wp-content/uploads/2022/03/The-Rock-WWE-Debut-e1646723600689.jpg" className="rounded-circle user_img_msg" />
                      </div>
                      <div className="msg_cotainer">
                        Shut up dude, just don't, that meme is so old!
                        <span className="msg_time">9:07 AM, Today</span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-start mb-4">
                      <div className="img_cont_msg">
                        <img src="https://www.mcanhealth.com/wp-content/uploads/2022/03/The-Rock-WWE-Debut-e1646723600689.jpg" className="rounded-circle user_img_msg" />
                      </div>
                      <div className="msg_cotainer">
                        Shut up dude, just don't, that meme is so old!
                        <span className="msg_time">9:07 AM, Today</span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-start mb-4">
                      <div className="img_cont_msg">
                        <img src="https://www.mcanhealth.com/wp-content/uploads/2022/03/The-Rock-WWE-Debut-e1646723600689.jpg" className="rounded-circle user_img_msg" />
                      </div>
                      <div className="msg_cotainer">
                        Shut up dude, just don't, that meme is so old!
                        <span className="msg_time">9:07 AM, Today</span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-start mb-4">
                      <div className="img_cont_msg">
                        <img src="https://www.mcanhealth.com/wp-content/uploads/2022/03/The-Rock-WWE-Debut-e1646723600689.jpg" className="rounded-circle user_img_msg" />
                      </div>
                      <div className="msg_cotainer">
                        Shut up dude, just don't, that meme is so old!
                        <span className="msg_time">9:07 AM, Today</span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-start mb-4">
                      <div className="img_cont_msg">
                        <img src="https://www.mcanhealth.com/wp-content/uploads/2022/03/The-Rock-WWE-Debut-e1646723600689.jpg" className="rounded-circle user_img_msg" />
                      </div>
                      <div className="msg_cotainer">
                        Shut up dude, just don't, that meme is so old!
                        <span className="msg_time">9:07 AM, Today</span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end mb-4">
                      <div className="msg_cotainer_send">
                        C'mon! What, are you afraid of me?
                        <span className="msg_time_send">9:10 AM, Today</span>
                      </div>
                      <div className="img_cont_msg">
                        <img src="https://gray-kbjr-prod.cdn.arcpublishing.com/resizer/c6Ph9BpVSdrx24V1LQLZDBOv42w=/800x800/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/gray/QF5DFOSNCRGE7D67FSI5FS7OJY.jpg" className="rounded-circle user_img_msg" />
                      </div>
                    </div>
                    <div className="d-flex justify-content-start mb-4">
                      <div className="img_cont_msg">
                        <img src="https://www.mcanhealth.com/wp-content/uploads/2022/03/The-Rock-WWE-Debut-e1646723600689.jpg" className="rounded-circle user_img_msg" />
                      </div>
                      <div className="msg_cotainer">
                        ... Bye dude, see you when you get out! Remember: don't drop the soap!
                        <span className="msg_time">9:12 AM, Today</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="input-group">
                      <div className="input-group-append">
                        <span className="input-group-text attach_btn"><i className="fas fa-paperclip" /></span>
                      </div>
                      <input name className="form-control type_msg" placeholder="Type your message..." defaultValue={""} />
                      <div className="input-group-append">
                        <span className="input-group-text send_btn"><i className="fas fa-location-arrow" /></span>
                      </div>
                    </div>
                </div>
            </div>
            </div>
          </div>
          {/* JQuery */}
        </div>
      );
    }
  export default ChatBox;

