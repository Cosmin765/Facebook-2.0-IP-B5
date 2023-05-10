import React from "react";
import '../../styles/homepageStyles/comment.css';
import ShowAccount from "./ShowAccount";

export default function Comment({comment}) {
    return (
        <div className="test">
            <div className="comment">
                <ShowAccount account={comment.account} />
                <div className="comentText">
                    <p>{comment.comment}</p>
                </div>
            </div>
        </div>
    );
}