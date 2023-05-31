import React from "react";
import { useState, useEffect } from 'react';

// components
import TopBar from '../TopBar';
// import LeftMenu from '../LeftMenu';
import OnlineFriends from './OnlineFriends';
import Status from "./Status";
import Feed from "./Feed";
import LargeMenu from "../large_menu";
import StretchedMenu from "../streched_menu";
import ShowAccount from "./ShowAccount";
import { getRecommendedAds, getRecommendedPosts, setUserLogged, getLoggedFriends, getImage } from "../../../../util";

// style
import '../../styles/homepageStyles/homepage.css'

function adToPostConvert(ad) {
    return {
        ...ad,
        comments: [],
        id: ad.id + 100000,
        likes: [],
        location: null,
        postImages: [
            {
                imageLink: ad.imageLink
            }
        ],
        status: null,
        user: ad.publisher,
        type: 'ad'
    };
}

export default function Homepage() {
    //login
    useEffect(() => {
        setUserLogged(true);
    }, []);

    const [modal, setModal] = useState(false);
    const [onlineFriendsToggle, setOnlineFriendsToggle] = useState(false);
    const [createPost, setCreatePost] = useState(false);
    const [showComments, setShowComments] = useState(false);
    const [showFriends, setShowFriends] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);

    const [posts, setPosts] = useState([]);
    const [myFriends, setFriends] = useState([]);

    if (!posts.length) {
        getFeedContent().then((posts) => {
            setPosts(posts);
        });
    }

    function isIdNotInPairs(id, idImagePairs) {
        const idExists = idImagePairs.some(pair => pair.id === id);
        return !idExists;
    }

    function returnProfileById(id,idImagePairs) {
        for (const profile of idImagePairs) {
            if (profile.id === id) {
                return profile.image;
            }
        }
    }
    
    async function getFeedContent() {
        const posts = await getRecommendedPosts();

        const idImagePairs = [];
        for (const post of posts) {
            if(isIdNotInPairs(post.user.id, idImagePairs) === true) {
                const id = post.user.id;   
                let img = await getImage(post.user.profile_picture);
                img = 'data:image/png;base64,' + img;

                const pair = {
                    id: post.user.id,
                    image: img
                };
                idImagePairs.push(pair);
            }

            if(isIdNotInPairs(post.user.id, idImagePairs) === false) {
                post.user.profile_picture = returnProfileById(post.user.id,idImagePairs);
            }
        }

        const ads = await getRecommendedAds();
        console.log(ads);

        // const ads =[];

        const content = [...posts, ...ads.map(adToPostConvert)].sort(() => Math.random() < 0.5 ? 1 : -1);
        return content;
    }


    const toggleFriendsPanel = () => {
        setModal(!modal);
        setCreatePost(false);
        setShowComments(false);
        setOnlineFriendsToggle(!onlineFriendsToggle);
    }

    const togglePosts = () => {
        setModal(!modal);
        setCreatePost(false);
        setShowComments(!showComments);
    }

    const openPostPopup = () => {
        setCreatePost(!createPost);
        setModal(!modal);
        setOnlineFriendsToggle(false);
        setShowComments(false);
    }

    const toggleFriends = () => {
        setModal(!modal);
        setCreatePost(false);
        setShowComments(false);
        setOnlineFriendsToggle(false);
        setShowFriends(!showFriends);
    }

    const notifications = () => {
        setShowNotifications(!showNotifications);
        // setModal(!modal);
        setCreatePost(false);
        setShowComments(false);
        setOnlineFriendsToggle(false);
        setShowFriends(false);
        // alert();
    }

    const [height, width] = useWindowSize();

    function useWindowSize() {
        const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
        useEffect(() => {
            const handleResize = () => {
                setSize([window.innerHeight, window.innerWidth]);
            };

            window.addEventListener("resize", handleResize);
            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }, []);

        return (size);
    }

    return (
        <>
            <TopBar notifications={notifications} showNotifications={showNotifications} />
            <div className={showNotifications ? 'feed_card feed_notificationPanel active' : 'feed_card feed_notificationPanel'}>
                <h2>Notifications</h2>

                <div className="feed_notif">
                    <div>
                        <ShowAccount account={{ name: 'Dwayne Johnson', picture: require('../../photos/dwayne-johnson.jpg'), uploadDate: '12.04.1995' }} />
                    </div>
                    <p>posted a new photo</p>
                </div>

                <div className="feed_notif">
                    <div>
                        <ShowAccount account={{ name: 'Dwayne Johnson', picture: require('../../photos/dwayne-johnson.jpg'), uploadDate: '12.04.1995' }} />
                    </div>
                    <p>posted a new photo</p>
                </div>

                <div className="feed_notif">
                    <div>
                        <ShowAccount account={{ name: 'Dwayne Johnson', picture: require('../../photos/dwayne-johnson.jpg'), uploadDate: '12.04.1995' }} />
                    </div>
                    <p>posted a new photo</p>
                </div>

                <div className="feed_notif">
                    <div>
                        <ShowAccount account={{ name: 'Dwayne Johnson', picture: require('../../photos/dwayne-johnson.jpg'), uploadDate: '12.04.1995' }} />
                    </div>
                    <p>posted a new photo</p>
                </div>
            </div>

            {width < 1200 ? <StretchedMenu /> : <LargeMenu />}
            {/* <LeftMenu /> */}

            <div className="feed_homepageContainer">
                <div className={modal ? 'feed_modal' : null}>
                </div>

                <div className={modal ? 'feed_spacer active' : 'feed_spacer'}></div>

                {/* <div className='middlePanel'> */}
                <div className={onlineFriendsToggle ? 'feed_middlePanel active' : 'feed_middlePanel'}>
                    <Status openPostPopup={openPostPopup} createPost={createPost} />
                    <Feed posts={posts} togglePosts={togglePosts} showComments={showComments} showFriends={showFriends} toggleFriends={toggleFriends} friends={myFriends} />
                </div>

                {/* <div className='rightPanel'> */}
                <div className={onlineFriendsToggle ? 'feed_rightPanel active' : 'feed_rightPanel'}>
                    <OnlineFriends friends={myFriends} toggle={toggleFriendsPanel} />
                </div>
            </div>
        </>
    );
}