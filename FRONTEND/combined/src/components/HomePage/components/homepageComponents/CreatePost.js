// components
import ShowAccount from "./ShowAccount";
import PostBody from "./PostBody";
// styles
import '../../styles/homepageStyles/CreatePost.css';
import React, { useState,useEffect } from 'react';
import { getUser,getImage } from "../../../../util";

export default function CreatePost(props) {
    const [userData, setUserData] = useState([]);
    const [base64,setBase64]=useState("");
    useEffect(() => {
      getUser()
        .then(data => {
          setUserData(data);
          getImage(data.profile_picture).then(setBase64);
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }, []);
    const fullName = `${userData.firstName} ${userData.lastName}`;

    return (
        <div className='feed_card feed_createPostContainer' style={{boxShadow: 'none'}}>
            <ShowAccount account={{ name: fullName, picture: 'data:image/png;base64,'+base64, uploadDate:null}}/>
            <PostBody toggleFunction={props.toggleFunction} />
        </div>
    );
}