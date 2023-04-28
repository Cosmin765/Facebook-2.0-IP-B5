import React from "react";
import './ChatBox.css';
import icon from './Vectoricon.png';
import icon2 from './Group.png';
import icon3 from './Group (1).png';
import icon4 from './Chat_alt_2_light.png';
import icon5 from './Vector.png';

class ChatBox extends React.Component{
    render() {
      return (
        <div>
          <title>Chat</title>
          {/* Bootstrap */}
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
          {/* Font awesome */}
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" />
          {/* CSS */}
          <link rel="stylesheet" type="text/css" href="ChatBox.css" />
          <div className=" w-100">
            <div className="my-container ">
              <div className="nav">
                <div className="grid-container">
                <div><img src={icon}>
                </img></div>
                <div><img src={icon2} />
            </div>
                <div><img src={icon3}>
                </img> </div>
               <div> <img src={icon4}>
                </img></div>
                <div> <img src={icon5}>
                </img></div>
              </div></div>
              <div className=" chat"><div className="card contacts_card">
                  <div className="card-header">
                    <div className="input-group">
                      <input type="text" placeholder="Search..." name className="form-control search" />
                      <div className="input-group-prepend">
                        <span className="input-group-text search_btn"><i className="fas fa-search" /></span>
                      </div>
                    </div>
                  </div>
                  <div className="card-body contacts_body">
                    <ui className="contacts">
                      <li className="active">
                        <div className="d-flex ">
                          <div className="img_cont">
                            <img src="https://www.mcanhealth.com/wp-content/uploads/2022/03/The-Rock-WWE-Debut-e1646723600689.jpg" className="rounded-circle user_img" />
                            <span className="online_icon" />
                          </div>
                          <div className="user_info">
                            <span>Dwayne Johnson</span>
                            <p>Online</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex ">
                          <div className="img_cont">
                            <img src="https://i.imgflip.com/t2c0u.jpg?a467016" className="rounded-circle user_img" />
                            <span className="online_icon offline" />
                          </div>
                          <div className="user_info">
                            <span>Kevin Boy Hart</span>
                            <p>Left 7 mins ago</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex ">
                          <div className="img_cont">
                            <img src="https://i.imgflip.com/t2c0u.jpg?a467016" className="rounded-circle user_img" />
                            <span className="online_icon offline" />
                          </div>
                          <div className="user_info">
                            <span>Kevin Boy Hart</span>
                            <p>Left 7 mins ago</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex ">
                          <div className="img_cont">
                            <img src="https://i.imgflip.com/t2c0u.jpg?a467016" className="rounded-circle user_img" />
                            <span className="online_icon offline" />
                          </div>
                          <div className="user_info">
                            <span>Kevin Boy Hart</span>
                            <p>Left 7 mins ago</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex bd-highlight">
                          <div className="img_cont">
                            <img src="https://cdn.knd.ro/media/521/2942/1703/20297292/1/snapinsta-app-1080-240867563-1505517406491265-2740515728665044693-n.jpg?width=800" className="rounded-circle user_img" />
                            <span className="online_icon" />
                          </div>
                          <div className="user_info">
                            <span>Dorian Hatzul</span>
                            <p>Online</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex bd-highlight">
                          <div className="img_cont">
                            <img src="https://i.imgflip.com/1etrwu.jpg?a467136" className="rounded-circle user_img" />
                            <span className="online_icon offline" />
                          </div>
                          <div className="user_info">
                            <span>Jeremy British Clarkson</span>
                            <p>Left 30 mins ago</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex bd-highlight">
                          <div className="img_cont">
                            <img src="https://i.imgflip.com/1etrwu.jpg?a467136" className="rounded-circle user_img" />
                            <span className="online_icon offline" />
                          </div>
                          <div className="user_info">
                            <span>Jeremy British Clarkson</span>
                            <p>Left 30 mins ago</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex bd-highlight">
                          <div className="img_cont">
                            <img src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/42/1476977043-wolverine-3-hugh-jackman-shaves-chops.jpg?crop=0.5xw:1xh;center,top&resize=1200:*" className="rounded-circle user_img" />
                            <span className="online_icon offline" />
                          </div>
                          <div className="user_info">
                            <span>Hugh Wolverine Jack</span>
                            <p>Left 50 mins ago</p>
                          </div>
                        </div>
                      </li>
                    </ui>
                  </div>
                 
                </div></div>
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
          </div>
          {/* JQuery */}
        </div>
      );
    }
  };
  export default ChatBox;

