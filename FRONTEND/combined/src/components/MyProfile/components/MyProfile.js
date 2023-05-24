
import React, { useState, useEffect } from "react";
import "./MyProfile.css"
import "./Feed.css"
import EditProfile from "./EditProfile";
import Popup from "./Popup";
import StretchedMenu from './stretched_menu.js';
import likeBtn from './icons/like.svg'
import commentBtn from './icons/comment.svg'
import shareBtn from './icons/share.svg'
import editButton from './icons/edit-pen.svg'
import icon5 from './icons/search.svg';
import icon6 from './icons/notif.svg';
import icon7 from './icons/out.svg';
import { getUser, getUserPosts, getImage } from "../../../util";
import Feed from '../../HomePage/components/homepageComponents/Feed';

const commentp2 = [
  { account: { name: 'Andrew Tate', picture: require('./img/dwayne-johnson.jpg'), uploadDate: '21.01.2023' }, comment: "The Matrix may have imprisoned me, But I am free inside The Real World." },
  { account: { name: 'Andrew Tate', picture: require('./img/dwayne-johnson.jpg'), uploadDate: '21.01.2023' }, comment: "The Matrix may have imprisoned me, But I am free inside The Real World." },
  { account: { name: 'Andrew Tate', picture: require('./img/dwayne-johnson.jpg'), uploadDate: '21.01.2023' }, comment: "The Matrix may have imprisoned me, But I am free inside The Real World." },
  { account: { name: 'Andrew Tate', picture: require('./img/dwayne-johnson.jpg'), uploadDate: '21.01.2023' }, comment: "The Matrix may have imprisoned me, But I am free inside The Real World." },
  { account: { name: 'Andrew Tate', picture: require('./img/dwayne-johnson.jpg'), uploadDate: '21.01.2023' }, comment: "The Matrix may have imprisoned me, But I am free inside The Real World." },
  { account: { name: 'Andrew Tate', picture: require('./img/dwayne-johnson.jpg'), uploadDate: '21.01.2023' }, comment: "The Matrix may have imprisoned me, But I am free inside The Real World." },
  { account: { name: 'Andrew Tate', picture: require('./img/dwayne-johnson.jpg'), uploadDate: '21.01.2023' }, comment: "The Matrix may have imprisoned me, But I am free inside The Real World." },
  { account: { name: 'Andrew Tate', picture: require('./img/dwayne-johnson.jpg'), uploadDate: '21.01.2023' }, comment: "The Matrix may have imprisoned me, But I am free inside The Real World." },
  { account: { name: 'Andrew Tate', picture: require('./img/dwayne-johnson.jpg'), uploadDate: '21.01.2023' }, comment: "The Matrix may have imprisoned me, But I am free inside The Real World." },
  { account: { name: 'Andrew Tate', picture: require('./img/dwayne-johnson.jpg'), uploadDate: '21.01.2023' }, comment: "The Matrix may have imprisoned me, But I am free inside The Real World." },
  { account: { name: 'Andrew Tate', picture: require('./img/dwayne-johnson.jpg'), uploadDate: '21.01.2023' }, comment: "The Matrix may have imprisoned me, But I am free inside The Real World." },
  { account: { name: 'Andrew Tate', picture: require('./img/dwayne-johnson.jpg'), uploadDate: '21.01.2023' }, comment: "The Matrix may have imprisoned me, But I am free inside The Real World." },
  { account: { name: 'Andrew Tate', picture: require('./img/dwayne-johnson.jpg'), uploadDate: '21.01.2023' }, comment: "The Matrix may have imprisoned me, But I am free inside The Real World." },
  { account: { name: 'Andrew Tate', picture: require('./img/dwayne-johnson.jpg'), uploadDate: '21.01.2023' }, comment: "The Matrix may have imprisoned me, But I am free inside The Real World." },
  { account: { name: 'Andrew Tate', picture: require('./img/dwayne-johnson.jpg'), uploadDate: '21.01.2023' }, comment: "The Matrix may have imprisoned me, But I am free inside The Real World." },
  { account: { name: 'Andrew Tate', picture: require('./img/dwayne-johnson.jpg'), uploadDate: '21.01.2023' }, comment: "The Matrix may have imprisoned me, But I am free inside The Real World." },
  { account: { name: 'Andrew Tate', picture: require('./img/dwayne-johnson.jpg'), uploadDate: '21.01.2023' }, comment: "The Matrix may have imprisoned me, But I am free inside The Real World." },
  { account: { name: 'Andrew Tate', picture: require('./img/dwayne-johnson.jpg'), uploadDate: '21.01.2023' }, comment: "The Matrix may have imprisoned me, But I am free inside The Real World." },
  { account: { name: 'Andrew Tate', picture: require('./img/dwayne-johnson.jpg'), uploadDate: '21.01.2023' }, comment: "The Matrix may have imprisoned me, But I am free inside The Real World." },
  { account: { name: 'Andrew Tate', picture: require('./img/dwayne-johnson.jpg'), uploadDate: '21.01.2023' }, comment: "The Matrix may have imprisoned me, But I am free inside The Real World." },
  { account: { name: 'Andrew Tate', picture: require('./img/dwayne-johnson.jpg'), uploadDate: '21.01.2023' }, comment: "The Matrix may have imprisoned me, But I am free inside The Real World." },
  { account: { name: 'Andrew Tate', picture: require('./img/dwayne-johnson.jpg'), uploadDate: '21.01.2023' }, comment: "The Matrix may have imprisoned me, But I am free inside The Real World." }
];

