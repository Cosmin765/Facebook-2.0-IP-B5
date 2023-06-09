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

// style
import '../../styles/homepageStyles/homepage.css'

const commentp1 = [
    {account:{name:'Jeremy Clarkson', picture: require('../../photos/jeremy-clarkson.jpg'), uploadDate:'14.03.2023'}, comment:"Can I play in the next Fast and Furious movie?"},
    {account:{name:'Andrew Tate', picture: require('../../photos/andrew-tate.jpg'), uploadDate:'21.01.2023'}, comment:"You are still int the Matrix..."},
    {account:{name:'Jeremy Clarkson', picture: require('../../photos/jeremy-clarkson.jpg'), uploadDate:'14.03.2023'}, comment:"STFU @TopGay... Go back to prison"},
    {account:{name:'Kevin Hart', picture: require('../../photos/kevin-hart.jpg'), uploadDate:'30.02.2023'}, comment:"i am bringing the popcorn"},
    {account:{name:'Andrew Tate', picture: require('../../photos/andrew-tate.jpg'), uploadDate:'21.01.2023'}, comment:"What color is your bugatti?"},
    {account:{name:'Jeremy Clarkson', picture: require('../../photos/jeremy-clarkson.jpg'), uploadDate:'14.03.2023'}, comment:"which one? i own five chirons"},
    {account:{name:'Elon Musk', picture: require('../../photos/elon-musk.jpg'), uploadDate:'21.01.2023'}, comment:"I am officially buying koobecaf!"},
    {account:{name:'Elon Musk', picture: require('../../photos/elon-musk.jpg'), uploadDate:'21.01.2023'}, comment:"I am officially buying koobecaf!"},
    {account:{name:'Elon Musk', picture: require('../../photos/elon-musk.jpg'), uploadDate:'21.01.2023'}, comment:"I am officially buying koobecaf!"},
    {account:{name:'Elon Musk', picture: require('../../photos/elon-musk.jpg'), uploadDate:'21.01.2023'}, comment:"I am officially buying koobecaf!"},
    {account:{name:'Elon Musk', picture: require('../../photos/elon-musk.jpg'), uploadDate:'21.01.2023'}, comment:"I am officially buying koobecaf!"},
    {account:{name:'Elon Musk', picture: require('../../photos/elon-musk.jpg'), uploadDate:'21.01.2023'}, comment:"I am officially buying koobecaf!"},
    {account:{name:'Elon Musk', picture: require('../../photos/elon-musk.jpg'), uploadDate:'21.01.2023'}, comment:"I am officially buying koobecaf!"},
    {account:{name:'Elon Musk', picture: require('../../photos/elon-musk.jpg'), uploadDate:'21.01.2023'}, comment:"I am officially buying koobecaf!"},
    {account:{name:'Elon Musk', picture: require('../../photos/elon-musk.jpg'), uploadDate:'21.01.2023'}, comment:"I am officially buying koobecaf!"},
    {account:{name:'Elon Musk', picture: require('../../photos/elon-musk.jpg'), uploadDate:'21.01.2023'}, comment:"I am officially buying koobecaf!"},
    {account:{name:'Elon Musk', picture: require('../../photos/elon-musk.jpg'), uploadDate:'21.01.2023'}, comment:"I am officially buying koobecaf!"},
    {account:{name:'Elon Musk', picture: require('../../photos/elon-musk.jpg'), uploadDate:'21.01.2023'}, comment:"I am officially buying koobecaf!"},
    {account:{name:'Elon Musk', picture: require('../../photos/elon-musk.jpg'), uploadDate:'21.01.2023'}, comment:"I am officially buying koobecaf!"},
    {account:{name:'Elon Musk', picture: require('../../photos/elon-musk.jpg'), uploadDate:'21.01.2023'}, comment:"I am officially buying koobecaf!"}
    ];

