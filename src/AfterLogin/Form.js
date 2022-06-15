import React from 'react'
import Admin from './Admin'
import User from './User'

export const Form = () => {
    var user = sessionStorage.userInfo;
    user = user.trim();
    user = JSON.parse(user);
    user = user.uid;

    return <div>
        {user==='admin' ? <Admin/> : <User/>}
    </div>
}
