// components
import ShowAccount from "./ShowAccount";
import PostBody from "./PostBody";

// styles
import '../../styles/homepageStyles/createPost.css';

export default function CreatePost(props) {

    return (
        <div className='card createPostContainer' style={{boxShadow: 'none'}}>
            <ShowAccount account={{name:'Kevin Hart', picture: require('../../photos/KevinHart.jpg'), uploadDate:null}}/>
            <PostBody toggleFunction={props.toggleFunction} />
        </div>
    );
}