const commentp2 = [
    {account:{name:'Andrew Tate', picture: require('../../photos/andrew-tate.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."},
    {account:{name:'Andrew Tate', picture: require('../../photos/andrew-tate.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."},
    {account:{name:'Andrew Tate', picture: require('../../photos/andrew-tate.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."},
    {account:{name:'Andrew Tate', picture: require('../../photos/andrew-tate.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."},
    {account:{name:'Andrew Tate', picture: require('../../photos/andrew-tate.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."},
    {account:{name:'Andrew Tate', picture: require('../../photos/andrew-tate.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."},
    {account:{name:'Andrew Tate', picture: require('../../photos/andrew-tate.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."},
    {account:{name:'Andrew Tate', picture: require('../../photos/andrew-tate.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."},
    {account:{name:'Andrew Tate', picture: require('../../photos/andrew-tate.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."},
    {account:{name:'Andrew Tate', picture: require('../../photos/andrew-tate.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."},
    {account:{name:'Andrew Tate', picture: require('../../photos/andrew-tate.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."},
    {account:{name:'Andrew Tate', picture: require('../../photos/andrew-tate.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."},
    {account:{name:'Andrew Tate', picture: require('../../photos/andrew-tate.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."},
    {account:{name:'Andrew Tate', picture: require('../../photos/andrew-tate.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."},
    {account:{name:'Andrew Tate', picture: require('../../photos/andrew-tate.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."},
    {account:{name:'Andrew Tate', picture: require('../../photos/andrew-tate.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."},
    {account:{name:'Andrew Tate', picture: require('../../photos/andrew-tate.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."},
    {account:{name:'Andrew Tate', picture: require('../../photos/andrew-tate.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."},
    {account:{name:'Andrew Tate', picture: require('../../photos/andrew-tate.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."},
    {account:{name:'Andrew Tate', picture: require('../../photos/andrew-tate.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."},
    {account:{name:'Andrew Tate', picture: require('../../photos/andrew-tate.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."},
    {account:{name:'Andrew Tate', picture: require('../../photos/andrew-tate.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."},
    {account:{name:'Andrew Tate', picture: require('../../photos/andrew-tate.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."},
    {account:{name:'Andrew Tate', picture: require('../../photos/andrew-tate.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."},
    {account:{name:'Andrew Tate', picture: require('../../photos/andrew-tate.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."},
    {account:{name:'Andrew Tate', picture: require('../../photos/andrew-tate.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."},
    {account:{name:'Andrew Tate', picture: require('../../photos/andrew-tate.jpg'), uploadDate:'21.01.2023'}, comment:"The Matrix may have imprisoned me, But I am free inside The Real World."}
];

const myFriends = [
    {account:{name:'Dwayne Johnson', picture: require('../../photos/dwayne-johnson.jpg'), uploadDate: null}},
    {account:{name:'Kevin Hart', picture: require('../../photos/kevin-hart.jpg'), uploadDate: null}},
    {account:{name:'Andrew Tate', picture: require('../../photos/andrew-tate.jpg'), uploadDate: null}},
    {account:{name:'Jeremy Clarkson', picture: require('../../photos/jeremy-clarkson.jpg'), uploadDate: null}},
    {account:{name:'Elon Musk', picture: require('../../photos/elon-musk.jpg'), uploadDate: null}},

    {account:{name:'Dwayne Johnson', picture: require('../../photos/dwayne-johnson.jpg'), uploadDate: null}},
    {account:{name:'Kevin Hart', picture: require('../../photos/kevin-hart.jpg'), uploadDate: null}},
    {account:{name:'Andrew Tate', picture: require('../../photos/andrew-tate.jpg'), uploadDate: null}},
    {account:{name:'Jeremy Clarkson', picture: require('../../photos/jeremy-clarkson.jpg'), uploadDate: null}},
    {account:{name:'Elon Musk', picture: require('../../photos/elon-musk.jpg'), uploadDate: null}},
    {account:{name:'Dwayne Johnson', picture: require('../../photos/dwayne-johnson.jpg'), uploadDate: null}},
    {account:{name:'Kevin Hart', picture: require('../../photos/kevin-hart.jpg'), uploadDate: null}},
    {account:{name:'Andrew Tate', picture: require('../../photos/andrew-tate.jpg'), uploadDate: null}},
    {account:{name:'Jeremy Clarkson', picture: require('../../photos/jeremy-clarkson.jpg'), uploadDate: null}},
    {account:{name:'Elon Musk', picture: require('../../photos/elon-musk.jpg'), uploadDate: null}},
    {account:{name:'Dwayne Johnson', picture: require('../../photos/dwayne-johnson.jpg'), uploadDate: null}},
    {account:{name:'Kevin Hart', picture: require('../../photos/kevin-hart.jpg'), uploadDate: null}},
    {account:{name:'Andrew Tate', picture: require('../../photos/andrew-tate.jpg'), uploadDate: null}},
    {account:{name:'Jeremy Clarkson', picture: require('../../photos/jeremy-clarkson.jpg'), uploadDate: null}},
    {account:{name:'Elon Musk', picture: require('../../photos/elon-musk.jpg'), uploadDate: null}},

    {account:{name:'Dwayne Johnson', picture: require('../../photos/dwayne-johnson.jpg'), uploadDate: null}},
    {account:{name:'Kevin Hart', picture: require('../../photos/kevin-hart.jpg'), uploadDate: null}},
    {account:{name:'Andrew Tate', picture: require('../../photos/andrew-tate.jpg'), uploadDate: null}},
    {account:{name:'Jeremy Clarkson', picture: require('../../photos/jeremy-clarkson.jpg'), uploadDate: null}},
    {account:{name:'Elon Musk', picture: require('../../photos/elon-musk.jpg'), uploadDate: null}},
    {account:{name:'Dwayne Johnson', picture: require('../../photos/dwayne-johnson.jpg'), uploadDate: null}},
    {account:{name:'Kevin Hart', picture: require('../../photos/kevin-hart.jpg'), uploadDate: null}},
    {account:{name:'Andrew Tate', picture: require('../../photos/andrew-tate.jpg'), uploadDate: null}},
    {account:{name:'Jeremy Clarkson', picture: require('../../photos/jeremy-clarkson.jpg'), uploadDate: null}},
    {account:{name:'Elon Musk', picture: require('../../photos/elon-musk.jpg'), uploadDate: null}},
    {account:{name:'Dwayne Johnson', picture: require('../../photos/dwayne-johnson.jpg'), uploadDate: null}},
    {account:{name:'Kevin Hart', picture: require('../../photos/kevin-hart.jpg'), uploadDate: null}},
    {account:{name:'Andrew Tate', picture: require('../../photos/andrew-tate.jpg'), uploadDate: null}},
    {account:{name:'Jeremy Clarkson', picture: require('../../photos/jeremy-clarkson.jpg'), uploadDate: null}},
    {account:{name:'Elon Musk', picture: require('../../photos/elon-musk.jpg'), uploadDate: null}}
];

const old_posts = [
    {account:{name:'Dwayne Johnson', picture: require('../../photos/dwayne-johnson.jpg'), uploadDate:'02.01.2023'}, text:'Made my historic rap debut (thankfully I didn’t suck😅) Huge shout to all the hip hop & music fans for your HYPE reactions that are straight f*cking fire 🔥🔥🔥🙏🏾👊🏾', picture:null, video:'https://www.youtube.com/embed/E9T78bT26sk', comments: commentp1, likes: 9821366},
    {account:{name:'Kevin Hart', picture: require('../../photos/kevin-hart.jpg'), uploadDate:'30.02.2023'}, text:'A lot of blood, sweat, and tears have gone into this career of mine.', picture:require('../../photos/kevin-hart-feed.jpg'), video:null, comments: commentp2, likes: 55},
    {account:{name:'Andrew Tate', picture: require('../../photos/andrew-tate.jpg'), uploadDate:'21.01.2023'}, text:'The Matrix may have imprisoned me, But I am free inside The Real World.', picture:require('../../photos/free-tate.jpg'), video:null, comments: commentp2, likes: -3},
    {account:{name:'Hugh Jackman', picture:require('../../photos/hugh-jackman.jpg'), uploadDate:'24.03.2023'}, text:'@ryanReynolds is my best friend :3', picture:null, video:null, comments: commentp2, likes: 1},
    {account:{name:'Jeremy Clarkson', picture: require('../../photos/jeremy-clarkson.jpg'), uploadDate:'14.03.2023'}, text:'I’m not homophobic, I enjoy watching lesbians on the internet.', picture:require('../../photos/jk.jpg'), video:null, comments: commentp2, likes: 901}
];

export default function Homepage() {
    // const [posts, setPosts] = useState([account, text, picture, video, comments, likes]);
    const [posts, setPosts] = useState([]);

    const [modal, setModal] = useState(false);
    const [onlineFriendsToggle, setOnlineFriendsToggle] = useState(false);
    const [createPost, setCreatePost] = useState(false);
    const [showComments, setShowComments] = useState(false);
    const [showFriends, setShowFriends] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    
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


    const initializePosts = () => {
        setPosts(old_posts);
    }

    const addPost = () => {
        initializePosts();
        // setPosts(prevPosts => {
        //     return {...prevPosts, account:account, text: "asda", picture:null, video:null, comments: null, likes: 0};
        //   });
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

    return(
        <>
            <TopBar notifications={notifications}   showNotifications={showNotifications} />
            <div className={showNotifications ? 'feed_card feed_notificationPanel active' : 'feed_card feed_notificationPanel'}>
                <h2>Notifications</h2>
                
                <div className="feed_notif">
                    <div>
                        <ShowAccount account={{name:'Dwayne Johnson', picture: require('../../photos/dwayne-johnson.jpg'), uploadDate: '12.04.1995'}}/>
                    </div>
                    <p>posted a new photo</p>
                </div>

                <div className="feed_notif">
                    <div>
                        <ShowAccount account={{name:'Dwayne Johnson', picture: require('../../photos/dwayne-johnson.jpg'), uploadDate: '12.04.1995'}}/>
                    </div>
                    <p>posted a new photo</p>
                </div>

                <div className="feed_notif">
                    <div>
                        <ShowAccount account={{name:'Dwayne Johnson', picture: require('../../photos/dwayne-johnson.jpg'), uploadDate: '12.04.1995'}}/>
                    </div>
                    <p>posted a new photo</p>
                </div>

                <div className="feed_notif">
                    <div>
                        <ShowAccount account={{name:'Dwayne Johnson', picture: require('../../photos/dwayne-johnson.jpg'), uploadDate: '12.04.1995'}}/>
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
                    <Status openPostPopup={openPostPopup} createPost={createPost} addPost={addPost} />
                    <Feed posts={posts} togglePosts={togglePosts} showComments={showComments} showFriends={showFriends} toggleFriends={toggleFriends} friends={myFriends    } />
                </div>

                {/* <div className='rightPanel'> */}
                <div className={onlineFriendsToggle ? 'feed_rightPanel active' : 'feed_rightPanel'}>
                    <OnlineFriends friends={myFriends} toggle={toggleFriendsPanel}/>
                </div>
            </div>
        </>
    );
}