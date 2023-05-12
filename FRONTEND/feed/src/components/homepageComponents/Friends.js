// components
import ShowAccount from './ShowAccount';

// styles
import '../../styles/homepageStyles/showComments.css';

import sendImg from '../../icons/homepageIcons/send.svg';

export default function Friends({friends, toggleFunction, sharePannel, showFriends}) {
    const sharePost = () => {
        alert("AM TRIMIIIS");
    }

    const displayFriends = friends.map((friend) => {
        return (
            <div className='firends'>
                <ShowAccount account={friend.account}/>
                {sharePannel && <button className='sendBtn' onClick={sharePost}><img src={sendImg} alt="send" /></button>}
            </div>
        );
    });

    return (
        // <div className='card showComments' style={{boxShadow: 'none', width: 400}}>
        <div className={showFriends ? 'card showComments active' : 'card showComments'} style={{boxShadow: 'none', width: 400}}>
            <div className="top">
                <p>Friends</p>
                <button className='btn' onClick={toggleFunction}>Close</button>
            </div>
            <div className="commentsList friendsList">
                {displayFriends}
            </div>
        </div>
    );
}