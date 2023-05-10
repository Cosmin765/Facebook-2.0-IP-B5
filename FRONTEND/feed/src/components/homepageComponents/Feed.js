// components
import Card from './Card';
import ShowComments from './ShowComments';
import Friends from './Friends';

// style
import '../../styles/homepageStyles/feed.css'

export default function Feed({togglePosts, posts, showComments, showFriends, toggleFriends, friends}) {
    const feed = posts.map(post =>
        <>
            <Card post={post} openCommentsMenu={togglePosts} openFriendsMenu={toggleFriends}/>

            <div className={showComments ? 'spacer active' : 'spacer'}>
                <ShowComments comments={post.comments} toggleFunction={togglePosts} showComments={showComments} />
            </div>

            <div className={showFriends ? 'spacer active' : 'spacer'}>
                <Friends friends={friends} toggleFunction={toggleFriends} showFriends={showFriends} />
            </div>
        </>
    );
    
    return (
    <div className='feed'>
        {feed}

        {/* {
        ads.map(ad =>
            <Ad account={ad.account} text={ad.text} pictures={ad.picture} ad={ad.ad} link={ad.link}/>
            )
        } */}
    </div>
    );
}