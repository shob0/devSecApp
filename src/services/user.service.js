const URL = 'https://reqres.in';

async function getuserinfo(id) {
    const res = await fetch(URL + '/api/users/' + id);
    return await res.json();;
}

async function getUserList(id) {
    const res = await fetch(URL + '/api/users?page=2');
    return await res.json();;
}

export default {
    getuserinfo,
    getUserList
}