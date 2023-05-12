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
            <div className='friend' onClick={goToProfile}>
                <ShowAccount account={friend.account}/>
            </div>
        );
    });

    return (
        <div className={burgerState ? 'card onlineFriends active' : 'card onlineFriends'}>
            <div className='burger' onClick={clickBurger}>
                <img src={arrow} alt='toggleButton' className='arrowButton'/>
            </div>

            <div className={burgerState ? 'friends active' : 'friends'}>
                <div className="top">
                    <p>Online friends</p>
                </div>
                {showFriends}
            </div>
        </div>
    );
}