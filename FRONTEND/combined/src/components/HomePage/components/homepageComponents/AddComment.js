import { useState } from "react";

// components
import ShowAccount from "./ShowAccount";

// styles
import '../../styles/homepageStyles/addComment.css';

import sendImg from '../../icons/homepageIcons/send.svg';
import loadImg from '../../icons/homepageIcons/loadImg.svg';
import { createComment } from "../../../../util";

export default function AddComment({post}) {
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
        console.log(event.target.files);
        setPostDataType(prevPostDataType => {
            return {...prevPostDataType, files: event.target.files};
        });
    }
    
    const postComment = () => {
        const content = postDataType.typeAreaVal;
        createComment(content, post.id);
    }

    return (
        <div className="feed_addComment">
            <div>
                <ShowAccount account={{name: null, picture: require('../../photos/KevinHart.jpg'), uploadDate: null}}/>
            </div>
            <div className="feed_commentInput">
                <form onSubmit={e => e.preventDefault()}>
                    <input id="" className="feed_commentInput_input" onChange={updateTypeAreaVal} type="text" placeholder="Write a comment..."/>
                    {/* <label htmlFor="comment-image" className="feed_file-input">
                        <img src={loadImg} />
                    </label>
                    <input id="comment-image" className="feed_commentInput_input" type="file" onChange={UploadFilesHandler} hidden/> */}
                    {/* <button className='feed_sendBtn' onClick={postComment}><img src={sendImg} alt="send" /></button> */}
                    <input className='feed_sendBtn' onClick={postComment} type="submit" value=""></input>
                </form>
            </div>
        </div>
    );
}