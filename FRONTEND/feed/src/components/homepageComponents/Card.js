import React from 'react';
import { useState } from 'react';
import ShowAccount from './ShowAccount';
import '../../styles/homepageStyles/card.css';
import likeBtn from '../../icons/homepageIcons/like.svg';
import commentBtn from '../../icons/homepageIcons/comment.svg';
import shareBtn from '../../icons/homepageIcons/share.svg';

import AddComment from './AddComment';

export default function Card({post, openFriendsMenu, openCommentsMenu}) {
  const showComments = () => {
    openCommentsMenu();
  }

  const sharePressed = () => {
    openFriendsMenu();
  }
  
  return (
        <div className='feed_card'>
      <div className='feed_topCard'>
        <ShowAccount account={post.account}/>
        <div className='feed_options'>
          {/* <p>dsfsdf</p> */}
        </div>
      </div>

      <div className='feed_postBody'>
          <div>
            {post.text.length > 0 &&
              <p>{post.text}</p>
            }
          </div>
          
          <div className='feed_media'>
            {post.picture != undefined &&
              <img src={post.picture} alt={post.account.name}/>
            }

            {/* {post.video != undefined &&
              <div>
                <iframe id="ytplayer" type="text/html" src={post.video} frameborder="0"></iframe>
              </div>
            } */}
          </div>
          
      </div>

      <div className='feed_bottomCard'>
        <div className='feed_likes'>
          <LikeBtn nrLikes={post.likes}/>
        </div>

        <div className='feed_comments'>
          <button className='feed_commentsBtn' onClick={showComments}><img src={commentBtn} alt='like button'/></button>
          {post.comments ? <p>{post.comments.length}</p> : <p>0</p>}
        </div>

        <div className='feed_shares'>
          <button className='feed_commentsBtn' onClick={sharePressed}><img src={shareBtn} alt='like button'/></button>
        </div>

      </div>
        <AddComment />
    </div>
    );
}

function LikeBtn({nrLikes}) {
  const [liked, setLiked] = useState(null);

  const clickLike = () => {
    setLiked(!liked);
  }

  return (
    <div className='feed_likeBtn'>
      <button id="feed_likeBtn" onClick={clickLike} className={liked ? 'feed_like-clicked' : 'feed_like'}></button>
      {<p>{nrLikes}</p>}
    </div>
  );
}