// components
import ShowAccount from "./ShowAccount";

// styles
import '../../styles/homepageStyles/comment.css';

export default function Comment({comment}) {
    return (
        <div className="feed_test">
            <div className="feed_comment">
                <ShowAccount account={comment.account} />
                <div className="feed_comentText">
                    <p>{comment.comment}</p>
                </div>
            </div>
        </div>
    );
}