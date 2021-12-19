import React, {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import authService from '../services/auth.service';
import { UserContext } from '../context/userContext.js';

export default function Header() {
    const [user, setUserDetails] = useContext(UserContext);
    const navigate = useNavigate();
    
    function handleClick(dest) {
        if(dest === 'profile') {
            navigate('/profile');
        } else if (dest === 'logout') {
            authService.logout();
            setUserDetails({});
            navigate('/');
        }
        
        
    }
    
    return (
        <nav className='navbar bg-warning p-3 navbar-expand-lg navbar-light d-flex justify-content-between'>
            <span className='display-6'>Welcome!!</span>
            <div className='d-flex'>
                <a className='nav-item nav-link' href='#' title='Edit Profile' onClick={()=> {handleClick('profile');}}>{user.first_name} {user.last_name}</a>
                <a className='nav-item nav-link' href='#' onClick={()=> {handleClick('logout');}}>Logout</a>
            </div>
        </nav>
        )
}

