const axios = require('axios');
const token = process.env.secret_key_PSW;

axios('https://api.github.com/user', {
    headers: {
        authorization: `token ${token}`
    }
})
    .then(x => console.log(x.data))
    .catch(console.log)