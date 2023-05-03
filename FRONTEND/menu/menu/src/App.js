
import './App.css';
import icon5 from './icons/search.svg';
import icon6 from './icons/notif.svg';
import icon7 from './icons/out.svg';
import LargeMenu from './large_menu';
import StretchedMenu from './stretched_menu';
import React from 'react';

function App() {
  return (
    <div className="container">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Viga" />
    
         <LargeMenu />
       {/*<StretchedMenu />*/}
      <div className="search">
        <div className="search_box">
          <img src={icon5}></img>

        </div>
        <div className="right_icons">
      <img src={icon6}></img>
      <img src={icon7}></img>
      </div>
      </div>
    </div>
  );
}

export default App;
