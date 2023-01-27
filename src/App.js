import { useEffect } from 'react';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login/Login';

import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './features/auth/authSlice';
import Profile from './pages/profile/Profile';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const dispath = useDispatch();
  const { user } = useSelector(state => state.auth);

  useEffect(() => {
    const sub = onAuthStateChanged(auth, (user) => {
      if(user){
        console.log("user logged in", user);
        dispath(login(user));
      }else {
        dispath(logout());
      }
    })

    return sub;

  }, [dispath]);

  return (
    <Router>
      <Navbar />
      { user !== null ? (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      ) : (
        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>
      ) }
    </Router>
  )
}

export default App;