const posts = [
  { account: { name: 'Dwayne Johnson', picture: require('./img/dwayne-johnson.jpg'), uploadDate: '02.01.2023' }, text: 'Made my historic rap debut (thankfully I didn’t suck😅) Huge shout to all the hip hop & music fans for your HYPE reactions that are straight f*cking fire 🔥🔥🔥🙏🏾👊🏾', picture: null, video: 'https://www.youtube.com/embed/E9T78bT26sk', comments: commentp2, link: null },
  { account: { name: 'Dwayne Johnson', picture: require('./img/dwayne-johnson.jpg'), uploadDate: '30.02.2023' }, text: 'A lot of blood, sweat, and tears have gone into this career of mine.', picture: require('./img/kevin-hart-feed.jpg'), video: null, comments: commentp2, link: null },
  { account: { name: 'Dwayne Johnson', picture: require('./img/dwayne-johnson.jpg'), uploadDate: '21.01.2023' }, text: 'The Matrix may have imprisoned me, But I am free inside The Real World.', picture: require('./img/free-tate.jpg'), video: null, comments: commentp2, link: null },
  { account: { name: 'Dwayne Johnson', picture: require('./img/dwayne-johnson.jpg'), uploadDate: '24.03.2023' }, text: '@ryanReynolds is my best friend :3', picture: null, video: null, comments: commentp2, link: null },
  { account: { name: 'Dwayne Johnson', picture: require('./img/dwayne-johnson.jpg'), uploadDate: '14.03.2023' }, text: 'I’m not homophobic, I enjoy watching lesbians on the internet.', picture: require('./img/jk.jpg'), video: null, comments: commentp2, link: null }
];

