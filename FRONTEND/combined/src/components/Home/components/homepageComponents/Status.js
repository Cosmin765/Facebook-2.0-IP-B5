// components
import CreatePost from './CreatePost';

// styles
import '../../styles/homepageStyles/status.css'

export default function Status(props) {
    return (
        <div className='status'>
            <div className='statusInput'>
            <input type="text" id="fname" className="input" placeholder="How do you feel today?" onClick={props.openPostPopup}/>
            </div>

            <div className={props.createPost ? 'spacer active' : 'spacer'}>
                <CreatePost toggleFunction={props.openPostPopup}/>
            </div>
        </div>
    );
}