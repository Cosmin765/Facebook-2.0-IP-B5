import { useEffect, useState } from "react";

// components
import ShowAccount from "./ShowAccount";

// styles
import '../../styles/homepageStyles/addComment.css';

import sendImg from '../../icons/homepageIcons/send.svg';
import loadImg from '../../icons/homepageIcons/loadImg.svg';
import { createComment, getImage, getUser } from "../../../../util";

export default function AddComment({post, updateFeed}) {
    const [base64, setBase64] = useState('');

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
        const content = postDataType.typeAreaVal;
        createComment(content, post.id);
        setPostDataType(prevPostDataType => {
            return {...prevPostDataType, typeAreaVal: ''};
        });
        updateFeed();
    }

    const getProfile = async () => {
        const user = await getUser();
        const otherImage = await getImage(user.profile_picture);
        setBase64('data:image/png;base64,' + otherImage);
    }

    useEffect(() => {
        getProfile();
    }, []);

    const account = {name: null, picture: base64, uploadDate: ''};

    return (
        <div className="feed_addComment">
            <div>
                <ShowAccount account={account}/>
            </div>
            <div className="feed_commentInput">
                <form onSubmit={e => e.preventDefault()}>
                    <input id="" className="feed_commentInput_input" onChange={updateTypeAreaVal} value={postDataType.typeAreaVal} type="text" placeholder="Write a comment..."/>
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