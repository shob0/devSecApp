import React, { useContext } from 'react';
import authService from '../services/auth.service';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  
  
    
    function handleFormSubmit(e) {
        e.preventDefault();
        let username = e.currentTarget.uname.value;
        let password = e.currentTarget.psw.value;
        
        let result = authService.authenticateUser(username, password);
        result.then(data=> {
          console.log(data);
          authService.createSession(data.token);
          navigate('/home');
        }).catch(err => { 
          console.log(err);
          
        });
    }
    
    return (
      <div className="row align-self-center">
      <form onSubmit={handleFormSubmit}>
        <div className="imgcontainer">
          <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" className="avatar"/>
        </div>
      
        <div className="container">
          <label htmlFor="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required />
      
          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />
      
          <button type="submit">Login</button>
        </div>
      </form>
  </div>
    )
}
