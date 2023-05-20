// components
import Comment from "./Comment";

// styles
import '../../styles/homepageStyles/showComments.css';

export default function ShowComments({comments, toggleFunction, showComments}) {
    const commentList = comments.map((comment, i) => {
        return <Comment key={i} comment={comment}/>;
    });

    return (
        <div className={showComments ? 'feed_card feed_showComments feed_card_border active' : 'feed_card feed_showComments feed_card_border'}>
            <div className="feed_top">
                <p>Comments</p>
                <button className='feed_btn' onClick={toggleFunction}>Close</button>
            </div>
            <div className="feed_commentsList">
                {commentList}
            </div>
        </div>
    );
}