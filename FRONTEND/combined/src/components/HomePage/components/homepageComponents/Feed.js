// components
import Card from './Card';
import ShowComments from './ShowComments';
import Friends from './Friends';
import { v4 as uuidv4 } from 'uuid';
import Ad from './Ad';

// style
import '../../styles/homepageStyles/feed.css'

export default function Feed({togglePosts, posts, showComments, showFriends, toggleFriends, friends}) {
    const feed = posts.map((post, i) =>
        <div key={uuidv4()}>
            {/* <Card post={post} openCommentsMenu={togglePosts} openFriendsMenu={toggleFriends}/> */}

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

            <div className={showFriends ? 'feed_spacer active' : 'feed_spacer'}>
                <Friends friends={friends} toggleFunction={toggleFriends} showFriends={showFriends} />
            </div>
        </div>
    );
    
    return (
    <div className='feed_feed'>
        {feed}
    </div>
    );
}