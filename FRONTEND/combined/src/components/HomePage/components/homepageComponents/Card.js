import React, { useEffect } from 'react';
import { useState } from 'react';
import '../../styles/homepageStyles/card.css';
import commentBtn from '../../icons/homepageIcons/comment.svg';
import shareBtn from '../../icons/homepageIcons/share.svg';

import AddComment from './AddComment';
import PostImage from './PostImage';

import { getUser, likePost, unlikePost , getImage} from '../../../../util';

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

export default function Card({post, openFriendsMenu, openCommentsMenu, commentSectionId, setCommentId}) {
  const sharePressed = () => {
    openFriendsMenu();
  }

  const account = post.user;
  account.name = account.firstName + ' ' + account.lastName;
  const date=new Date(post.createdAt);

  // const loadImage = async () => {
  //   const img = await getImage(account.profile_picture);
  //   account.picture = 'data:image/png;base64,' + img;
  // }
  // loadImage();

  account.picture = post.user.profile_picture;
  
  const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
  const uploadDate = date.toLocaleDateString('en-GB', options); 
  return (
      <div className='feed_card'>
      <div className='feed_topCard'>
        {/* <ShowAccount account={account}/> */}
        <Account name={account.name} picture={account.picture} uploadDate={uploadDate} />
        <div className='feed_options'>
          {/* <p>dsfsdf</p> */}
        </div>
      </div>

      <div className='feed_postBody'>
          <div>
            {post.content.length > 0 &&
              <p>{post.id + post.content}</p>
            }
          </div>
          
          <div className='feed_media'>
            {
              post.postImages.map((postImage, i) => <PostImage key={i} imageName={postImage.imageLink} alt={account.name} />)
            }
            {/* {post.picture != undefined &&
              <img src={post.picture} alt={account.name}/>
            } */}

            {/* {post.video != undefined &&
              <div>
                <iframe id="ytplayer" type="text/html" src={post.video} frameborder="0"></iframe>
              </div>
            } */}
          </div>
          
      </div>

      <div className='feed_bottomCard'>
        <div className='feed_likes'>
          <LikeBtn likes={post.likes} post={post}/>
        </div>

        <div className='feed_comments'>
          <button className='feed_commentsBtn' onClick={() => {
            setCommentId(post.id);
            openCommentsMenu();
          }}><img src={commentBtn} alt='like button'/></button>
          {post.comments ? <p>{post.comments.length}</p> : <p>0</p>}
        </div>

        <div className='feed_shares'>
          <button className='feed_commentsBtn' onClick={sharePressed}><img src={shareBtn} alt='like button'/></button>
        </div>

      </div>
        <AddComment post={post} />
    </div>
    );
}

function LikeBtn({likes, post}) {
  const [nrLikes, setNrLikes] = useState(likes.length);
  const [like, setLike] = useState(null);

  useEffect(() => {
    getUser().then(user => {
      setLike(post.likes.find(l => l.userId === user.id));
    });
  }, []);

  const clickLike = () => {
    if(!like) {
      likePost(post.id).then(setLike);
      setNrLikes(nrLikes + 1);
    } else {
      unlikePost(like.id).then(() => setLike(null));
      setNrLikes(nrLikes - 1);
    }
  }

  return (
    <div className='feed_likeBtn'>
      <button id="feed_likeBtn" onClick={clickLike} className={like ? 'feed_like-clicked' : 'feed_like'}></button>
      <p>{nrLikes}</p>
    </div>
  );
}