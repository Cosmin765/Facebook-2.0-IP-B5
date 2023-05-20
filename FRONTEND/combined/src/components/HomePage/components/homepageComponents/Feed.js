// components
import Card from './Card';
import ShowComments from './ShowComments';
import Friends from './Friends';
import Ad from './Ad';

// style
import '../../styles/homepageStyles/feed.css'

export default function Feed({togglePosts, posts, showComments, showFriends, toggleFriends, friends, useCase}) {
    const feed = posts.map(post =>{

        return(<>{post.link == null ? 
            <>
                <Card post={post} openCommentsMenu={togglePosts} openFriendsMenu={toggleFriends}/>

                <div className={showComments ? 'feed_spacer active' : 'feed_spacer'}>
                    <ShowComments comments={post.comments} toggleFunction={togglePosts} showComments={showComments} />
                </div>

                <div className={showFriends ? 'feed_spacer active' : 'feed_spacer'}>
                    <Friends friends={friends} toggleFunction={toggleFriends} showFriends={showFriends} />
                </div>
            </> : 
            <>
                 <Ad ad={post} />
             </>}</>);
    });

    return (
    <div className={useCase === 'feed' ? 'feed_feed' : 'profile_feed'}>
        {feed}
    </div>
    );
}