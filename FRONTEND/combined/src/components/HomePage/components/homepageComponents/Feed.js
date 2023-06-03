import React from "react";
import { useState, useEffect } from 'react';

// components
import Card from './Card';
import ShowComments from './ShowComments';
import Friends from './Friends';
import Ad from './Ad';

// style
import '../../styles/homepageStyles/feed.css'

export default function Feed({togglePosts, posts, showComments, showFriends, toggleFriends, friends, updateFeed}) {
    const [commentSectionId, setCommentSectionId] = useState(0);

    const setCommentId = (id) => {
        setCommentSectionId(id);
    }

    const feed = posts.map((post, i) =>
        <div key={uuidv4()}>
            {/* <Card post={post} openCommentsMenu={togglePosts} openFriendsMenu={toggleFriends}/> */}

            <>{post.type == null ? 
            <>
                <Card updateFeed={updateFeed} post={post} openCommentsMenu={togglePosts} openFriendsMenu={toggleFriends} commentSectionId={commentSectionId} setCommentId={setCommentId} />

                <div className={showComments ? 'feed_spacer active' : 'feed_spacer'}>
                    <ShowComments comments={post.comments} toggleFunction={togglePosts} showComments={showComments} postId={post.id} commentSectionId={commentSectionId} setCommentId={setCommentSectionId} />
                </div>

                <div className={showFriends ? 'feed_spacer active' : 'feed_spacer'}>
                    <Friends friends={friends} toggleFunction={toggleFriends} showFriends={showFriends} />
                </div>
            </> : 
            <>
                 <Ad ad={post} />
             </>}</>

    return (
    <div className={useCase === 'feed' ? 'feed_feed' : 'profile_feed'}>
        {feed}
    </div>
    );
}