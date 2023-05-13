// components
import ShowAccount from './ShowAccount';

// style
import '../../styles/homepageStyles/onlineFriends.css'

// icons
import arrow from '../../icons/homepageIcons/arrow.svg';

import { useState } from 'react';

export default function OnlineFriends({friends, openAcount, toggle}) {
    const [burgerState, setBurgerState] = useState(false);
    
    const clickBurger = () => {
        toggle();
        setBurgerState(!burgerState);
    }

    // 
    const goToProfile = () => {
        alert("Go to profile");
    }
    // 

    const showFriends = friends.map((friend) => {
        return (
            <div className='feed_friend' onClick={goToProfile}>
                <ShowAccount account={friend.account}/>
            </div>
        );
    });

    return (
        <div className={burgerState ? 'feed_card feed_card_border feed_onlineFriends active' : 'feed_card feed_card_border feed_onlineFriends'}>
            <div className='feed_burger' onClick={clickBurger}>
                <img src={arrow} alt='toggleButton' className='feed_arrowButton'/>
            </div>

            <div className={burgerState ? 'feed_friends active' : 'feed_friends'}>
                <div className="feed_top">
                    <p>Online friends</p>
                </div>
                {showFriends}
            </div>
        </div>
    );
}