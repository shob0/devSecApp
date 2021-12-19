const API = 'https://reqres.in/api';

async function authenticateUser(username, password) {
    const reqOption = {
        method: 'POST',
        body: JSON.stringify({username: 'eve.holt@reqres.in', password: 'cityslicka'}),
        headers: {
            'Content-type': 'application/json'
        }
    }
    var res = await fetch(API + '/login', reqOption);
    var data = await res.json();
    return data;
    
}

function logout() {
    localStorage.removeItem('token');
}

function createSession(token, cb) {
    localStorage.setItem('token', token);
    return;
}

function isAuthenticated() {
    let token = localStorage.getItem('token');
    if(token) {
       return true; 
    }
    return false;
}

export default {
    authenticateUser,
    logout,
    isAuthenticated,
    createSession
}