
import './App.css';
import icon5 from './icons/search.svg';
import icon6 from './icons/notif.svg';
import icon7 from './icons/out.svg';
//import LargeMenu from './large_menu';
import MainContainer from './main_container'
import StretchedMenu from './stretched_menu';
import React,{useState} from 'react';
import MainContainer_Friend_Request from './main_container_friend_request';
import Sugestions_Friends from './Sugestions_Friends';

function App() {
  const [searchText, setSearchText] = useState('');
  const [filteredFriends, setFilteredFriends] = useState([]);

  const friends = ['Alice', 'Bob', 'Carol', 'David', 'Eve'];
  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchText(value);

    const filtered = friends.filter((friend) =>
      friend.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredFriends(filtered);
  };
  return (
    <div className="container">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Viga" />
    
        {/* <LargeMenu /> */}
       {<StretchedMenu />}
      
      <div className="container2">
        <div className="search">
          <div className={searchText !== ''?"search_box_activ":"search_box"}>
          
            <img src={icon5}></img>
            <input type="text" className="search_box_input" value={searchText} onChange={handleSearch} placeholder="Search friends"/>
            {searchText !== '' && (
            <ul className="friend-list">
        {filteredFriends.map((friend, index) => (
          <li key={index} className={index === 0 ? 'first-friend' : ''}>{friend}</li>
        ))}
      </ul> 
  )}
          </div>
          <div className="right_icons">
            <img src={icon6}></img>
            <img src={icon7}></img>
          </div>
        </div>
        {/* {<MainContainer />} */}
        {<MainContainer_Friend_Request/>}
        {/* {<Sugestions_Friends/>} */}
      </div>
      
    </div>
  );
}

export default App;