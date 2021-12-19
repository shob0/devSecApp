import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Login from './components/login.component';
import Home from './components/home.component';
import Users from './components/users.component';
import Profile from './components/profile.component';
import PrivateRoute from './privateRoute';

import { UserContext } from './context/userContext.js';


function App() {
  const [user, setUser] = useState({});
  
  
  return (
    <BrowserRouter>
    <div className='bg-light'>
      <UserContext.Provider value={[user, setUser]}>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Users" element={<Users />} />
          <Route exact path="/home" element={<PrivateRoute>
                                                  <Home />
                                                </PrivateRoute>
                                                } />
          <Route exact path="/profile" element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
          } />
        </Routes>
        </UserContext.Provider>
      </div>
      </BrowserRouter>
  );
}

export default App;
