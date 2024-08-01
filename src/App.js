import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import {auth} from './firebase';
import { useEffect, useState } from 'react';
import Donate from './pages/Donate';
import Donor from './pages/Donor';
import Acceptor from './pages/Acceptor';
import About from './pages/About';
import Profile from './pages/Profile';


function App() {
  const [userName, setUserName] = useState("");
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUserName(user.displayName)
      }
      else setUserName("")
    })
    
  },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home name={userName}/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/whydonate' element={<Donate/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/donor' element={<Donor/>} />
        <Route path='/acceptor' element={<Acceptor/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
