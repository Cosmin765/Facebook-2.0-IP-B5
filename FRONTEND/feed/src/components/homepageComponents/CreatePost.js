import React from "react";
import ShowAccount from "./ShowAccount";
import PostBody from "./PostBody";

import '../../styles/ColorScheme.css'
import '../../styles/homepageStyles/CreatePost.css';
import '../../styles/homepageStyles/a.css';

export default function CreatePost(props) {

    return (
        <div className='card createPostContainer' style={{boxShadow: 'none'}}>
            <ShowAccount account={{name:'Kevin Hart', picture: require('../../photos/KevinHart.jpg'), uploadDate:null}}/>
            <PostBody toggleFunction={props.toggleFunction} />
        </div>
    );
}