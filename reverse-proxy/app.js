const express = require('express');
const app = express();
const axios = require('axios');

const PORT = process.env.PORT || 3050;

// app.get('/', (req, res) => {
//     res.send("Hello World");
// })

// app.get(':endpoint([\\/\\w\\,-]*)', (req, res) => {
//     res.send("Hello World");
// })

app.get(':endpoint([\\/\\w\\,-]*)', (req, res) => {

    const endpoint = 'https://node-ex-mysql.herokuapp.com' + req.params.endpoint;

    axios.get(endpoint)
    .then(response => {
        res.json(response.data);
    }).catch(error => {
        res.json(error);
    })
})




app.listen(PORT, () => console.log(`Server running in port ${PORT}`));