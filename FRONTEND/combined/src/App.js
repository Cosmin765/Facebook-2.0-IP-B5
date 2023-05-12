
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import RegisterAccount from './components/Register/Register';
function App() {
  return (
    <Router> 
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route  path="/register" element={<RegisterAccount/>} />
        </Routes>
   </Router>
  );
}

export default App;
