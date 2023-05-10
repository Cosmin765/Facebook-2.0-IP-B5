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
      <div className='typeArea'>
        <textarea
          className='typeAreaField'
          name="postContent"
          placeholder="What's on your mind?"
          onChange={updateTypeAreaVal}
        />
      </div>

      {/* Imported pictures */}
      {postDataType.files.length > 0 && 
        <div className='picturesList'>
          <p className='pictureItem'>Pictures: {postDataType.files[0].name}</p>
          <button className='removePicture'>x</button>
        </div>
      }

      {/* BottomButtons */}
      <div className='bottomButtons'>
        <div className='bottomButtonsLeft'>
          <div className="uploadPictureBtn">
            <label htmlFor="file-input">
              <img src={loadImg} />
            </label>
            <input id="file-input" type="file" onChange={UploadFilesHandler} hidden/>
          </div>
        </div>

        <div className='bottomButtonsRight'>
          <button className='btn' onClick={PostMessage} >Post</button>
          <button className='btn' onClick={CancelPost}>Cancel</button>
        </div>
      </div>
    </>
  );
}