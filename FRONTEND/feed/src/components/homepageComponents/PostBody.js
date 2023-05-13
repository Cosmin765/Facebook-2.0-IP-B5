import React from 'react';
import { useState } from 'react';

import '../../styles/homepageStyles/postBody.css';
import loadImg from '../../icons/homepageIcons/loadImg.svg';

export default function PostBody(props) {
  const [postDataType, setPostDataType] = useState({
    typeAreaVal: "",
    files: FileList
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
    alert("Posted");

    props.toggleFunction();
    console.log(postDataType);
  }

  const CancelPost = () => {
    props.toggleFunction();

    setPostDataType(prevPostDataType => {
      return {...prevPostDataType, typeAreaVal: null, files: []};
    });
  }

  return (
    <>
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
      {postDataType.files.length > 0 && 
        <div className='feed_picturesList'>
          <p className='feed_pictureItem'>Pictures: {postDataType.files[0].name}</p>
          <button className='feed_removePicture'>x</button>
        </div>
      }

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
          <button className='feed_btn' onClick={PostMessage} >Post</button>
          <button className='feed_btn' onClick={CancelPost}>Cancel</button>
        </div>
      </div>
    </>
  );
}