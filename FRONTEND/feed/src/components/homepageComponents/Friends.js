import React from 'react';
import '../../styles/homepageStyles/showComments.css';
import ShowAccount from './ShowAccount';
import sendImg from '../../icons/send.svg';

export default function Friends({friends, toggleFunction, sharePannel}) {
    const sharePost = () => {
        alert("AM TRIMIIIS");
    }

    const showFriends = friends.map((friend) => {
        return (
            <div className='firends'>
                <ShowAccount account={friend.account}/>
                {sharePannel && <button className='sendBtn' onClick={sharePost}><img src={sendImg} alt="send" /></button>}
            </div>
        );
    });

    return (
        <div className='card showComments' style={{boxShadow: 'none', width: 400}}>
            <div className="top">
                <p>Friends</p>
                <button className='btn' onClick={toggleFunction}>Close</button>
            </div>
            <div className="commentsList friendsList">
                {showFriends}
            </div>
        </div>
    );
}