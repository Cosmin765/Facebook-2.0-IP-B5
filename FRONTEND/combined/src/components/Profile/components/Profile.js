import React, { useState } from "react";
import "./Profile.css"
import "./Feed.css"
import EditProfile from "./EditProfile";
import Popup from "./Popup";
import StretchedMenu from './stretched_menu.js';
import likeBtn from './icons/like.svg'
import commentBtn from './icons/comment.svg'
import shareBtn from './icons/share.svg'
import editButton from './icons/edit-pen.svg'
import icon5 from './icons/search.svg';
import icon6 from './icons/graph.svg';
import icon7 from './icons/out.svg';

import Feed from '../../HomePage/components/homepageComponents/Feed';
import { Link } from "react-router-dom";

const commentp2 = [
  {account:{name:'Andrew Tate', picture: require('./img/dwayne-johnson.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."},
  {account:{name:'Andrew Tate', picture: require('./img/dwayne-johnson.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."},
  {account:{name:'Andrew Tate', picture: require('./img/dwayne-johnson.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."},
  {account:{name:'Andrew Tate', picture: require('./img/dwayne-johnson.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."},
  {account:{name:'Andrew Tate', picture: require('./img/dwayne-johnson.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."},
  {account:{name:'Andrew Tate', picture: require('./img/dwayne-johnson.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."},
  {account:{name:'Andrew Tate', picture: require('./img/dwayne-johnson.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."},
  {account:{name:'Andrew Tate', picture: require('./img/dwayne-johnson.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."},
  {account:{name:'Andrew Tate', picture: require('./img/dwayne-johnson.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."},
  {account:{name:'Andrew Tate', picture: require('./img/dwayne-johnson.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."},
  {account:{name:'Andrew Tate', picture: require('./img/dwayne-johnson.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."},
  {account:{name:'Andrew Tate', picture: require('./img/dwayne-johnson.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."},
  {account:{name:'Andrew Tate', picture: require('./img/dwayne-johnson.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."},
  {account:{name:'Andrew Tate', picture: require('./img/dwayne-johnson.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."},
  {account:{name:'Andrew Tate', picture: require('./img/dwayne-johnson.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."},
  {account:{name:'Andrew Tate', picture: require('./img/dwayne-johnson.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."},
  {account:{name:'Andrew Tate', picture: require('./img/dwayne-johnson.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."},
  {account:{name:'Andrew Tate', picture: require('./img/dwayne-johnson.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."},
  {account:{name:'Andrew Tate', picture: require('./img/dwayne-johnson.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."},
  {account:{name:'Andrew Tate', picture: require('./img/dwayne-johnson.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."},
  {account:{name:'Andrew Tate', picture: require('./img/dwayne-johnson.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."},
  {account:{name:'Andrew Tate', picture: require('./img/dwayne-johnson.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."}
];

const posts = [
  { account: { name: 'Dwayne Johnson', picture: require('./img/dwayne-johnson.jpg'), uploadDate: '02.01.2023' }, text: 'Made my historic rap debut (thankfully I didn’t suck😅) Huge shout to all the hip hop & music fans for your HYPE reactions that are straight f*cking fire 🔥🔥🔥🙏🏾👊🏾', picture: null, video: 'https://www.youtube.com/embed/E9T78bT26sk', comments: commentp2, link: null},
  { account: { name: 'Dwayne Johnson', picture: require('./img/dwayne-johnson.jpg'), uploadDate: '30.02.2023' }, text: 'A lot of blood, sweat, and tears have gone into this career of mine.', picture: require('./img/kevin-hart-feed.jpg'), video: null, comments: commentp2, link: null },
  { account: { name: 'Dwayne Johnson', picture: require('./img/dwayne-johnson.jpg'), uploadDate: '21.01.2023' }, text: 'The Matrix may have imprisoned me, But I am free inside The Real World.', picture: require('./img/free-tate.jpg'), video: null, comments: commentp2, link: null },
  { account: { name: 'Dwayne Johnson', picture: require('./img/dwayne-johnson.jpg'), uploadDate: '24.03.2023' }, text: '@ryanReynolds is my best friend :3', picture: null, video: null, comments: commentp2, link: null },
  { account: { name: 'Dwayne Johnson', picture: require('./img/dwayne-johnson.jpg'), uploadDate: '14.03.2023' }, text: 'I’m not homophobic, I enjoy watching lesbians on the internet.', picture: require('./img/jk.jpg'), video: null, comments: commentp2, link: null }
];

const myFriends = [
  {account: { name: 'Dwayne Johnson', picture: require('./img/dwayne-johnson.jpg'), uploadDate: '02.01.2023' }},
  {account: { name: 'Dwayne Johnson', picture: require('./img/dwayne-johnson.jpg'), uploadDate: '02.01.2023' }},
  {account: { name: 'Dwayne Johnson', picture: require('./img/dwayne-johnson.jpg'), uploadDate: '02.01.2023' }},
  {account: { name: 'Dwayne Johnson', picture: require('./img/dwayne-johnson.jpg'), uploadDate: '02.01.2023' }}
];

function Feed_account() {
  const feedAccounts = posts.map(post =>
    <Card account={post.account} text={post.text} pictures={post.picture} video={post.video} />
  );
  return (
    <div className='feed'>
      {feedAccounts}
    </div>
  );
}

function Card({ account: { name, picture, uploadDate }, text, pictures, video }) {

  return (
    <div className='card'>
      <div className='topCard'>
        <Account name={name} picture={picture} uploadDate={uploadDate} />
        <div className='options'>
          {/* <p>dsfsdf</p> */}
        </div>
      </div>

      <div className='postBody'>
        {text.length > 0 &&
          <p>{text}</p>
        }

        {pictures != undefined &&
          <img src={pictures} alt={name} />
        }

        {video != undefined &&

          <div>
            <iframe id="ytplayer" type="text/html" src={video} frameborder="0"></iframe>
          </div>
        }

      </div>

      <div className='bottomCard'>
        <div className='likes'>
          <img src={likeBtn} width='20px' alt='like button' />
          <p>69</p>
        </div>

        <div className='comments'>
          <img src={commentBtn} width='20px' alt='like button' />
          <p>69</p>
        </div>

        <div className='shares'>
          <img src={shareBtn} width='20px' alt='like button' />
          <p>69</p>
        </div>
      </div>
    </div>
  );
}

function Account({ name, picture, uploadDate }) {
  return (
    <div className='account'>
      <img src={picture} alt={name} />
      <div className='accountDetails'>
        <p className='name'>{name}</p>
        <p className='date'>{uploadDate}</p>
      </div>
    </div>
  );
}

function Description({ descriptionText, setDescriptionText }) {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className="profile_left-content-profile">
      <div class="profile_profile-info">
        <h2 className="profile_descriptionTitle">Description</h2>
        <p>{descriptionText}</p>
      </div>
      <Popup
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
        descriptionText={descriptionText}
        setDescriptionText={setDescriptionText}
      >
        <h3>Edit description</h3>
      </Popup>
    </div>
  );
}

function EditProfileFCT({ nameText, setNameText, imageUrl, setImageUrl }) {
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);

  return (
    <div className="profile_buttons-name">
      <div class="profile_profile-info">
        <h2 className="profile_name">{nameText}</h2>
      </div>
      <button className="profile_add-friend"> Add Friend </button>
      <EditProfile
        isOpen={isEditProfileOpen}
        onClose={() => setIsEditProfileOpen(false)}
        nameText={nameText}
        setNameText={setNameText}
        imageUrl={imageUrl}
        setImageUrl={setImageUrl}
      >
      </EditProfile>
    </div>
  );
}

const Profile = () => {
  const [name, setName] = useState("Your name");
  const [imageUrl, setImageUrl] = useState(null);

  const [modal, setModal] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showFriends, setShowFriends] = useState(false);

  const togglePosts = () => {
    setModal(!modal);
    setShowComments(!showComments);
  }

  const toggleFriends = () => {
    setModal(!modal);
    setShowComments(false);
    setShowFriends(!showFriends);
}



  const handleNameUpdate = (newName) => {
    setName(newName);
  };

  const handleImageUpdate = (newImageUrl) => {
    setImageUrl(newImageUrl);
  };

  return (
    <>
      <div className={modal ? 'feed_modal' : null}></div>
    <div className='profile_container-profile'>
      <div className="profile_left-profile">
        <StretchedMenu />
      </div>
      <div className="profile_right-profile">
        <div className="profile_top-bar">
          <div className="profile_search-profile">
            <div className="profile_search_box-profile">
              <img src={icon5}></img>
            </div>
            <div className="profile_right_icons-profile">
              <Link to='/graph'><img src={icon6}></img></Link>
              <Link to='/login'><img src={icon7}></img></Link>
            </div>
          </div>
        </div>

        <div className="profile_content-profile">
          <div className="profile_upper-profile">
            <div className="profile_colored-cover">
              <img id="profile-photo" className="profile_profile-photo" src={imageUrl} />
            </div>
            <div className="profile_white-cover">
              <div className="profile_photo-name-profile">
                <EditProfileFCT nameText={name} setNameText={handleNameUpdate} setImageUrl={handleImageUpdate} />
              </div>
            </div>
          </div>
          <div className="profile_bottom-profile">
            <Description descriptionText="This is my description." />

            <div className="profile_right-content-profile">
              {/* <Feed_account /> */}
              <Feed posts={posts} togglePosts={togglePosts} showComments={showComments} showFriends={showFriends} toggleFriends={toggleFriends} friends={myFriends} useCase={'profile'} />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Profile
