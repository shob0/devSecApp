import React, { useEffect, useState } from 'react';

import userService from '../services/user.service';
import Card from './card.component';

export default function Users() {
    const [users, setUsers] = useState();
    
    useEffect(()=>{
        userService.getUserList()
            .then(res => {
                setUsers(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <div className='container'>
            <div className='row row-cols-1 row-cols-md-4 g-4'>
                
                    {users ? (
                                users.map((user, i) => (<Card user={user} key={i}/>))
                    ) : <div>Loading...</div>}
                
            </div>
        </div>
        )
}