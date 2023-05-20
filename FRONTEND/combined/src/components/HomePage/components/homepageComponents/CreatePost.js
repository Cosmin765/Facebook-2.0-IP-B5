// components
import ShowAccount from "./ShowAccount";
import PostBody from "./PostBody";
// styles
import '../../styles/homepageStyles/CreatePost.css';
import React, { useState,useEffect } from 'react';
const SERVER_ADDRESS = 'http://localhost:8084';
async function getData(url, method='POST', body=null) {
    const res = await getRaw(url, method, body);
    const data = await res.json();
    return data;
  }
  async function getRaw(url, method='POST', body=null) {
    const options = {
      method,
      credentials: 'include', // include cookies in the request
      body
    };
    const res = await fetch(url, options);
    return res;
  }
  
  
  async function getUser() {
    return await getData(SERVER_ADDRESS + '/getOwnId', 'GET');
  }
  
 

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