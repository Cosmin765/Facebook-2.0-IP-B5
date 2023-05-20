import React from 'react';
import { useState, useEffect } from 'react';
import { getRaw } from '../../../../util';

import '../../styles/homepageStyles/PostBody.css';
import loadImg from '../../icons/homepageIcons/loadImg.svg';
export default function PostBody(props) {
  const [postDataType, setPostDataType] = useState({
    typeAreaVal: "",
    files: []
  });

  const updateTypeAreaVal = (event) => {
    setPostDataType(prevPostDataType => {
      return {...prevPostDataType, typeAreaVal: event.target.value};
    });
  }

  const UploadFilesHandler = (event) => {
    setPostDataType(prevPostDataType => {
      return {...prevPostDataType, files: event.target.files};
    });
  }

  const PostMessage = () => {
    // const postData = {
    //   content: postDataType.typeAreaVal,
    //   // Add other properties as needed
    // };
    const formData = new FormData();
    formData.append('content', postDataType.typeAreaVal);
    if (postDataType.files.length > 0) {
      for (let i = 0; i < postDataType.files.length; i++) {
        formData.append('image', postDataType.files[i]);
      }}

    getRaw('http://localhost:8084/posts/new', 'POST', formData)
    .then(response => {
      if(response.status !== 200) {
        throw new Error('Error occurred while creating the post.');
      }
    })
    .catch(error => {
      console.error(error);
    });

  props.toggleFunction();
}

  const CancelPost = () => {
    props.toggleFunction();

    setPostDataType(prevPostDataType => {
      return {...prevPostDataType, typeAreaVal: null, files: []};
    });
  }

  return (
    <>
    <form>
      {/* TypeArea */}
      <div className='feed_typeArea'>
        <textarea
          className='feed_typeAreaField'
          name="postContent"
          placeholder="What's on your mind?"
          onChange={updateTypeAreaVal}
        />
      </div>

      {/* Imported pictures */}
      {/* {postDataType.files.length > 0 && 
        <div className='feed_picturesList'>
          <p className='feed_pictureItem'>Pictures: {postDataType.files[0].name}</p>
          <button className='feed_removePicture'>x</button>
        </div>
      } */}

      {/* BottomButtons */}
      <div className='feed_bottomButtons'>
        <div className='feed_bottomButtonsLeft'>
          <div className="feed_uploadPictureBtn">
            <label htmlFor="file-input">
              <img src={loadImg} />
            </label>
            <input id="file-input" type="file" onChange={UploadFilesHandler} hidden/>
          </div>
        </div>

        <div className='feed_bottomButtonsRight'>
          {/* <button className='feed_btn' onClick={PostMessage} >Post</button> */}
          <input className='feed_btn' onClick={PostMessage} type="submit" value="Post"></input>
          <button className='feed_btn' onClick={CancelPost}>Cancel</button>
        </div>
      </div>
      </form>
    </>
  );
}
