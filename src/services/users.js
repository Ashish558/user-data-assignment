import axios from 'axios'
 
const url = `https://602e7c2c4410730017c50b9d.mockapi.io/users`

export const getUsers = (cb) => {
    axios.get(`${url}`)
        .then(res => cb(null, res))
        .catch(err => cb(err, null))
}

