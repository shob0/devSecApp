import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../context/userContext.js';
import userService from '../services/user.service';
import Header from './/header.component';
import Card from './card.component';

export default function Home() {
    const [userDetails, setUserDetails] = useContext(UserContext);
    
    function setUser() {
    let apires = userService.getuserinfo(3);
        apires.then(user => {
            setUserDetails(user.data);
        }
            )
              .catch(err => console.log(err));
    }
    
    useEffect(()=>{
        setUser();
    },[])
  
    
    return (
        <div>
        <Header />
        {
            !userDetails ? 
            (<p>loading...</p>) 
            : 
            (
            <div className='container d-flex justify-content-center'>
                <div>
                    <Card user={userDetails} />
                </div>
            </div>)
        }
            
        </div>
    )
}