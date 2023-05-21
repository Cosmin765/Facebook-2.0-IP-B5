// components
import ShowAccount from './ShowAccount';

// styles
import '../../styles/homepageStyles/showComments.css';

import sendImg from '../../icons/homepageIcons/send.svg';

export default function Friends({friends, toggleFunction, sharePannel, showFriends}) {
    const sharePost = () => {
        alert("AM TRIMIIIS");
    }

    const displayFriends = friends.map((friend, i) => {
        return (
            <div key={i} className='feed_firends'>
                <ShowAccount account={friend.account}/>
                {sharePannel && <button className='feed_sendBtn' onClick={sharePost}><img src={sendImg} alt="send" /></button>}
            </div>
        );
    });

    return (
        // <div className='card showComments' style={{boxShadow: 'none', width: 400}}>
        <div className={showFriends ? 'feed_card feed_showComments feed_card_border feed_friends_width active' : 'feed_card feed_showComments feed_card_border feed_friends_width'}>
            <div className="feed_top">
                <p>Friends</p>
                <button className='feed_btn' onClick={toggleFunction}>Close</button>
            </div>
            <div className="feed_commentsList feed_friendsList">
                {displayFriends}
            </div>
        </div>
    );
}