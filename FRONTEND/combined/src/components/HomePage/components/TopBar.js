import React,{useEffect, useState} from "react";
import icon5 from '../icons/search.svg';
import icon6 from '../icons/graph.svg';
import icon7 from '../icons/out.svg';
import { Link } from "react-router-dom";
import '../styles/topBar.css'
import { Link } from "react-router-dom";
import { setUserLogged } from "../../../util";

const SERVER_ADDRESS = 'http://localhost:8084';

async function getRaw(url, method = 'POST', body = null) {
  const options = {
    method,
    credentials: 'include', // include cookies in the request
    body
  };
  const res = await fetch(url, options);
  return res;
}

async function getData(url, method = 'POST', body = null) {
  const res = await getRaw(url, method, body);
  const data = await res.json();
  return data;
}

async function getUser() {
  return await getData(SERVER_ADDRESS + '/getOwnId', 'GET');
}

async function getSuggestions() {
  const url = new URL(SERVER_ADDRESS + '/suggestions?count=10');
  return await getData(url, 'GET');
}

async function getUsers(){
  return await getData(SERVER_ADDRESS+`/users`,'GET');
}

function handleLogout(){
  setUserLogged(false);
}

export default function TopBar({notifications, showNotifications}) {
    const [searchText, setSearchText] = useState('');
  const [filteredFriends, setFilteredFriends] = useState([]);
 const [existingUsers,setExistingUsers] = useState([]);
useEffect(() => {
getUsers().then( 
    users => {
        setExistingUsers(users);
      });
      
}, []);


  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchText(value);

    const filtered = existingUsers.filter((friend) =>
      (friend.firstName+" "+friend.lastName).toLowerCase().includes(value.toLowerCase())
    );
    setFilteredFriends(filtered);
  };

function handleClickSearchedUser(userId) {
    //alert("Ar trebui sa te duca la profilul persoanei " + userName)
    
      getUser()
        .then(data => {
          if(data.id.toString()==userId.toString())
            window.location.href = "http://localhost:3000/myProfile";
          else
            window.location.href = "http://localhost:3000/profile?id=" + userId;});
          

 }

    return (
        <div className="feed_container">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Viga" />
    
            <div className="feed_search">
                <div className={searchText !== '' && filteredFriends!==null ?"feed_search_box_activ":"feed_search_box"}>
                    <img src={icon5}></img>
                    <input type="text" className="feed_search_box_input" value={searchText} onChange={handleSearch} placeholder="Search users..."/>
            {searchText !== '' && (
            <ul className="feed_friend-list">
        {filteredFriends.map((friend, index) => (
          <li key={index} className={index === 0 ? 'feed_first-friend' : ''} onClick={()=>handleClickSearchedUser(friend.id)} style={{ cursor: 'pointer' }}>{friend.firstName+" "+friend.lastName}</li>
        ))}
      </ul> 
  )}
                </div>
                <div className="feed_right_icons">
                    <Link to='http://localhost:8084/logout' onClick={handleLogout}><img src={icon7} ></img></Link>

                </div>
            </div>
      </div>
    );
}