import React from "react";
import Comment from "./Comment";
import '../../styles/homepageStyles/showComments.css';

export default function ShowComments({comments, toggleFunction}) {
    const commentList = comments.map((comment) => {
        return <Comment comment={comment}/>;
    });

    return (
        <div className='card showComments' style={{boxShadow: 'none'}}>
            <div className="top">
                <p>Comments</p>
                <button className='btn' onClick={toggleFunction}>Close</button>
            </div>
            <div className="commentsList">
                {commentList}
            </div>
        </div>
    );
}