const myFriends = [
  { account: { name: 'Dwayne Johnson', picture: require('./img/dwayne-johnson.jpg'), uploadDate: '02.01.2023' } },
  { account: { name: 'Dwayne Johnson', picture: require('./img/dwayne-johnson.jpg'), uploadDate: '02.01.2023' } },
  { account: { name: 'Dwayne Johnson', picture: require('./img/dwayne-johnson.jpg'), uploadDate: '02.01.2023' } },
  { account: { name: 'Dwayne Johnson', picture: require('./img/dwayne-johnson.jpg'), uploadDate: '02.01.2023' } }
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
    <div className="myprofile_left-content-profile">
      <div class="myprofile_profile-info">
        <h2 className="myprofile_descriptionTitle">Description</h2>
        <p>{descriptionText}</p>
      </div>
      <img src={editButton} width="20px" alt="edit button" onClick={() => setButtonPopup(true)} />
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
    <div className="myprofile_buttons-name">
      <div class="myprofile_profile-info">
        <h2 className="myprofile_name">{nameText}</h2>
      </div>
      <button className="myprofile_change-photo profile_button" onClick={() => setIsEditProfileOpen(true)}> Edit Profile </button>
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

const MyProfile = () => {
  const [modal, setModal] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showFriends, setShowFriends] = useState(false);
  const [userData, setUserData] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [posts, setPosts] = useState([]);
  const [userId, setUserId] = useState(null);
  const [profileImage, setProfileImage] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUser();
        const img = await getImage(data.profile_picture);
        const base64Image = 'data:image/png;base64,' + img;
        setProfileImage(base64Image);
        data.profile_picture = base64Image;
        setUserData(data);
        setUserId(data.id);

      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);


  useEffect(() => {

  
    if (userId && !posts.length) {
      getFeedContent(userId)
        .then(posts => {
          const updatedPosts = posts.map(post => ({
            ...post,
            user: {
              ...post.user,
              profile_picture: userData.profile_picture
            }
          }));
  
          setPosts(updatedPosts);
        });
    }
  }, [userId, userData]); 

  async function getFeedContent(userId) {
    const posts = await getUserPosts(userId);
    const content = [...posts];
    return content;
  }

  useEffect(() => {
    const fullName = `${userData.firstName} ${userData.lastName}`;
    setName(fullName);
  }, [userData]);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (userData.bio) {
      setDescription(userData.bio);
    }
    else {
      setDescription("This is my description.");
    }
  }, [userData]);

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
    const nameParts = newName.split(' ');
    if (nameParts.length !== 2) {
      alert('Invalid name format. Please enter both first name and last name.');
      return;
    }
    setName(newName);
    fetch('http://localhost:8084/updateName', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      credentials: 'include',
      body: `name=${newName}`,
    })
      .then(response => {
        alert('Name updated successfully');
        //  document.cookie = "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        //  document.cookie = "refresh_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        //  window.location.href = "/login";

      })
      .catch(error => {

        alert('Error updating name:', error);
      });
  };

  const handleImageUpdate = (newImageUrl) => {
    setImageUrl(newImageUrl);
  };

  const handleDescriptionUpdate = (newDescription) => {

    setDescription(newDescription);
    fetch('http://localhost:8084/updateBio', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      credentials: 'include',
      body: `bio=${newDescription}`,
    })
      .then(response => {
        alert('Description updated successfully');
        // document.cookie = "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        // document.cookie = "refresh_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        // window.location.href = "/login";

      })
      .catch(error => {

        alert('Error updating the description:', error);
      });
  };

  return (
    <>
      <div className={modal ? 'feed_modal' : null}> </div>
      <div className='myprofile_container-profile'>
        <div className="myprofile_left-profile">
          <StretchedMenu />
        </div>
        <div className="myprofile_right-profile">
          <div className="myprofile_top-bar">
            <div className="myprofile_search-profile">
              <div className="myprofile_search_box-profile">
                <img src={icon5} alt="search icon" />
              </div>
              <div className="myprofile_right_icons-profile">
                <img src={icon6} alt="notification icon" />
                <img src={icon7} alt="logout icon" />
              </div>
            </div>
          </div>

          <div className="myprofile_content-profile">
            <div className="myprofile_upper-profile">
              <div className="myprofile_colored-cover">
                <img id="profile-photo" className="myprofile_profile-photo" src={userData.profile_picture} alt="profile" />
              </div>
              <div className="myprofile_white-cover">
                <div className="myprofile_photo-name-profile">
                  <EditProfileFCT nameText={name} setNameText={handleNameUpdate} setImageUrl={handleImageUpdate} />
                </div>
              </div>
            </div>
            <div className="myprofile_bottom-profile">
              <Description descriptionText={description} setDescriptionText={handleDescriptionUpdate} />

              <div className="myprofile_right-content-profile">
                <Feed posts={posts} togglePosts={togglePosts} showComments={showComments} showFriends={showFriends} toggleFriends={toggleFriends} friends={myFriends} useCase={'profile'} />

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyProfile;