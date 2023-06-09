import React from 'react';
import './App.css'
import './Feed.css'

import likeBtn from './icons/like.svg'
import commentBtn from './icons/comment.svg'
import shareBtn from './icons/share.svg'
import arrow from './icons/arrow.svg'

const posts = [
  {account:{name:'Dwayne Johnson', picture: require('./img/dwayne-johnson.jpg'), uploadDate:'02.01.2023'}, text:'Made my historic rap debut (thankfully I didn’t suck😅) Huge shout to all the hip hop & music fans for your HYPE reactions that are straight f*cking fire 🔥🔥🔥🙏🏾👊🏾', picture:null, video:'https://www.youtube.com/embed/E9T78bT26sk'},
  {account:{name:'Kevin Hart', picture: require('./img/kevin-hart.jpg'), uploadDate:'30.02.2023'}, text:'A lot of blood, sweat, and tears have gone into this career of mine.', picture:require('./img/kevin-hart-feed.jpg'), video:null},
  {account:{name:'Andrew Tate', picture: require('./img/andrew-tate.jpg'), uploadDate:'21.01.2023'}, text:'The Matrix may have imprisoned me, But I am free inside The Real World.', picture:require('./img/free-tate.jpg'), video:null},
  {account:{name:'Hugh Jackman', picture:require('./img/hugh-jackman.jpg'), uploadDate:'24.03.2023'}, text:'@ryanReynolds is my best friend :3', picture:null, video:null},
  {account:{name:'Jeremy Clarkson', picture: require('./img/jeremy-clarkson.jpg'), uploadDate:'14.03.2023'}, text:'I’m not homophobic, I enjoy watching lesbians on the internet.', picture:require('./img/jk.jpg'), video:null}
];

export default function Homepage() {

  const onlineFriends = posts.map(friend =>
    // <Account name={friend.account.name} picture={friend.account.picture} uploadDate={frien.uploadDate}/>
    friend.account
    );
 
  return (
    <div className="homepage">
      {/* navbar - Adrian */}
      {/* sidebar - Adrian*/}
      {/* feed container - ieu */}

      <div className='a'></div>
      <div className='mid'>
        <Status />
        <Feed />
      </div>

      <div className='b'>
        <OnlineFriends friends={onlineFriends}/>
      </div>

    </div>
  );
}

function Status(){
  return (
    <div className='status'>
      <div className='statusInput'>
        <div className='input'>
          <p>How do you feel today?</p>
        </div>
      </div>
    </div>
  );
}

function Feed(){
  const feedAccounts = posts.map(post =>
    <Card account={post.account} text={post.text} pictures={post.picture} video={post.video}/>
    );

  return (
    <div className='feed'>
      {feedAccounts}
    </div>
  );
}

function Card({account: {name, picture, uploadDate}, text, pictures, video}){

  return(
    <div className='card'>
      <div className='topCard'>
        <Account name={name} picture={picture} uploadDate={uploadDate}/>
        <div className='options'>
          {/* <p>dsfsdf</p> */}
        </div>
      </div>

      <div className='postBody'>
          {text.length > 0 &&
            <p>{text}</p>
          }

          {pictures != undefined &&
            <img src={pictures} alt={name}/>
          }

          {video != undefined &&

            <div>
              <iframe id="ytplayer" type="text/html" src={video} frameborder="0"></iframe>
            </div>
          }
          
      </div>

      <div className='bottomCard'>
        <div className='likes'>
          <img src={likeBtn} width='20px' alt='like button'/>
          <p>69</p>
        </div>

        <div className='comments'>
        <img src={commentBtn} width='20px' alt='like button'/>
          <p>69</p>
        </div>

        <div className='shares'>
        <img src={shareBtn} width='20px' alt='like button'/>
          <p>69</p>
        </div>
      </div>
    </div>
  );
}

function Account({name, picture, uploadDate}){
  return(
    <div className='account'>
      <img src={picture} alt={name} />
      <div className='accountDetails'>
        <p className='name'>{name}</p>
        <p className='date'>{uploadDate}</p>
      </div>
    </div>
  );
}













function OnlineFriends({friends}){
  const accounts = friends.map(friend =>
    <div className='leftPannerAccount'>
      <Account name={friend.name} picture={friend.picture} uploadDate={friend.uploadDate}/>
    </div>
  );

  const show = true;

  const burgerToggle = event => {
    
  };

  return(
    <div className='onlineFriends'>
      <div className='burger' onClick={burgerToggle}>
        <img src={arrow} alt='menu'/>
      </div>
      {show && (
          <div className='panel'>
            <h1>Online Friends</h1>
            {accounts}
          </div>
        )}
    </div>
  );
}

