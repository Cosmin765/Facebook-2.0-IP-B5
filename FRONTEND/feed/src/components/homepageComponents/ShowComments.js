// components
import Comment from "./Comment";

// styles
import '../../styles/homepageStyles/showComments.css';

export default function ShowComments({comments, toggleFunction, showComments}) {
    const commentList = comments.map((comment) => {
        return <Comment comment={comment}/>;
    });

    return (
        <div className={showComments ? 'card showComments active' : 'card showComments'} style={{boxShadow: 'none'}}>
            <div className="top">
                <p>Comments</p>
                <button className='btn' onClick={toggleFunction}>Close</button>
            </div>
            <div className="commentsList">
                {commentList}
            </div>
        </div>
    );
}