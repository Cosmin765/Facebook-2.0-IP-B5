// components
import ShowAccount from './ShowAccount';

// style
import '../../styles/homepageStyles/onlineFriends.css'

// icons
import arrow from '../../icons/homepageIcons/arrow.svg';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getLoggedFriends, getImage } from "../../../../util";

export default function OnlineFriends({ friends, openAcount, toggle }) {
    const [burgerState, setBurgerState] = useState(false);

    const [friendsList, setFriends] = useState([]);
    let [friendIds, setFriendIds] = useState([]);
    let [copyFriend, setCopy] = useState([]);

    const updateFriends = async () => {
        try {
            const myFriends = await getLoggedFriends();

            const newFriendIds = myFriends.map((friend) => friend.id);

            const hasFriendsChanged = !arrayEquals(friendIds, newFriendIds);
            friendIds = newFriendIds;

            if (hasFriendsChanged === true) {
                for (const friend of myFriends) {
                    const img = await getImage(friend.profile_picture);
                    const profilePicture = 'data:image/png;base64,' + img;
                    friend.profilePic = profilePicture;
                }

                copyFriend = myFriends;
                setCopy(myFriends);
            }
            

            const formattedFriends = copyFriend.map((f) => ({
                account: {
                    id: f.id,
                    name: f.firstName + ' ' + f.lastName,
                    picture: f.profilePic,
                    uploadDate: null,
                },
            }));

            setFriends(formattedFriends);
            setFriendIds(newFriendIds);
        } catch (error) {
            // Handle error
            console.error('Error fetching friends:', error);
        }
    };

    // Utility function to check if two arrays are equal
    function arrayEquals(a, b) {
        if (a.length !== b.length) {
            return false;
        }

        return true;
    }

    useEffect(() => {
        updateFriends();
        const interval = setInterval(updateFriends, 6000);
        return () => clearInterval(interval);
    }, []);

    const clickBurger = () => {
        toggle();
        setBurgerState(!burgerState);
    }

    // 
    const goToProfile = () => {
        alert("Go to profile");
    }
    // 

    const showFriends = friendsList.map((friend, i) => {
        return (
            <div key={i} className='feed_friend' onClick={goToProfile}>
                <Link className='router_link' to='/profile'>    <ShowAccount account={friend.account} />
                </Link></div>

        );
    });

    return (
        <div className={burgerState ? 'feed_card feed_card_border feed_onlineFriends active' : 'feed_card feed_card_border feed_onlineFriends'}>
            <div className='feed_burger' onClick={clickBurger}>
                <img src={arrow} alt='toggleButton' className='feed_arrowButton' />
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