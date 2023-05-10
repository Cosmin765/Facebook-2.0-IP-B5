import React from "react";
import { useState } from "react";
import CreatePost from "./CreatePost";
import Status from "./Status";
import Feed from "./Feed";
import Friends from "./Friends";
import ShowComments from "./ShowComments";
import OnlineFriends from "./OnlineFriends";
import '../../styles/homepageStyles/homepage.css';
import '../../styles/homepageStyles/modal.css';
import TopBar from "../TopBar";
import Teodora from "../Teodora";

import LargeMenu from '../large_menu';
import StretchedMenu from "../stretched_menu";

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
    {account:{name:'Elon Musk', picture: require('../../photos/elon-musk.jpg'), uploadDate: null}}
];

const posts = [
    {account:{name:'Dwayne Johnson', picture: require('../../photos/dwayne-johnson.jpg'), uploadDate:'02.01.2023'}, text:'Made my historic rap debut (thankfully I didn’t suck😅) Huge shout to all the hip hop & music fans for your HYPE reactions that are straight f*cking fire 🔥🔥🔥🙏🏾👊🏾', picture:null, video:'https://www.youtube.com/embed/E9T78bT26sk', comments: commentp1, likes: 9821366},
    {account:{name:'Kevin Hart', picture: require('../../photos/kevin-hart.jpg'), uploadDate:'30.02.2023'}, text:'A lot of blood, sweat, and tears have gone into this career of mine.', picture:require('../../photos/kevin-hart-feed.jpg'), video:null, comments: commentp2, likes: 55},
    {account:{name:'Andrew Tate', picture: require('../../photos/andrew-tate.jpg'), uploadDate:'21.01.2023'}, text:'The Matrix may have imprisoned me, But I am free inside The Real World.', picture:require('../../photos/free-tate.jpg'), video:null, comments: null, likes: -3},
    {account:{name:'Hugh Jackman', picture:require('../../photos/hugh-jackman.jpg'), uploadDate:'24.03.2023'}, text:'@ryanReynolds is my best friend :3', picture:null, video:null, comments: null, likes: 1},
    {account:{name:'Jeremy Clarkson', picture: require('../../photos/jeremy-clarkson.jpg'), uploadDate:'14.03.2023'}, text:'I’m not homophobic, I enjoy watching lesbians on the internet.', picture:require('../../photos/jk.jpg'), video:null, comments: null, likes: 901}
  ];

export default function Homepage() {
    const [modal, setModal] = useState(false);
    const [createPost, setCreatePost] = useState(false);
    const [showComments, setShowComments] = useState(false);
    const [sharePost, setSharePost] = useState(true);

    const toggleModal = () => {
        setCreatePost(false);
        setShowComments(false);
        setSharePost(false);
        setModal(!modal);
      };

    const openPostPopup = () => {
        toggleModal();
        setCreatePost(true);
    }

    const openComments = () => {
        toggleModal();
        setShowComments(true);
    }

    const openShareMenu = () => {
        toggleModal();
        setSharePost(true);
    }

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    const openAcount = () => {
        alert("Profilul jmek al lui Andrew Tate");
    }

    return(
        <>
            <div>
                {/* <TopBar /> */}
                <Teodora />
            </div>
            <div className="homepage">
                <div className='a'>
                    <LargeMenu />
                    {/* <StretchedMenu /> */}
                </div>
                <div className='mid'>
                    {modal && (
                        <div className="modal">
                            <div onClick={toggleModal} className="overlay"></div>
                            <div className="modal-content">
                                {createPost && <CreatePost toggleFunction={openPostPopup} />}
                                {showComments && <ShowComments comments={commentp1} toggleFunction={toggleModal}/>}
                                {sharePost && <Friends friends={myFriends} toggleFunction={toggleModal} sharePannel={true}/>}
                            </div>
                        </div>
                    )}

                    <div className="main">
                        <Status openPostPopup={openPostPopup}/>
                        <Feed toggleModalFunc={openComments} openPostPopupFunc={openShareMenu} posts={posts}/>
                    </div>
                </div>

                <div className='b'>
                    <OnlineFriends friends={myFriends} openAcount={openAcount}/>
                </div>
            </div>
        </>
    );
}