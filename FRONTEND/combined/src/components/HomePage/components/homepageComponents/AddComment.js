import { useState } from "react";

// components
import ShowAccount from "./ShowAccount";

// styles
import '../../styles/homepageStyles/addComment.css';

import sendImg from '../../icons/homepageIcons/send.svg';
import loadImg from '../../icons/homepageIcons/loadImg.svg';

export default function AddComment() {
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
    
    const postComment = () => {
        alert("New Comment");
    }

    return (
        <div className="feed_addComment">
            <div>
                <ShowAccount account={{name:null, picture: require('../../photos/KevinHart.jpg'), uploadDate:null}}/>
            </div>
            <div className="feed_commentInput">
                <input id="feed_comment-input" onChange={updateTypeAreaVal} type="text" placeholder="Write a comment..."/>
                <label htmlFor="file-input" className="feed_file-input">
                    <img src={loadImg} />
                </label>
                <input id="feed_file-input" type="file" onChange={UploadFilesHandler} hidden/>
                <button className='feed_sendBtn' onClick={postComment}><img src={sendImg} alt="send" /></button>
            </div>
        </div>
    );
}