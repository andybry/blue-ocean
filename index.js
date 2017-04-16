const axios = require('axios');
const token = process.env.secret_key_PSW;

axios('https://api.github.com/user', {
    headers: {
        authorization: `token ${token}`
    }
})
    .then(console.log)
    .catch(console.log)