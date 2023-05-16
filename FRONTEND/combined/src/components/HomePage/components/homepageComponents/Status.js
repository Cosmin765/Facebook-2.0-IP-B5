// components
import CreatePost from './CreatePost';

// styles
import '../../styles/homepageStyles/status.css'

export default function Status(props) {
    return (
        <div className='feed_status'>
            <div className='feed_statusInput'>
            <input type="text" id="feed_fname" className="feed_input" placeholder="How do you feel today?" onClick={props.openPostPopup}/>
            </div>

            <div className={props.createPost ? 'feed_spacer active' : 'feed_spacer'}>
                <CreatePost toggleFunction={props.openPostPopup}/>
            </div>
        </div>
    );
}