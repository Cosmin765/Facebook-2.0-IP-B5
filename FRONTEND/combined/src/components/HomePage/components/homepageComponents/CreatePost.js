// components
import ShowAccount from "./ShowAccount";
import PostBody from "./PostBody";
// styles
import '../../styles/homepageStyles/CreatePost.css';
import React, { useState,useEffect } from 'react';
import { getUser } from "../../../../util";

export default function CreatePost(props) {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
      getUser()
        .then(data => {
          setUserData(data);
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }, []);
    const fullName = `${userData.firstName} ${userData.lastName}`;

    return (
        <div className='feed_card feed_createPostContainer' style={{boxShadow: 'none'}}>
            <ShowAccount account={{ name: fullName, picture: require('../../photos/KevinHart.jpg'), uploadDate:null}}/>
            <PostBody toggleFunction={props.toggleFunction} />
        </div>
    );
}