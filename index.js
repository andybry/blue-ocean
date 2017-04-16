const axios = require('axios');
const token = process.env.secret_key;

console.log('user data:')
axios('https://api.github.com/user', {
    headers: {
        authorization: `token ${token}`
    }
})
    .then(x => console.log(x.data))
    .catch(console.log)