import React from "react";
import Card from "./Card";
import '../../styles/homepageStyles/feed.css'

export default function Feed({toggleModalFunc, posts, openPostPopupFunc}) {
    const feedAccounts = posts.map(post =>
        <Card toggleModal={toggleModalFunc} post={post} openFriendsMenu={openPostPopupFunc}/>
    );
    
    return (
    <div className='feed'>
        {feedAccounts}

        {/* {
        ads.map(ad =>
            <Ad account={ad.account} text={ad.text} pictures={ad.picture} ad={ad.ad} link={ad.link}/>
            )
        } */}
    </div>
    );
}