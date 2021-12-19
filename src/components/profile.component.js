import React, { useContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header.component';

import { UserContext } from '../context/userContext.js';
import {HANDLE_INPUT_TEXT, formReducer } from '../reducers/formReducer';



export default function Profile() {
    const [user, setUser] = useContext(UserContext);
    const navigate = useNavigate();
    const initialState = {
      fname: '',
      lname: '',
      email: ''
    };
    
    const [formState, dispatch] = useReducer(formReducer, initialState);
    const handleTextChange = (e) =>{
      dispatch({
        type: HANDLE_INPUT_TEXT,
        field: e.target.name,
        payload: e.target.value
      });
    };
    
    const handleFormSubmit = (e) =>{
      e.preventDefault();
      const updatedUser = {
        "id": 2,
        "email": formState.email,
        "first_name": formState.fname,
        "last_name": formState.fname,
        "avatar": "https://reqres.in/img/faces/2-image.jpg"
    }
    setUser(updatedUser);
    // navigate('/home');
    };
    
    const handleCancel = () =>{
      navigate('/home');  
    }
  
    return (
        <div>
        <Header/>
            <form onSubmit={handleFormSubmit}>
              <div className="container">
                <h1>Update Profile</h1>
                <p>Please fill in this form to update required details.</p>
                <hr />
            
                <label htmlFor="fname"><b>First Name:</b></label>
                <input 
                    type="text"
                    placeholder="First Name"
                    name="fname"
                    value = {formState.fname}
                    onChange={e => handleTextChange(e)}
                    />
            
                <label htmlFor="lname"><b>Last Name:</b></label>
                <input 
                    type="text"
                    placeholder="Last Name"
                    name="lname"
                    value = {formState.lname}
                    onChange={e => handleTextChange(e)}
                    />
                
                <label htmlFor="email"><b>Email:</b></label>
                <input
                    type="text"
                    placeholder="Email"
                    name="email" required
                    value = {formState.email}
                    onChange={e => handleTextChange(e)}
                    />
            
                <p>By Clicking on Update <a href="#" style={{color:"dodgerblue"}}>Your details </a>will be updated.</p>
            
                <div className="clearfix">
                  <button type="button" className="cancelbtn" onClick={handleCancel}>Cancel</button>
                  <button type="submit" className="signupbtn">Update</button>
                </div>
              </div>
            </form>
        </div>
    )
}