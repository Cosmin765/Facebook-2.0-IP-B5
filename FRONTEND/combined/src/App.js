
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import RegisterAccount from './components/Register/App';
import ForgotPass from './components/Forgot/forgotpass';
import NewPass from './components/Forgot/newpass';
import Verify from './components/Forgot/verify';
import Homepage from "./components/HomePage/App";
import MyProfile from './components/MyProfile/App';
import Profile from './components/Profile/App';
import ChatBox from './components/Message/ChatBox';
import Friends from './components/Friends/App';
import FriendRequests from './components/Friends/FriendRequests';
import Suggestions from './components/Friends/Suggestions';
import CreateAds from './components/CreateAds/CreateAds';
import ForceGraph from './components/Graph/ForceGraph';
function App() {
  return (
    <Router> 
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route  path="/register" element={<RegisterAccount/>} />
        <Route path="/forgot" element={<ForgotPass/>} />
        <Route path="/verify" element={<Verify/>} />
        <Route path="/new" element={<NewPass/>} />
        <Route path="/home" element={<Homepage/>}/>
        <Route path="/myprofile" element={<MyProfile/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/mess" element={<ChatBox/>}/>
        <Route path="/friends" element={<Friends/>}/>
        <Route path="/requests" element={<FriendRequests/>}/>
        <Route path="/suggestions" element={<Suggestions/>}/>
        <Route path="/createAds" element={<CreateAds/>}/>
        <Route path="/graph" element={<ForceGraph/>}/>


        </Routes>
   </Router>
  );
}

export default App;
