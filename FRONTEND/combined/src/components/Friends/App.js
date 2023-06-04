
import './App.css';
import icon5 from './icons/search.svg';
import icon6 from './icons/notif.svg';
import icon7 from './icons/out.svg';
//import LargeMenu from './large_menu';
import MainContainer from './main_container'
import StretchedMenu from './stretched_menu';
import React,{useEffect, useState}  from 'react';
import MainContainer_Friend_Request from './main_container_friend_request';
import Sugestions_Friends from './Sugestions_Friends';
import { Link } from 'react-router-dom';
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

function App() {
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
    <div className="fr_container">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Viga" />
    
        {/* <LargeMenu /> */}
       <StretchedMenu />
      
      <div className="fr_container2">
        <div className="fr_search">
          <div  className={searchText !== '' && filteredFriends!==null ?"feed_search_box_activ":"feed_search_box"}>
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
          <div className="fr_right_icons">
            
           <Link to='/login'> 
           <img src={icon7}></img>
          </Link>
          </div>
        </div>
        {<MainContainer />}
        {/* {<MainContainer_Friend_Request/>} */}
        {/* {<Sugestions_Friends/>} */}
      </div>
      
    </div>
  );
}

export default App;